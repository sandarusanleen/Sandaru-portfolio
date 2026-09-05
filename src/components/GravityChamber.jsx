import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { useGravity } from '../context/GravityContext';
import { SKILL_BADGES } from '../data/portfolioData';
import { playCollisionChime, playPulse } from '../utils/audio';

export default function GravityChamber() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const bodiesRef = useRef([]);
  const mouseConstraintRef = useRef(null);
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const { gravityVector, shockwaveTrigger, gravityMode } = useGravity();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const {
      Engine,
      World,
      Bodies,
      Body,
      Mouse,
      MouseConstraint,
      Events,
      Composite
    } = Matter;

    // Initialize Matter Engine
    const engine = Engine.create({
      enableSleeping: false,
      gravity: { x: gravityVector.x, y: gravityVector.y, scale: 0.001 }
    });
    engineRef.current = engine;

    const ctx = canvas.getContext('2d');

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Create Screen Boundary Walls
    const wallThickness = 60;
    const wallOptions = {
      isStatic: true,
      restitution: 0.85,
      friction: 0.05,
      render: { visible: false }
    };

    let ground = Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, wallOptions);
    let ceiling = Bodies.rectangle(width / 2, -wallThickness / 2, width * 2, wallThickness, wallOptions);
    let leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, wallOptions);
    let rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, wallOptions);

    World.add(engine.world, [ground, ceiling, leftWall, rightWall]);

    // Create Skill Badge Bodies
    const badgeBodies = [];
    const isMobile = width < 640;
    const activeSkills = isMobile ? SKILL_BADGES.slice(0, 10) : SKILL_BADGES;

    activeSkills.forEach((skill, index) => {
      // Estimate badge pill dimensions based on label length
      const badgeWidth = Math.max(90, skill.label.length * 10 + 36);
      const badgeHeight = 40;
      const cornerRadius = 20;

      // Spawn in staggered grid within the center of the chamber
      const spawnCols = isMobile ? 2 : 4;
      const col = index % spawnCols;
      const row = Math.floor(index / spawnCols);
      const startX = width * 0.2 + (col * (width * 0.6)) / Math.max(1, spawnCols - 1) + (Math.random() - 0.5) * 40;
      const startY = height * 0.25 + row * 65 + (Math.random() - 0.5) * 30;

      const body = Bodies.rectangle(startX, startY, badgeWidth, badgeHeight, {
        chamfer: { radius: cornerRadius },
        restitution: 0.82,
        friction: 0.02,
        frictionAir: 0.012,
        density: 0.002,
        angle: (Math.random() - 0.5) * 0.4,
      });

      // Initial gentle microgravity velocity
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2.2,
        y: (Math.random() - 0.5) * 2.2
      });

      // Attach custom metadata
      body.customSkill = {
        ...skill,
        w: badgeWidth,
        h: badgeHeight,
        radius: cornerRadius
      };

      badgeBodies.push(body);
    });

    bodiesRef.current = badgeBodies;
    World.add(engine.world, badgeBodies);

    // Mouse & Drag Control
    const mouse = Mouse.create(canvas);
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        damping: 0.1,
        render: { visible: false }
      }
    });
    mouseConstraintRef.current = mouseConstraint;
    World.add(engine.world, mouseConstraint);

    // Track mouse position for the anti-gravity repulsion field
    let cursorPosition = { x: -1000, y: -1000 };
    let isCursorInside = false;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      cursorPosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      isCursorInside = true;
    };

    const handlePointerLeave = () => {
      isCursorInside = false;
      cursorPosition = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);

    // Collision sound trigger
    Events.on(engine, 'collisionStart', (event) => {
      const pairs = event.pairs;
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        if (pair.bodyA.customSkill || pair.bodyB.customSkill) {
          const relVel = Math.hypot(
            pair.bodyA.velocity.x - pair.bodyB.velocity.x,
            pair.bodyA.velocity.y - pair.bodyB.velocity.y
          );
          if (relVel > 1.8) {
            playCollisionChime(Math.min(relVel, 4));
          }
        }
      }
    });

    // Main Custom Render Loop
    let animId;

    const renderLoop = () => {
      Engine.update(engine, 1000 / 60);

      // Microgravity thrusters: in Zero-G, apply subtle micro-propulsion to keep bodies floating
      if (engine.world.gravity.y === 0 && engine.world.gravity.x === 0) {
        badgeBodies.forEach((b) => {
          const speed = Math.hypot(b.velocity.x, b.velocity.y);
          if (speed < 0.4) {
            Body.applyForce(b, b.position, {
              x: (Math.random() - 0.5) * 0.0003,
              y: (Math.random() - 0.5) * 0.0003
            });
          }
        });
      }

      // Cursor Repulsion Field
      if (isCursorInside && !mouseConstraint.body) {
        const repelRadius = 130;
        badgeBodies.forEach((b) => {
          const dx = b.position.x - cursorPosition.x;
          const dy = b.position.y - cursorPosition.y;
          const dist = Math.hypot(dx, dy);

          if (dist > 0 && dist < repelRadius) {
            const force = ((repelRadius - dist) / repelRadius) * 0.0018;
            Body.applyForce(b, b.position, {
              x: (dx / dist) * force,
              y: (dy / dist) * force
            });
          }
        });
      }

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital chamber boundary ring indicator
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 8]);
      ctx.strokeRect(16, 16, width - 32, height - 32);
      ctx.restore();

      // Render Each Badge Body
      badgeBodies.forEach((b) => {
        const { position, angle, customSkill } = b;
        const isDragged = mouseConstraint.body === b;

        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(angle);

        const w = customSkill.w;
        const h = customSkill.h;
        const r = customSkill.radius;

        // Draw Badge Path (Rounded Rectangle)
        ctx.beginPath();
        ctx.moveTo(-w / 2 + r, -h / 2);
        ctx.lineTo(w / 2 - r, -h / 2);
        ctx.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
        ctx.lineTo(w / 2, h / 2 - r);
        ctx.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
        ctx.lineTo(-w / 2 + r, h / 2);
        ctx.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
        ctx.lineTo(-w / 2, -h / 2 + r);
        ctx.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
        ctx.closePath();

        // Dark glass background fill
        ctx.fillStyle = isDragged ? 'rgba(28, 28, 48, 0.9)' : 'rgba(14, 14, 24, 0.78)';
        ctx.fill();

        // Neon Glow Border
        ctx.lineWidth = isDragged ? 2.5 : 1.5;
        ctx.strokeStyle = customSkill.color;
        ctx.shadowColor = customSkill.color;
        ctx.shadowBlur = isDragged ? 20 : 8;
        ctx.stroke();

        // Reset shadow for text rendering
        ctx.shadowBlur = 0;

        // Status indicator dot
        ctx.beginPath();
        ctx.arc(-w / 2 + 16, 0, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = customSkill.color;
        ctx.shadowColor = customSkill.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Text Label
        ctx.fillStyle = '#f8fafc';
        ctx.font = '600 13px "JetBrains Mono", monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(customSkill.label, -w / 2 + 27, 1);

        ctx.restore();
      });

      animId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Resize Handler
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Reposition Boundaries
      Body.setPosition(ground, { x: width / 2, y: height + wallThickness / 2 });
      Body.setPosition(ceiling, { x: width / 2, y: -wallThickness / 2 });
      Body.setPosition(leftWall, { x: -wallThickness / 2, y: height / 2 });
      Body.setPosition(rightWall, { x: width + wallThickness / 2, y: height / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('mouseleave', handlePointerLeave);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  // Update Gravity in real-time when mode changes
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.world.gravity.x = gravityVector.x;
      engineRef.current.world.gravity.y = gravityVector.y;
    }
  }, [gravityVector]);

  // Handle Shockwave Pulse from control panel or hero button
  useEffect(() => {
    if (shockwaveTrigger === 0 || !engineRef.current || !bodiesRef.current.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.clientWidth / 2;
    const centerY = canvas.clientHeight / 2;

    bodiesRef.current.forEach((body) => {
      const dx = body.position.x - centerX;
      const dy = body.position.y - centerY;
      const dist = Math.hypot(dx, dy) || 1;

      // Radial explosive impulse
      const impulseStrength = 0.045;
      Matter.Body.applyForce(body, body.position, {
        x: (dx / dist) * impulseStrength,
        y: (dy / dist) * impulseStrength - 0.02 // Slight upward lift
      });
      // Impart random spin
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25);
    });
  }, [shockwaveTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] md:h-[540px] rounded-2xl glass-panel overflow-hidden border border-white/10 group select-none shadow-2xl"
    >
      {/* HUD Header Bar */}
      <div className="absolute top-0 inset-x-0 h-10 px-4 flex items-center justify-between border-b border-white/5 bg-space-950/40 backdrop-blur-md z-10 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-slate-300">
            CHAMBER // RIGID_BODY_ZERO_G
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="hidden sm:inline">COLLISION: ACTIVE</span>
          <span className="text-neon-cyan font-bold uppercase">{gravityMode}</span>
        </div>
      </div>

      {/* Interactive Physics Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Floating Interaction Hint */}
      <div className="absolute bottom-3 left-4 text-[11px] font-mono text-slate-400/80 pointer-events-none flex items-center gap-2">
        <span className="inline-block px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">DRAG & FLING</span>
        <span>Interact with badges to disrupt field</span>
      </div>
    </div>
  );
}

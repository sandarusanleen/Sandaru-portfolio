import React, { useEffect, useRef } from 'react';
import { useGravity } from '../context/GravityContext';

export default function BackgroundCosmic() {
  const canvasRef = useRef(null);
  const { shockwaveTrigger, gravityVector } = useGravity();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Dynamic particles count based on screen size
    const isMobile = width < 768;
    const particleCount = isMobile ? 65 : 140;

    const particles = [];
    const colors = ['#00f0ff', '#8b5cf6', '#3b82f6', '#10b981', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        baseSpeedX: (Math.random() - 0.5) * 0.25,
        baseSpeedY: (Math.random() - 0.5) * 0.25,
        vx: 0,
        vy: 0,
        alpha: Math.random() * 0.7 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.015;

      // Mouse interpolation for smooth parallax
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const parallaxX = (mouseX / width - 0.5) * 15;
      const parallaxY = (mouseY / height - 0.5) * 15;

      // Fill background: Deep space black with subtle radial vignette
      ctx.fillStyle = '#0a0a0e';
      ctx.fillRect(0, 0, width, height);

      // Subtle celestial nebula gradient
      const grad = ctx.createRadialGradient(
        width * 0.3 + parallaxX * 2,
        height * 0.25 + parallaxY * 2,
        20,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      grad.addColorStop(0, 'rgba(139, 92, 246, 0.04)');
      grad.addColorStop(0.5, 'rgba(0, 240, 255, 0.02)');
      grad.addColorStop(1, 'rgba(10, 10, 14, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render dust and stars
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply slight gravity drift influence
        const gravInfluenceX = gravityVector.x * 0.4;
        const gravInfluenceY = gravityVector.y * 0.4;

        p.x += p.baseSpeedX + gravInfluenceX;
        p.y += p.baseSpeedY + gravInfluenceY;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Twinkle
        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time * 2 + p.pulseOffset));

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.size > 1.2 ? 6 : 0;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        // Shift particle position slightly with parallax
        const px = p.x + parallaxX * (p.size * 0.4);
        const py = p.y + parallaxY * (p.size * 0.4);
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [gravityVector]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
}

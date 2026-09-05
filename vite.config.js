import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'handle-dev-redirects',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const rawUrl = req.url || '';
          try {
            const decoded = decodeURIComponent(rawUrl);
            if (
              decoded.startsWith('/Sandaru portfolio') ||
              decoded.startsWith('/Sandaru-portfolio')
            ) {
              res.writeHead(302, { Location: '/' });
              res.end();
              return;
            }
          } catch (e) {
            // Ignore URI malformed
          }
          next();
        });
      }
    }
  ],
  base: process.env.NODE_ENV === 'production' ? '/Sandaru-portfolio/' : '/',
})
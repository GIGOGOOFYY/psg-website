import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function serveParentAssets() {
  return {
    name: 'serve-parent-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const served = ['logos', 'clients', 'hero', 'about']
        for (const dir of served) {
          if (req.url.startsWith(`/${dir}/`)) {
            const filePath = path.resolve(__dirname, '..', req.url.slice(1))
            if (fs.existsSync(filePath)) {
              const ext = path.extname(filePath).toLowerCase()
              const mime = {
                '.png': 'image/png', '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
                '.webp': 'image/webp', '.gif': 'image/gif',
              }[ext] || 'application/octet-stream'
              res.setHeader('Content-Type', mime)
              res.setHeader('Cache-Control', 'public, max-age=3600')
              fs.createReadStream(filePath).pipe(res)
              return
            }
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), serveParentAssets()],
  server: {
    fs: { allow: ['..'] }
  },
  // For production: copy logos/ and clients/ folders alongside dist/
})

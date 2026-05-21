import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({

  base: '/lista-restaurante/',

  plugins: [

    react(),

    VitePWA({

      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.svg',
        'apple-touch-icon.png'
      ],

      manifest: {

        name: 'Lista Restaurante',

        short_name: 'Restaurante',

        description: 'Lista de compras del restaurante',

        theme_color: '#121212',

        background_color: '#121212',

        display: 'standalone',

        orientation: 'portrait',

        scope: '/lista-restaurante/',

        start_url: '/lista-restaurante/',

        icons: [

          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },

          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }

        ]
      }
    })
  ]
})
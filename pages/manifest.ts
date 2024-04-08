import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Stunning Country in South East Asia',
    short_name: 'Philippines',
    description: 'breathtaking islands of Palawan, Boracay, and Northern Samar',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'images/ph.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
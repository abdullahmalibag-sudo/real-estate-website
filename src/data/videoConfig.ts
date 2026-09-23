// Helper to provide accessible video URLs.
// In a browser environment, local filesystem paths (like "D:\New folder\...")
// cannot be directly read due to web security restrictions.
// You can either:
// 1. Place the 10 MP4 files in the "public/videos/" folder (e.g. public/videos/vedio 1.mp4)
// 2. Host them on Vimeo / YouTube / Google Drive / Cloudinary / CDN
export const localVideoMap: Record<string, { src: string; thumb: string }> = {
  'vedio-1': {
    src: '/videos/vedio 1.mp4',
    thumb: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-2': {
    src: '/videos/vedio 2.mp4',
    thumb: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-3': {
    src: '/videos/vedio 3.mp4',
    thumb: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-4': {
    src: '/videos/vedio 4.mp4',
    thumb: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-5': {
    src: '/videos/vedio 5.mp4',
    thumb: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-6': {
    src: '/videos/vedio 6.mp4',
    thumb: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-7': {
    src: '/videos/vedio 7.mp4',
    thumb: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-8': {
    src: '/videos/vedio 8.mp4',
    thumb: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-9': {
    src: '/videos/vedio 9.mp4',
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-10': {
    src: '/videos/vedio 10.mp4',
    thumb: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
  },
  'vedio-11': {
    src: '/videos/vedio 11.mp4',
    thumb: 'https://img.youtube.com/vi/zHJPI2p-R00/maxresdefault.jpg',
  },
  'vedio-12': {
    src: '/videos/vedio 12.mp4',
    thumb: 'https://img.youtube.com/vi/bU3ueu3pMHs/maxresdefault.jpg',
  },
};

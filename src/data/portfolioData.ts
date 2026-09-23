import { VideoProject, DesignProject, SkillItem, AcademicEducation, ProfessionalCourse } from '../types';

export const profileData = {
  name: 'আব্দুল্লাহ',
  nameEn: 'Abdullah',
  role: 'ভিজ্যুয়ালাইজার ও ভিডিও এডিটর',
  roleEn: 'Visualizer & Video Editor',
  bio: 'উচ্চমানের ভিডিও এডিটিং ও ভিজ্যুয়াল স্টোরিটেলিংয়ের মাধ্যমে ব্র্যান্ড ও ক্রিয়েটরদের কাজকে অনন্য রূপ দেই।',
  bioEn: 'Transforming footage into captivating, high-retention video stories for creators and brands.',
  email: 'abdullahmalibag@gmail.com',
  phone: '01333655040',
  phoneDisplay: '01333-655040',
  phoneInternational: '+8801333655040',
  whatsapp: '01333655040',
  whatsappUrl: 'https://wa.me/8801333655040?text=Hello%20Abdullah,%20I%20would%20like%20to%20discuss%20a%20project!',
  location: 'Malibag, Dhaka-1217, Bangladesh',
  locationBn: 'মালিবাগ, ঢাকা-১২১৭, বাংলাদেশ',
  heroImage: 'https://i.postimg.cc/BnNvN8H6/cobi.png',
  experienceYears: '3+',
  completedProjects: '25+',
  clientSatisfaction: '80%',
  avgRetention: '72%+',
  socials: {
    whatsapp: 'https://wa.me/8801333655040?text=Hello%20Abdullah,%20I%20would%20like%20to%20discuss%20a%20project!',
    email: 'mailto:abdullahmalibag@gmail.com',
    phone: 'tel:+8801333655040',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://www.youtube.com/@AhmadAbdullah3642-u9d',
    linkedin: 'https://linkedin.com',
  }
};

export const videoProjects: VideoProject[] = [
  {
    id: 'vedio-1',
    title: 'Featured Video Project 01',
    titleBn: 'ফিচার্ড ভিডিও প্রজেক্ট ০১ (Vedio 1)',
    category: 'commercial',
    categoryLabel: 'YouTube Video & Promo',
    categoryLabelBn: 'ইউটিউব ভিডিও ও প্রোমো',
    youtubeId: 'Dle0XsVPjX4',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/Dle0XsVPjX4?list=PLP4R5n0ZocGw&index=1&autoplay=1&rel=0',
    videoSrc: '/videos/vedio 1.mp4',
    thumbnail: 'https://img.youtube.com/vi/Dle0XsVPjX4/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Official Production',
    views: 'Featured Work',
    aspectRatio: '16:9',
    description: 'High-quality video production and editing showcase with dynamic storytelling, smooth pacing, and immersive audio (Dle0XsVPjX4).',
    descriptionBn: 'ডায়নামিক স্টোরিটেলিং, নিখুঁত পেসিং ও হাই-কোয়ালিটি সাউন্ড মাস্টারিংয়ে তৈরি আকর্ষণীয় ভিডিও এডিট (ইউটিউব প্রজেক্ট ০১)।',
    toolsUsed: ['Premiere Pro', 'After Effects', 'Photoshop'],
    keyFeatures: [
      'Cinematic Timeline Editing',
      'Dynamic Pacing & Rhythm Cuts',
      'Sound Design & Audio Mastering',
      'High-Definition Color Grading'
    ],
    keyFeaturesBn: [
      'সিনেমাটিক টাইমলাইন এডিটিং',
      'ডায়নামিক পেসিং ও ছন্দময় কাটস',
      'সাউন্ড ডিজাইন ও অডিও মাস্টারিং',
      'হাই-ডেফিনিশন কালার গ্রেডিং'
    ]
  },
  {
    id: 'vedio-2',
    title: 'Featured Video Project 02',
    titleBn: 'ফিচার্ড ভিডিও প্রজেক্ট ০২ (Vedio 2)',
    category: 'commercial',
    categoryLabel: 'Brand Campaign & Promo',
    categoryLabelBn: 'ব্র্যান্ড ক্যাম্পেইন ও প্রোমো',
    youtubeId: '-x-frIUw2As',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/-x-frIUw2As?autoplay=1&rel=0',
    videoSrc: '/videos/vedio 2.mp4',
    thumbnail: 'https://img.youtube.com/vi/-x-frIUw2As/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Brand Media',
    views: 'Featured Work',
    aspectRatio: '16:9',
    description: 'Engaging brand campaign edit with clean aesthetic framing, seamless transitions, and emotive background score (-x-frIUw2As).',
    descriptionBn: 'আকর্ষণীয় ব্র্যান্ড ক্যাম্পেইন ভিডিও, নিখুঁত ট্রানজিশন ও ইমোটিভ মিউজিক সিঙ্কিং সমৃদ্ধ প্রজেক্ট ০২ (ইউটিউব প্রজেক্ট ০২)।',
    toolsUsed: ['Premiere Pro', 'After Effects', 'Sound FX'],
    keyFeatures: [
      'High-Conversion Visual Hook',
      'Seamless Scene Transitions',
      'Atmospheric Soundscape',
      'Color Palette Harmonization'
    ],
    keyFeaturesBn: [
      'হাই-কনভার্সন ভিজ্যুয়াল হুক',
      'সিমলেস সিন ট্রানজিশন',
      'অ্যাটমোস্ফেরিক সাউন্ডস্কেপ',
      'কালার প্যালেট হারমোনাইজেশন'
    ]
  },
  {
    id: 'vedio-3',
    title: 'Podcast Video Edit',
    titleBn: 'পডকাস্ট ভিডিও এডিট (Podcast Video)',
    category: 'commercial',
    categoryLabel: 'Podcast Video',
    categoryLabelBn: 'পডকাস্ট ভিডিও',
    youtubeId: 'rfYx07SsAtU',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/rfYx07SsAtU?autoplay=1&rel=0',
    videoSrc: 'https://www.youtube.com/watch?v=rfYx07SsAtU',
    thumbnail: 'https://img.youtube.com/vi/rfYx07SsAtU/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Ahmad Abdullah (3642)',
    views: 'Podcast Edit',
    aspectRatio: '16:9',
    description: 'Professional high-engagement Podcast Video edit featuring clean multicam switching, crisp audio mastering, sound effects, subtitles, and dynamic pacing.',
    descriptionBn: 'প্রফেশনাল মাল্টিক্যাম পডকাস্ট ভিডিও এডিটিং — ক্রিস্প অডিও মাস্টারিং, ডায়নামিক কাটস, সাউন্ড এফেক্টস ও সাবটাইটেল সহ হাই-রিটেনশন ভিডিও প্রোডাকশন।',
    toolsUsed: ['Premiere Pro', 'Audition', 'After Effects'],
    keyFeatures: [
      'Multicam Podcast Pacing & Transitions',
      'Studio Quality Audio & Noise Reduction',
      'Animated Subtitles & Dynamic Hooks',
      'Color Grading & 1080p Full HD Render'
    ],
    keyFeaturesBn: [
      'মাল্টিক্যাম পডকাস্ট ট্রানজিশন ও স্মুথ কাটস',
      'স্টুডিও কোয়ালিটি সাউন্ড ও নয়েজ রিডাকশন',
      'অ্যানিমেটেড সাবটাইটেল ও ডায়নামিক হুক',
      'কালার গ্রেডিং ও ১০৮০পি ফুল এইচডি রেন্ডার'
    ]
  },
  {
    id: 'vedio-4',
    title: 'Featured Video Project 04',
    titleBn: 'ফিচার্ড ভিডিও প্রজেক্ট ০৪ (Vedio 4)',
    category: 'reels',
    categoryLabel: 'Video Reel & Promo',
    categoryLabelBn: 'ভিডিও রিলস ও প্রোমো',
    youtubeId: '4dgzKytgtOk',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/4dgzKytgtOk?list=PLP4R5n0ZocGw&index=4&autoplay=1&rel=0',
    videoSrc: '/videos/vedio 4.mp4',
    thumbnail: 'https://img.youtube.com/vi/4dgzKytgtOk/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Featured Production',
    views: 'Viral Work',
    aspectRatio: '16:9',
    description: 'Story-driven video edit with fast dynamic cuts, sound cues, motion graphics, and eye-catching cinematic grading (4dgzKytgtOk).',
    descriptionBn: 'গল্পনির্ভর ভিডিও এডিটিং, ডায়নামিক কাটস, মোশন গ্রাফিক্স এবং শার্প সিনেমাটিক কালার গ্রেড সমৃদ্ধ প্রজেক্ট (ইউটিউব প্রজেক্ট ০৪)।',
    toolsUsed: ['Premiere Pro', 'After Effects', 'Photoshop'],
    keyFeatures: [
      'Dynamic Zoom & Motion Tracking',
      'Audio-Visual Beat Snapping',
      'Custom Graphic Overlays',
      'High-Retention Timeline Flow'
    ],
    keyFeaturesBn: [
      'ডায়নামিক জুম ও মোশন ট্র্যাকিং',
      'অডিও-ভিজ্যুয়াল বিট স্ন্যাপিং',
      'কাস্টম গ্রাফিক ওভারলে',
      'হাই-রিটেনশন টাইমলাইন ফ্লো'
    ]
  },
  {
    id: 'vedio-5',
    title: 'Featured Video Project 05',
    titleBn: 'ফিচার্ড ভিডিও প্রজেক্ট ০৫ (Vedio 5)',
    category: 'commercial',
    categoryLabel: 'Product Video Ad & Promo',
    categoryLabelBn: 'প্রোডাক্ট ভিডিও বিজ্ঞাপন ও প্রোমো',
    youtubeId: 'NZNfxzjELio',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/NZNfxzjELio?list=PLP4R5n0ZocGw&index=5&autoplay=1&rel=0',
    videoSrc: '/videos/vedio 5.mp4',
    thumbnail: 'https://img.youtube.com/vi/NZNfxzjELio/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Featured Production',
    views: 'Featured Work',
    aspectRatio: '16:9',
    description: 'Commercial product showcase video and dynamic edit emphasizing features, lighting contours, and persuasive pacing (NZNfxzjELio).',
    descriptionBn: 'প্রোডাক্ট ফিচার হাইলাইটিং, নিখুঁত লাইটিং ও কনভার্সন-ফোকাসড পেসিংয়ে তৈরি কমার্শিয়াল ভিডিও বিজ্ঞাপন (ইউটিউব প্রজেক্ট ০৫)।',
    toolsUsed: ['Premiere Pro', 'After Effects', 'Photoshop'],
    keyFeatures: [
      'Product Feature Highlighting',
      'Color Tuning & Contrast Control',
      'Commercial Music Mixing',
      'Clear Call-to-Action Outro'
    ],
    keyFeaturesBn: [
      'প্রোডাক্ট ফিচার হাইলাইটিং',
      'কালার টিউনিং ও কনট্রাস্ট কন্ট্রোল',
      'কমার্শিয়াল ব্যাকগ্রাউন্ড মিউজিক',
      'স্পষ্ট কল-টু-অ্যাকশন আউটরো'
    ]
  },
  {
    id: 'vedio-6',
    title: 'Featured Video Project 06',
    titleBn: 'ফিচার্ড ভিডিও প্রজেক্ট ০৬ (Vedio 6)',
    category: 'motion',
    categoryLabel: 'Motion Graphics & Edit',
    categoryLabelBn: 'মোশন গ্রাফিক্স ও এডিট',
    youtubeId: '7YcC4i3vZhM',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/7YcC4i3vZhM?list=PLLwkp30bJegk&autoplay=1&rel=0',
    videoSrc: '/videos/vedio 6.mp4',
    thumbnail: 'https://img.youtube.com/vi/7YcC4i3vZhM/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Creative Studio',
    views: 'Motion Reel',
    aspectRatio: '16:9',
    description: 'Fluid motion design and creative video edit incorporating kinetic title graphics, visual effects, and layered sound mastering (7YcC4i3vZhM).',
    descriptionBn: 'কাইনেটিক টাইটেল গ্রাফিক্স, ভিজ্যুয়াল ইফেক্টস এবং লেয়ার্ড সাউন্ড মাস্টারিং সমৃদ্ধ ক্রিয়েটিভ ভিডিও প্রজেক্ট ০৬ (ইউটিউব প্রজেক্ট ০৬)।',
    toolsUsed: ['After Effects', 'Premiere Pro', 'Photoshop'],
    keyFeatures: [
      'Custom Vector Motion Animation',
      'Smooth Easing Motion Curves',
      'Kinetic Typography',
      'Synchronized Audio FX'
    ],
    keyFeaturesBn: [
      'কাস্টম ভেক্টর মোশন অ্যানিমেশন',
      'স্মুথ ইজিং মোশন কার্ভস',
      'কাইনেটিক টাইপোগ্রাফি',
      'সিঙ্ক্রোনাইজড অডিও সাউন্ড FX'
    ]
  },
  {
    id: 'vedio-7',
    title: 'Brand Promo Video',
    titleBn: 'ব্র্যান্ড প্রোমো ভিডিও (Brand Promo Video)',
    category: 'commercial',
    categoryLabel: 'Brand Promo Video',
    categoryLabelBn: 'ব্র্যান্ড প্রোমো ভিডিও',
    youtubeId: 'waYDZJsrJcU',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/waYDZJsrJcU?autoplay=1&rel=0',
    videoSrc: 'https://www.youtube.com/watch?v=waYDZJsrJcU',
    thumbnail: 'https://img.youtube.com/vi/waYDZJsrJcU/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Ahmad Abdullah (3642)',
    views: 'Brand Promo',
    aspectRatio: '16:9',
    description: 'High-impact Brand Promo Video featuring polished commercial editing, rhythmic cuts, kinetic typography, and seamless visual branding.',
    descriptionBn: 'উচ্চমানের ব্র্যান্ড প্রোমো ভিডিও এডিটিং — কমার্শিয়াল কালার গ্রেডিং, কাইনেটিক টেক্সট, নিখুঁত ট্রানজিশন ও ব্র্যান্ড ভিজ্যুয়ালাইজেশন।',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    keyFeatures: [
      'Commercial Brand Storytelling & Hook',
      'Dynamic Typography & Logo Reveal',
      'Impactful Sound Design & Music Sync',
      'Color Grading & 1080p Full HD Master'
    ],
    keyFeaturesBn: [
      'কমার্শিয়াল ব্র্যান্ড স্টোরিটেলিং ও হুক',
      'ডায়নামিক টাইপোগ্রাফি ও ব্র্যান্ড ভিজ্যুয়াল',
      'ইমপ্যাক্টফুল সাউন্ড ডিজাইন ও মিউজিক সিঙ্ক',
      'কালার গ্রেডিং ও ১০৮০পি ফুল এইচডি রেন্ডার'
    ]
  },
  {
    id: 'vedio-8',
    title: 'Featured Video Project 08',
    titleBn: 'ফিচার্ড ভিডিও প্রজেক্ট ০৮ (Vedio 8)',
    category: 'reels',
    categoryLabel: 'Video Reel & Promo',
    categoryLabelBn: 'ভিডিও রিলস ও প্রোমো',
    youtubeId: 'mlxHgcEWd1s',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/mlxHgcEWd1s?list=PLLwkp30bJegk&index=5&autoplay=1&rel=0',
    videoSrc: '/videos/vedio 8.mp4',
    thumbnail: 'https://img.youtube.com/vi/mlxHgcEWd1s/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Featured Production',
    views: 'Viral Work',
    aspectRatio: '16:9',
    description: 'Fast-paced storytelling video production crafted with quick dynamic cuts, animated b-roll, and punchy motion visuals (mlxHgcEWd1s).',
    descriptionBn: 'দ্রুতগতির ডায়নামিক কাট, অ্যানিমেটেড বি-রোল ও সিনেমাটিক ভিজ্যুয়াল সম্বলিত ক্রিয়েটিভ ভিডিও এডিট (ইউটিউব প্রজেক্ট ০৮)।',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    keyFeatures: [
      'High-Speed Dynamic Cut Editing',
      'Animated B-Roll Overlays',
      'Sound Effects & Mastering',
      'Retention-Driven Flow'
    ],
    keyFeaturesBn: [
      'হাই-স্পিড ডায়নামিক কাট এডিটিং',
      'অ্যানিমেটেড বি-রোল ওভারলে',
      'সাউন্ড ইফেক্টস ও মাস্টারিং',
      'রিটেনশন-ড্রাইভেন টাইমলাইন ফ্লো'
    ]
  },
  {
    id: 'vedio-9',
    title: 'UI Motion Design',
    titleBn: 'ইউআই মোশন ডিজাইন (UI Motion)',
    category: 'motion',
    categoryLabel: 'UI Motion & Animation',
    categoryLabelBn: 'ইউআই মোশন ও অ্যানিমেশন',
    youtubeId: 'VAKq3HKg_wE',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/VAKq3HKg_wE?autoplay=1&rel=0',
    videoSrc: 'https://www.youtube.com/watch?v=VAKq3HKg_wE',
    thumbnail: 'https://img.youtube.com/vi/VAKq3HKg_wE/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Ahmad Abdullah (3642)',
    views: 'UI Motion',
    aspectRatio: '16:9',
    description: 'Sleek UI motion animation and product interaction design showcasing modern micro-interactions, clean easing curves, interface reveals, and visual fidelity.',
    descriptionBn: 'মডার্ন ইউআই মোশন ডিজাইন ও অ্যাপ/ওয়েব ইন্টারঅ্যাকশন অ্যানিমেশন — স্মুথ ইজিং কার্ভ, ইন্টারফেস ট্রানজিশন ও হাই-এন্ড প্রেজেন্টেশন।',
    toolsUsed: ['After Effects', 'Figma', 'Premiere Pro'],
    keyFeatures: [
      'App & Web UI Micro-Interactions',
      'Smooth Bezier Easing & Dynamic Timing',
      'Modern Product Interaction Showcase',
      'Full HD Crisp UI Video Presentation'
    ],
    keyFeaturesBn: [
      'অ্যাপ ও ওয়েব ইউআই মাইক্রো-ইন্টারঅ্যাকশন',
      'স্মুথ বেজিয়ার ইজিং ও পারফেক্ট টাইমিং',
      'মডার্ন প্রোডাক্ট ইন্টারঅ্যাকশন শোকেস',
      'ফুল এইচডি ক্রিস্প ইউআই ভিডিও প্রেজেন্টেশন'
    ]
  },
  {
    id: 'vedio-10',
    title: 'Featured Video Project 10',
    titleBn: 'ফিচার্ড ভিডিও প্রজেক্ট ১০ (Vedio 10)',
    category: 'commercial',
    categoryLabel: 'Showreel & Cinematic Edit',
    categoryLabelBn: 'শো-রিল ও সিনেমাটিক এডিট',
    youtubeId: 'UuFHtTg23yc',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/UuFHtTg23yc?list=PLP4R5n0ZocGw&index=2&autoplay=1&rel=0',
    videoSrc: '/videos/vedio 10.mp4',
    thumbnail: 'https://img.youtube.com/vi/UuFHtTg23yc/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Featured Production',
    views: 'Best Cuts',
    aspectRatio: '16:9',
    description: 'Comprehensive high-impact video edit combining motion graphics, dramatic pacing, and professional color grading (UuFHtTg23yc).',
    descriptionBn: 'মোশন গ্রাফিক্স, ড্রামাটিক পেসিং এবং কালার গ্রেডিংয়ের সমন্বয়ে তৈরি হাই-ইমপ্যাক্ট ভিডিও প্রজেক্ট ১০ (ইউটিউব প্রজেক্ট ১০)।',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    keyFeatures: [
      'Master Showreel Composition',
      'Precision Beat-Synced Cuts',
      'Cinematic Color Mastering',
      'High-Impact Sound Design'
    ],
    keyFeaturesBn: [
      'মাস্টার শো-রিল কম্পোজিশন',
      'প্রেসিশন বিট-সিঙ্কড কাটস',
      'সিনেমাটিক কালার মাস্টারিং',
      'হাই-ইমপ্যাক্ট সাউন্ড ডিজাইন'
    ]
  },
  {
    id: 'vedio-11',
    title: '3D Video Animation & Production',
    titleBn: '৩ডি ভিডিও অ্যানিমেশন ও প্রোডাকশন (3D Video)',
    category: 'motion',
    categoryLabel: '3D Animation & VFX',
    categoryLabelBn: '৩ডি অ্যানিমেশন ও ভিএফএক্স',
    youtubeId: 'zHJPI2p-R00',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/zHJPI2p-R00?autoplay=1&rel=0',
    videoSrc: 'https://www.youtube.com/watch?v=zHJPI2p-R00',
    thumbnail: 'https://img.youtube.com/vi/zHJPI2p-R00/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Ahmad Abdullah (3642)',
    views: '3D Showcase',
    aspectRatio: '16:9',
    description: 'High-fidelity 3D motion design, realistic lighting, material simulation, dynamic camera movement, and cinematic 3D visual storytelling.',
    descriptionBn: 'উচ্চমানের থ্রি-ডি মোশন গ্রাফিক্স, রিয়েলিস্টিক লাইটিং ও ম্যাটেরিয়াল সিমুলেশন এবং ডায়নামিক ক্যামেরা মুভমেন্ট সমৃদ্ধ সিনেমাটিক ৩ডি ভিডিও প্রোডাকশন।',
    toolsUsed: ['Blender', 'After Effects', 'Premiere Pro'],
    keyFeatures: [
      'Realistic 3D Lighting & Shadow Rendering',
      'Dynamic Camera Motion & Depth Parallax',
      '3D Object Simulation & Compositing',
      'Full HD 1080p Crisp Master Output'
    ],
    keyFeaturesBn: [
      'রিয়েলিস্টিক থ্রি-ডি লাইটিং ও শ্যাডো রেন্ডারিং',
      'ডায়নামিক ক্যামেরা মোশন ও ডেপথ প্যারালাক্স',
      'থ্রি-ডি অবজেক্ট সিমুলেশন ও কম্পোজিটিং',
      'ফুল এইচডি ১০৮০পি ক্রিস্প মাস্টার আউটপুট'
    ]
  },
  {
    id: 'vedio-12',
    title: 'UI Motion & Interaction Design',
    titleBn: 'ইউআই মোশন ও অ্যাপ ইন্টারঅ্যাকশন (UI Motion)',
    category: 'motion',
    categoryLabel: 'UI Motion Design',
    categoryLabelBn: 'ইউআই মোশন ডিজাইন',
    youtubeId: 'bU3ueu3pMHs',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/bU3ueu3pMHs?autoplay=1&rel=0',
    videoSrc: 'https://www.youtube.com/watch?v=bU3ueu3pMHs',
    thumbnail: 'https://img.youtube.com/vi/bU3ueu3pMHs/maxresdefault.jpg',
    duration: 'Full HD',
    client: 'Ahmad Abdullah (3642)',
    views: 'UI Interaction',
    aspectRatio: '16:9',
    description: 'Seamless UI/UX interaction animation, component transitions, micro-interactions, and high-impact digital product presentation.',
    descriptionBn: 'সিমলেস ইউআই/ইউএক্স ইন্টারঅ্যাকশন অ্যানিমেশন, কম্পোনেন্ট ট্রানজিশন, মাইক্রো-ইন্টারঅ্যাকশন এবং ডিজিটাল প্রোডাক্ট ভিডিও প্রেজেন্টেশন।',
    toolsUsed: ['After Effects', 'Figma', 'Premiere Pro'],
    keyFeatures: [
      'Fluid Micro-Interactions & Component Flow',
      'Modern Mobile & Web UI Showcase',
      'Rhythmic Audio Design & Synced Beats',
      'High-Retention Visual Pace'
    ],
    keyFeaturesBn: [
      'ফ্লুইড মাইক্রো-ইন্টারঅ্যাকশন ও কম্পোনেন্ট ফ্লো',
      'মডার্ন মোবাইল ও ওয়েব ইউআই শোকেস',
      'ছন্দময় সাউন্ড ডিজাইন ও অডিও সিঙ্ক',
      'হাই-রিটেনশন ভিজ্যুয়াল পেস'
    ]
  }
];

export const designProjects: DesignProject[] = [
  {
    id: 'product-ad-creative-01',
    title: 'Premium Product Showcase Ad Creative',
    titleBn: 'প্রিমিয়াম প্রোডাক্ট শোকেস অ্যাড ক্রিয়েটিভ',
    category: 'ad-creative',
    categoryLabel: 'Product Ad Creative',
    categoryLabelBn: 'প্রোডাক্ট অ্যাড ক্রিয়েটিভ',
    image: 'https://i.postimg.cc/t4PbfX4f/pichture-1.png',
    client: 'E-Commerce Brand Campaign',
    dimensions: '800x800 (Square)',
    description: 'High-conversion e-commerce product advertisement designed with clean visual hierarchy, vibrant product rim lighting, and persuasive call-to-action framing.',
    descriptionBn: 'ই-কমার্স সেলস বৃদ্ধির লক্ষ্যে নজরকাড়া ভিজ্যুয়াল হায়ারার্কি, নিখুঁত প্রোডাক্ট রিম লাইটিং এবং শক্তিশালী কল-টু-অ্যাকশন সমৃদ্ধ প্রিমিয়াম অ্যাড ক্রিয়েটিভ।',
    toolsUsed: ['Photoshop', 'Illustrator', 'Lightroom'],
    keyFeatures: [
      'High-Conversion Commercial Framing',
      'Realistic Shadow & Lighting Balance',
      'Sharp Focal Depth & Typography Hierarchy',
      'Optimized for Meta & Instagram Ads'
    ],
    keyFeaturesBn: [
      'হাই-কনভার্সন কমার্শিয়াল ফ্রেম',
      'রিয়েলিস্টিক শ্যাডো ও লাইটিং ব্যালেন্স',
      'শার্প ফোকাল ডেপথ ও টাইপোগ্রাফি',
      'মেটা ও ইনস্টাগ্রাম বিজ্ঞাপনের উপযোগী'
    ]
  },
  {
    id: 'product-promotional-campaign-02',
    title: 'Dynamic Product Promotional Campaign',
    titleBn: 'ডায়নামিক প্রোডাক্ট প্রোমোশনাল ক্যাম্পেইন',
    category: 'ad-creative',
    categoryLabel: 'Commercial Product Poster',
    categoryLabelBn: 'কমার্শিয়াল প্রোডাক্ট পোস্টার',
    image: 'https://i.postimg.cc/3xph6KwM/Pichture-2.png',
    client: 'Retail Brand Promotion',
    dimensions: '640x800 (Portrait 4:5)',
    description: 'Eye-catching promotional poster highlighting product texture, premium color grading, and modern social media marketing aesthetics.',
    descriptionBn: 'সোশ্যাল মিডিয়ায় ব্র্যান্ডের ভিজ্যুয়াল অ্যাপিল বৃদ্ধি করতে টেক্সচার এনহ্যান্সমেন্ট, ড্রামাটিক কালার গ্রেডিং এবং মডার্ন লেআউটে তৈরি প্রোডাক্ট পোস্টার।',
    toolsUsed: ['Photoshop', 'Camera Raw', 'Illustrator'],
    keyFeatures: [
      'Dynamic Visual Angle & Product Pop',
      'Vibrant Color Grade & Contrast',
      'Social Feed Scroll-Stopping Aesthetic',
      'Retouched Detail & Sharp Reflections'
    ],
    keyFeaturesBn: [
      'ডায়নামিক ভিজ্যুয়াল অ্যাঙ্গেল',
      'উজ্জ্বল কালার গ্রেড ও কনট্রাস্ট',
      'স্ক্রোল-স্টপিং আকর্ষণীয় লুক',
      'রিটাচড ডিটেইলিং ও রিফ্লেকশন'
    ]
  },
  {
    id: 'product-lifestyle-ad-03',
    title: 'Minimalist Lifestyle Product Ad',
    titleBn: 'মিনিমালিস্ট লাইফস্টাইল প্রোডাক্ট অ্যাড',
    category: 'ad-creative',
    categoryLabel: 'E-Commerce Social Ad',
    categoryLabelBn: 'ই-কমার্স সোশ্যাল অ্যাড',
    image: 'https://i.postimg.cc/jSNT9sjY/pichture-3.png',
    client: 'Consumer Goods Brand',
    dimensions: '640x800 (Portrait 4:5)',
    description: 'Sleek, minimalist product advertisement emphasizing authenticity, balanced negative space, and elegant branding aesthetics.',
    descriptionBn: 'ব্র্যান্ডের আভিজাত্য ফুটিয়ে তুলতে পরিমিত নেগেটিভ স্পেস, মার্জিত ফন্ট এবং সফট ন্যাচারাল লাইটিং সমন্বয়ে তৈরি মিনিমালিস্ট লাইফস্টাইল অ্যাড।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Clean Minimalist Composition',
      'Natural Tone & Soft Shadows',
      'Clear Offer & Feature Breakdown',
      'High Mobile Feed Visibility'
    ],
    keyFeaturesBn: [
      'ক্লিন মিনিমালিস্ট কম্পোজিশন',
      'ন্যাচারাল টোন ও সফট শ্যাডো',
      'স্পষ্ট অফার ও ফিচার প্রেজেন্টেশন',
      'মোবাইল ফিডে সহজে দৃষ্টিগোচর'
    ]
  },
  {
    id: 'product-creative-visual-04',
    title: 'Creative Brand Product Visual',
    titleBn: 'ক্রিয়েটিভ ব্র্যান্ড প্রোডাক্ট ভিজ্যুয়াল',
    category: 'ad-creative',
    categoryLabel: 'Brand Campaign Creative',
    categoryLabelBn: 'ব্র্যান্ড ক্যাম্পেইন ক্রিয়েটিভ',
    image: 'https://i.postimg.cc/wjJzP6B8/pichture-4.png',
    client: 'Digital Brand Studio',
    dimensions: '1080x1350 (Portrait)',
    description: 'Impactful product banner integrating bold marketing typography, layered graphic elements, and high-energy product highlights.',
    descriptionBn: 'বোল্ড মার্কেটিং টাইপোগ্রাফি, আকর্ষণীয় ব্যাকগ্রাউন্ড লেয়ারিং এবং প্রোডাক্টের মূল বিশেষত্ব প্রদর্শনের জন্য তৈরি হাই-ইমপ্যাক্ট সোশ্যাল ক্রিয়েটিভ।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Bold Visual Hook & Centered Hero Item',
      'Custom Lighting & Edge Highlights',
      'Layered Vector Elements & Textures',
      'High Click-Through & Conversion Rate'
    ],
    keyFeaturesBn: [
      'বোল্ড ভিজ্যুয়াল হুক ও প্রোডাক্ট হাইলাইট',
      'কাস্টম লাইটিং ও এজ রিফ্লেকশন',
      'লেয়ারড ভেক্টর এলিমেন্টস ও টেক্সচার',
      'উচ্চ ক্লিক-থ্রু ও কনভার্সন রেট'
    ]
  },
  {
    id: 'product-commercial-showcase-05',
    title: 'Modern Commercial Product Showcase',
    titleBn: 'মডার্ন কমার্শিয়াল প্রোডাক্ট শোকেস',
    category: 'ad-creative',
    categoryLabel: 'Commercial Product Banner',
    categoryLabelBn: 'কমার্শিয়াল প্রোডাক্ট ব্যানার',
    image: 'https://i.postimg.cc/L8fS7H8Q/pichture-5.png',
    client: 'E-Commerce Storefront',
    dimensions: '1080x1080 (Square)',
    description: 'Modern studio-lit product advertisement designed to build consumer trust, enhance brand prestige, and maximize online sales performance.',
    descriptionBn: 'কাস্টমারের আস্থা বৃদ্ধি এবং সেলস কনভার্সন বাড়াতে স্টুডিও লাইটিং সেটআপ ও প্রিমিয়াম প্রোডাক্ট প্লেসমেন্টে ডিজাইনকৃত কমার্শিয়াল ব্যানার।',
    toolsUsed: ['Photoshop', 'Lightroom'],
    keyFeatures: [
      'Studio Grade Product Isolation',
      'Balanced Contrast & Saturation Tuning',
      'Conversion-Focused Hierarchy',
      'Multi-Platform Ad Network Ready'
    ],
    keyFeaturesBn: [
      'স্টুডিও গ্রেড প্রোডাক্ট আইসোলেশন',
      'ভারসাম্যপূর্ণ কনট্রাস্ট ও স্যাচুরেশন',
      'কনভার্সন-কেন্দ্রিক হায়ারার্কি',
      'মাল্টি-প্ল্যাটফর্ম অ্যাড ফ্রেন্ডলি'
    ]
  },
  {
    id: 'product-launch-artboard-06',
    title: 'Exclusive Product Launch Artboard',
    titleBn: 'এক্সক্লুসিভ প্রোডাক্ট লঞ্চ আর্টবোর্ড',
    category: 'branding',
    categoryLabel: 'Product Display & Branding',
    categoryLabelBn: 'প্রোডাক্ট ডিসপ্লে ও ব্র্যান্ডিং',
    image: 'https://i.postimg.cc/pL8v72L3/pichture-6.png',
    client: 'Product Launch Campaign',
    dimensions: '1280x1001 (High-Res Banner)',
    description: 'Wide-format commercial product presentation crafted with rich visual depth, dramatic backlighting, and polished marketing layout.',
    descriptionBn: 'নতুন প্রোডাক্ট লঞ্চিং ক্যাম্পেইনের জন্য তৈরি সমৃদ্ধ ভিজ্যুয়াল ডেপথ, ড্রামাটিক ব্যাকলাইটিং এবং চমৎকার আর্টবোর্ড কম্পোজিশন।',
    toolsUsed: ['Photoshop', 'Illustrator', 'Camera Raw'],
    keyFeatures: [
      'Wide-Angle Product Atmosphere',
      'Dramatic Backlight & Glow Effects',
      'Premium Brand Polish & Typographic Rhythm',
      'Web Hero & Social Header Optimized'
    ],
    keyFeaturesBn: [
      'ওয়াইড-অ্যাঙ্গেল প্রোডাক্ট পরিবেশ',
      'ড্রামাটিক ব্যাকলাইট ও গ্লো এফেক্টস',
      'প্রিমিয়াম ব্র্যান্ডিং ও টাইপোগ্রাফি রিদম',
      'ওয়েব হিরো ও সোশ্যাল হেডারের উপযোগী'
    ]
  }
];

export const skillsData: SkillItem[] = [
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    titleBn: 'ভিডিও এডিটিং',
    description: 'Professional editing, visual storytelling, motion graphics & post-production.',
    descriptionBn: 'প্রফেশনাল এডিটিং, স্টোরিটেলিং, মোশন গ্রাফিক্স ও পোস্ট-প্রোডাকশন।',
    iconName: 'Video',
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    titleBn: 'গ্রাফিক ডিজাইন',
    description: 'Creative visual design, branding, social media & promotional materials.',
    descriptionBn: 'ক্রিয়েটিভ ভিজ্যুয়াল ডিজাইন, ব্র্যান্ডিং, সোশ্যাল মিডিয়া ও প্রমোশনাল ম্যাটেরিয়াল।',
    iconName: 'Palette',
    tools: ['Photoshop', 'Illustrator']
  },
  {
    id: 'creative-visualization',
    title: 'CREATIVE VISUALIZATION',
    titleBn: 'ক্রিয়েটিভ ভিজ্যুয়ালাইজেশন',
    description: 'Concept development, visual storytelling & information visualization.',
    descriptionBn: 'কনসেপ্ট ডেভেলপমেন্ট, ভিজ্যুয়াল স্টোরিটেলিং ও ইনফরমেশন ভিজ্যুয়ালাইজেশন।',
    iconName: 'Eye',
    tools: ['Storyboarding', 'Moodboarding', 'Visual Direction']
  },
  {
    id: 'script-writing',
    title: 'SCRIPT WRITING & HOOKS',
    titleBn: 'স্ক্রিপ্ট রাইটিং ও হুক ক্রাফটিং',
    description: 'Video scripts, promotional content, storytelling & high-retention voice-over pacing.',
    descriptionBn: 'ভিডিও স্ক্রিপ্ট, প্রমোশনাল কনটেন্ট, স্টোরিটেলিং ও হাই-রিটেনশন ভয়েস-ওভার পেসিং।',
    iconName: 'FileText',
    tools: ['Audience Hooking', 'Retention Pacing', 'Voiceover Direction']
  },
  {
    id: 'public-speaking',
    title: 'PUBLIC SPEAKING & COMM',
    titleBn: 'পাবলিক স্পিকিং ও যোগাযোগ',
    description: 'Presentation, audience engagement & clear client collaboration.',
    descriptionBn: 'প্রেজেন্টেশন, অডিয়েন্স এনগেজমেন্ট ও চমৎকার যোগাযোগ দক্ষতা।',
    iconName: 'Mic',
    tools: ['Client Briefing', 'Creative Pitching', 'Active Collaboration']
  },
  {
    id: 'leadership',
    title: 'LEADERSHIP & DIRECTION',
    titleBn: 'লিডারশিপ ও ক্রিয়েটিভ ডিরেকশন',
    description: 'Team coordination, creative direction & on-time project execution.',
    descriptionBn: 'টিম সমন্বয়, ক্রিয়েটিভ ডিরেকশন ও সময়মতো কোয়ালিটি প্রজেক্ট ডেলিভারি।',
    iconName: 'Award',
    tools: ['Project Management', 'Quality Control', 'Deadline Discipline']
  }
];

export const toolsList = [
  { name: 'Adobe Premiere Pro', category: 'Editing', icon: 'Film' },
  { name: 'Adobe After Effects', category: 'Motion VFX', icon: 'Sparkles' },
  { name: 'Adobe Photoshop', category: 'Design', icon: 'Image' },
  { name: 'Adobe Illustrator', category: 'Vector', icon: 'PenTool' }
];

export const academicEducation: AcademicEducation[] = [
  {
    degree: 'B.A. in Islamic Studies (IS)',
    degreeBn: 'বি.এ. ইন ইসলামিক স্টাডিজ (B.A. in IS)',
    year: '2025 - 2028',
    yearBn: '২০২৫ - ২০২৮',
    status: 'On-Going (2025-2028)',
    statusBn: 'অধ্যয়নরত (২০২৫-২০২৮)',
    desc: 'Asian University of Bangladesh (AUB)',
    descBn: 'এশিয়ান ইউনিভার্সিটি অব বাংলাদেশ (Asian University of Bangladesh)',
    iconType: 'GraduationCap'
  },
  {
    degree: 'Dawra-e Hadith (Masters Equivalent)',
    degreeBn: 'দাওরায়ে হাদিস (মাস্টার্স সমমান)',
    year: '2026',
    yearBn: '২০২৬',
    status: 'Complete',
    statusBn: 'সম্পন্ন',
    desc: 'Highest academic qualification in Islamic Studies & Hadith literature.',
    descBn: 'ইসলামিক স্টাডিজ ও হাদিস শাস্ত্রের সর্বোচ্চ স্তর।',
    iconType: 'BookOpen'
  }
];

export const professionalCourse: ProfessionalCourse = {
  institution: 'As-Sunnah Skill Development Institute',
  institutionBn: 'আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট',
  courseName: 'SBMC (Small Business Management Course)',
  batch: 'Batch 36',
  topics: [
    {
      name: 'Video Editing',
      nameBn: 'ভিডিও এডিটিং',
      tools: 'Premiere Pro & After Effects'
    },
    {
      name: 'Graphic Design',
      nameBn: 'গ্রাফিক ডিজাইন',
      tools: 'Photoshop & Illustrator'
    },
    {
      name: 'Meta Marketing',
      nameBn: 'মেটা মার্কেটিং',
      tools: 'Facebook & Instagram Ads Strategy'
    },
    {
      name: 'Generative AI Tools',
      nameBn: 'জেনারেটিভ এআই টুলস',
      tools: 'Prompt Engineering, AI Visuals & Workflows'
    }
  ]
};

import { PortfolioItem, ServicePackage, ClientReview } from '../types';

// Let's resolve the generated asset paths beautifully as strings.
// This allows clean static bundling under Vite without strict module typings checking.
const heroWedding = '/src/assets/images/hero_wedding_1779671234377.png';
const falguniPortrait = '/src/assets/images/falguni_portrait_1779671255101.png';
const familyShoot = '/src/assets/images/family_shoot_1779671272789.png';
const commercialShoot = '/src/assets/images/commercial_shoot_1779671292380.png';

export const HERO_IMAGE = heroWedding;
export const FALGUNI_PORTRAIT = falguniPortrait;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'An Eternal Promise',
    category: 'wedding',
    imageUrl: heroWedding,
    location: 'McLaren Vale, South Australia',
    story: 'Captured amidst the rolling hills of McLaren Vale, this frame embodies the pure, dramatic romance of a South Australian sunset. Utilizing soft backlighting and warm champagne tones, it symbolizes the beginning of their forever.',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 50mm f/1.2 GM',
      aperture: 'f/1.2',
      shutterSpeed: '1/320s',
      iso: '100'
    },
    featured: true
  },
  {
    id: 'p2',
    title: 'The Modern Minimalist',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200',
    location: 'Lightsview Studio, Adelaide',
    story: 'A classic fine-art portrait focusing on the raw emotion and delicate lighting. By stripping away extraneous backgrounds, we drew complete focus to the subject’s profound, quiet gaze.',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 85mm f/1.4 GM',
      aperture: 'f/1.8',
      shutterSpeed: '1/160s',
      iso: '200'
    },
    featured: true
  },
  {
    id: 'p3',
    title: 'Golden Hour Laughs',
    category: 'family',
    imageUrl: familyShoot,
    location: 'Grange Beach, South Australia',
    story: 'Nothing compares to the authentic joy of a family together. This photo was taken on a breezy South Australian beach where the sunset hit the sand, highlighting their genuine, laughing interactions.',
    settings: {
      camera: 'Sony Alpha 7 IV',
      lens: 'Sony FE 35mm f/1.4 GM',
      aperture: 'f/2.0',
      shutterSpeed: '1/400s',
      iso: '100'
    },
    featured: true
  },
  {
    id: 'p4',
    title: 'Architectural Solitude',
    category: 'commercial',
    imageUrl: commercialShoot,
    location: 'Barossa Valley Boutique Winery',
    story: 'Commissioned by a prestige winery in the Barossa. The shot captures the architectural intersection of ancient SA stone walls and contemporary glass, illuminated by the fading golden sky.',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 16-35mm f/2.8 GM II',
      aperture: 'f/5.6',
      shutterSpeed: '1/15s',
      iso: '100'
    },
    featured: true
  },
  {
    id: 'p5',
    title: 'Champagne Reception',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    location: 'Adelaide Hills, SA',
    story: 'Detailed shot of the luxury table configuration and sparkling crystal under fairy lights, emphasizing the elegant editorial detail-focused work Falguni’s Photography is acclaimed for.',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 90mm f/2.8 Macro G OSS',
      aperture: 'f/4.0',
      shutterSpeed: '1/80s',
      iso: '400'
    },
    featured: false
  },
  {
    id: 'p6',
    title: 'The Editorial Eye',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200',
    location: 'Northfield Luxury Atelier',
    story: 'An editorial workspace shoot highlighting masculine sophistication, utilizing high-contrast, moody charcoal lighting and classic styling.',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 50mm f/1.2 GM',
      aperture: 'f/2.2',
      shutterSpeed: '1/200s',
      iso: '160'
    },
    featured: false
  },
  {
    id: 'p7',
    title: 'Sunset Coastline Walk',
    category: 'family',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200',
    location: 'Hallett Cove Coastal Trail, SA',
    story: 'A sweeping dynamic landscape featuring a mother and children pacing along the dramatic South Australian boardwalk. Perfectly capturing movement, scale, and natural beauty.',
    settings: {
      camera: 'Sony Alpha 7 IV',
      lens: 'Sony FE 24-70mm f/2.8 GM II',
      aperture: 'f/4.0',
      shutterSpeed: '1/500s',
      iso: '200'
    },
    featured: false
  },
  {
    id: 'p8',
    title: 'Luminous Shadows',
    category: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    location: 'Lightsview Luxury Showhome',
    story: 'Commercial interior photography demonstrating control of ambient light and architectural symmetry. Soft afternoon shadow lines create a deep sense of serenity and structure.',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 16-35mm f/2.8 GM II',
      aperture: 'f/8.0',
      shutterSpeed: '1/4s',
      iso: '100'
    },
    featured: false
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 's_wedding',
    category: 'wedding',
    name: 'The Editorial Love Story',
    basePrice: 3450,
    tagline: 'High-end wedding photography for couples seeking luxury, editorial imagery.',
    duration: '8 Hours of Coverage',
    deliverables: '550+ Edited High-Res Images',
    inclusions: [
      'Pre-wedding scouting & planning consultation',
      'Two professional photo-artists (Falguni + Lead second)',
      'Cinematic color grading & bespoke highlight retouching',
      'Luxury private online gallery with lifetime access',
      'Personal print permissions & digital downloads'
    ],
    extraOptions: [
      { id: 'ext_w_album', name: 'Fine Art Velvet Wedding Album (12"x12")', price: 650, description: 'Handcrafted custom-bound velvet photo album with luxury display box.' },
      { id: 'ext_w_hours', name: 'Additional Coverage Hour', price: 250, description: 'Keep the story moving into the night with extra hours of creative capture.' },
      { id: 'ext_w_drone', name: 'Aerial Drone Scenic Photography', price: 350, description: 'Dramatic overhead views of your wedding venue and local South Australian landscapes.' }
    ]
  },
  {
    id: 's_portrait',
    category: 'portrait',
    name: 'The Fine-Art Portraiture',
    basePrice: 590,
    tagline: 'Stunning magazine-style portraits for creative minds, professionals, and artists.',
    duration: '2 Hours Studio or Location Session',
    deliverables: '25 Master-Retouched High-Res Images',
    inclusions: [
      ' Wardrobe curation and style direction consultation',
      'Professional strobe & natural light master setups',
      'Deep boutique magazine-grade facial retouching',
      'High-resolution digital delivery in multiple aspect ratios'
    ],
    extraOptions: [
      { id: 'ext_p_makeup', name: 'On-set Professional Hair & Makeup Artist', price: 220, description: 'Premium makeup styling designed specifically for studio strobe lighting.' },
      { id: 'ext_p_retouch', name: 'Additional Fully Retouched Master Frame', price: 45, description: 'Single high-fashion bespoke detail-retouched portrait of your choice.' }
    ]
  },
  {
    id: 's_family',
    category: 'family',
    name: 'The Living Legacy',
    basePrice: 650,
    tagline: 'Warm, genuine family interactions captured in South Australia’s most beautiful golden landscapes.',
    duration: '1.5 Hours Golden-Hour Session',
    deliverables: '50+ Warm-Toned Edited Images',
    inclusions: [
      'Sunset timing planning & SA location vetting (Beach, Vineyard or Park)',
      'Natural prompt-driven candid and relaxed posing guidance',
      'Carefully calibrated warm neutral palette styling',
      'High-res gallery with download and direct printing access'
    ],
    extraOptions: [
      { id: 'ext_f_prints', name: 'Giclée Fine Art Print Bundle (5x Large)', price: 150, description: 'Museum-quality archival prints on heavy textured cotton paper.' },
      { id: 'ext_f_extended', name: 'Extended Family Session (Up to 12 people)', price: 180, description: 'Incorporate grandparents, siblings, or extended family members seamlessly.' }
    ]
  },
  {
    id: 's_commercial',
    category: 'commercial',
    name: 'The Prestige Brand Campaign',
    basePrice: 1600,
    tagline: 'High-production visual content for luxury brands, architecture, and editorial campaigns.',
    duration: 'Half-Day Shoot (4 Hours)',
    deliverables: '40 Premium Lifestyle/Commercial Frames',
    inclusions: [
      'Commercial moodboard definition & artistic pre-production planning',
      'Commercial licensing rights for website, ocean media, & print',
      'Precision architectural or product layout adjustments',
      'Bespoke luxury-brand high-end post-production'
    ],
    extraOptions: [
      { id: 'ext_c_fullday', name: 'Upgrade to Full-Day Session (8 Hours)', price: 1200, description: 'Double the creative time for extensive product selections or hotel/estate captures.' },
      { id: 'ext_c_social', name: 'Premium Vertical Social Clips (5x Reels/Videos)', price: 600, description: 'Ultra-clear high-definition vertical video segments for Instagram/TikTok.' }
    ]
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'r1',
    author: 'Eleanor & Julian West',
    rating: 5,
    reviewText: 'Falguni did not just take photos; she crafted an absolute masterpiece. Our wedding in McLaren Vale looked like a pages-spread straight out of Vogue Australia! She is extremely professional, calm, and has an incredible eye for natural shadows. 5 stars is an understatement.',
    date: 'February 2026',
    serviceType: 'Wedding Photography',
    location: 'McLaren Vale'
  },
  {
    id: 'r2',
    author: 'Dr. Sarah Al-Ahmadi',
    rating: 5,
    reviewText: 'As someone who is usually extremely camera-shy, I was amazed by my fine-art portrait experience. Falguni has a warm, beautiful presence that instantly washes away anxiety. Her studio in Lightsview is stunning, and the resulting photos have elevated my entire professional branding.',
    date: 'April 2026',
    serviceType: 'Fine-Art Portraiture',
    location: 'Lightsview Studio'
  },
  {
    id: 'r3',
    author: 'The Harrington Family',
    rating: 5,
    reviewText: 'We booked Falguni for a golden hour family shoot at Grange Beach. She was so patient with our two hyperactive children and captured some of the most beautiful, candid laughter we have ever seen. These photos will be cherished for generations. Highly recommended!',
    date: 'January 2026',
    serviceType: 'The Living Legacy Family Shoot',
    location: 'Grange Beach'
  },
  {
    id: 'r4',
    author: 'Marcus Vance, Director at Luxe Living',
    rating: 5,
    reviewText: 'Falguni’s commercial photography for our contemporary architectural showcase in Northfield SA was phenomenal. Her understanding of lines, light, and symmetry is outstanding. She delivered the campaign images ahead of schedule and the visual depth was superb.',
    date: 'March 2026',
    serviceType: 'Prestige Brand Campaign',
    location: 'Northfield SA'
  },
  {
    id: 'r5',
    author: 'Sophia & Liam Peterson',
    rating: 5,
    reviewText: 'Absolute magic. Falguni caught every emotional sparkle of our wedding. She and her second shooter blends in so smoothly but captures every single detail. We opted for the custom velvet photo book, and the print quality is stunning. Thank you so much, Falguni!',
    date: 'November 2025',
    serviceType: 'Wedding Photography',
    location: 'Adelaide Hills'
  }
];

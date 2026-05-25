import { PortfolioItem, ServicePackage, ClientReview } from '../types';

// Let's resolve the generated asset paths beautifully as strings using standard Vite syntax.
// This allows clean static bundling under Vite with correct hashed public URLs.
const heroWedding = new URL('../assets/images/hero_wedding_1779671234377.png', import.meta.url).href;
const falguniPortrait = new URL('../assets/images/falguni_portrait.jpg', import.meta.url).href;
const familyShoot = new URL('../assets/images/family_shoot_1779671272789.png', import.meta.url).href;
const commercialShoot = new URL('../assets/images/commercial_shoot_1779671292380.png', import.meta.url).href;

export const HERO_IMAGE = heroWedding;
export const FALGUNI_PORTRAIT = falguniPortrait;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Whisper of Innocence',
    category: 'newborn',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?auto=format&fit=crop&q=80&w=1200',
    location: 'Lightsview Studio, Adelaide',
    story: 'A quiet, peaceful moment of a 7-day-old newborn cradled in premium organic silk wraps, illuminated by the delicate, feather-soft morning light filtered through our custom Lightsview studio glass.',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 90mm f/2.8 Macro G OSS',
      aperture: 'f/2.8',
      shutterSpeed: '1/160s',
      iso: '100'
    },
    featured: true
  },
  {
    id: 'p2',
    title: 'Luminous Motherhood',
    category: 'maternity',
    imageUrl: heroWedding,
    location: 'Grange Sand Dunes, South Australia',
    story: 'A timeless silhouette celebrating the divine strength of expectancy. Taken at golden hour with a flowing champagne-tinted silk robe dancing in the coastal South Australian breeze.',
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
    id: 'p3',
    title: 'The First Embrace',
    category: 'family',
    imageUrl: familyShoot,
    location: 'Adelaide Hills, SA',
    story: 'A raw, candid capturing of young parents laughing as they nestle their newborn baby under the golden-hour canopy of ancient Adelaide Hills trees.',
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
    title: 'Serene Discovery',
    category: 'milestone',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1200',
    location: 'Lightsview Studio, Adelaide',
    story: 'Documenting the precious six-month milestone. Capturing those curious, soulful eyes and chubby baby details in a high-end, uncluttered minimalist style.',
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
    id: 'p5',
    title: 'The Nestled Sleep',
    category: 'newborn',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=1200',
    location: 'Lightsview Studio, Adelaide',
    story: 'Delicate macro shot of tiny curled toes and eyelash shadows as a newborn sleeps peacefully in a custom organic textured willow basket.',
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
    title: 'Sculpted Golden Line',
    category: 'maternity',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200',
    location: 'McLaren Vale, South Australia',
    story: 'Fine-art studio-lit maternity portrait. High-contrast monochromatic lighting highlighting the beautiful contours and graceful curves of motherhood.',
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
    title: 'Generational Legacy',
    category: 'family',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200',
    location: 'Lightsview Studio, Adelaide',
    story: 'An elegant editorial portrait of three generations—grandmother, mother, and infant. Hand-crafted using deep moody charcoal backdrops and warm amber modeling lighting.',
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
    title: 'Pure Wonderment',
    category: 'milestone',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200',
    location: 'Lightsview Studio, Adelaide',
    story: 'A radiant one-year sitter session capturing genuine, bubbly giggles. Simplicity in design allows the child’s vibrant developing personality to completely fill the frame.',
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
    id: 's_newborn',
    category: 'newborn',
    name: 'The Baby Masterpiece',
    basePrice: 850,
    tagline: 'Premium, safely-posed studio newborn sessions celebrating your baby’s initial sweet weeks.',
    duration: 'Up to 3.5 Hours Session',
    deliverables: '40 Fine-Art Retouched Images',
    inclusions: [
      'Pre-session style planning & custom design selection',
      'Exclusive access to our premium organic wraps, blankets, & artisan props',
      'Professional certified newborn safety-first styling (immunized & certified)',
      'Full custom temperature control & premium noise-conditioned studio space',
      'Bespoke highlight retouching & high-resolution digital delivery'
    ],
    extraOptions: [
      { id: 'ext_n_album', name: 'Fine-Art Velvet Keepsake Album (8"x8")', price: 390, description: 'Bespoke hand-bound velvet photo album with luxury display keepsake box.' },
      { id: 'ext_n_home', name: 'On-Location In-Home Setup Upgrade', price: 180, description: 'We bring the specialized studio equipment, warm blankets, and safety rigging directly to your home.' },
      { id: 'ext_n_rush', name: 'Express Retouch Delivery (72 hours)', price: 150, description: 'For families seeking their custom gallery fast for instant announcement prints.' }
    ]
  },
  {
    id: 's_maternity',
    category: 'maternity',
    name: 'The Divine Maternity',
    basePrice: 550,
    tagline: 'Exquisite, magazine-style pregnancy portraits captured in studio comfort or SA landscapes.',
    duration: '1.5 Hours Creative Session',
    deliverables: '25 Master-Retouched Images',
    inclusions: [
      'Complimentary access to our curated maternity client wardrobe range (flowing gowns, custom silks)',
      'Expert styling direction & flattering editorial posing guidance',
      'Luxury skin-tone calibration & high-fashion master facial retouching',
      'Partner & young sibling portrait integration'
    ],
    extraOptions: [
      { id: 'ext_m_mua', name: 'On-set Professional Hair & Makeup Artist', price: 220, description: 'Bespoke makeup artist styling specifically optimized for fine-art studio flash lighting.' },
      { id: 'ext_m_scenic', name: 'Scenic Outdoor Sunrise/Sunset Travel Upgrade', price: 120, description: 'Capture majestic silhouettes in Barossa vineyards or Grange sand dunes.' }
    ]
  },
  {
    id: 's_milestone',
    category: 'milestone',
    name: 'The Milestone Collection',
    basePrice: 450,
    tagline: 'Capturing precious milestone chapters including sitters, crawlers, and first birthday celebrations.',
    duration: '1 Hour Custom Session',
    deliverables: '20 Clean Editorial Images',
    inclusions: [
      'Customized minimalist studio sets tailored to your nursery theme',
      'Patience-assured play direction for authentic baby smiles',
      'Signature soft-diffused organic neutral lighting setups',
      'High-resolution digital gallery with full print permissions'
    ],
    extraOptions: [
      { id: 'ext_mi_smash', name: 'Organic Birthday Cake Smash Upgrade', price: 130, description: 'Includes a customized minimalist allergen-free smash-cake that perfectly coordinates with sets.' },
      { id: 'ext_mi_extra', name: 'Additional Fully Retouched Master Frame', price: 35, description: 'Single high-fashion bespoke detail-retouched baby portrait of your choice.' }
    ]
  },
  {
    id: 's_family',
    category: 'family',
    name: 'The Golden Family Legacy',
    basePrice: 650,
    tagline: 'Warm, editorial family interactions set amongst South Australia’s most beautiful golden landscapes.',
    duration: '1.5 Hours Golden-Hour Session',
    deliverables: '50+ Warm-Toned Edited Images',
    inclusions: [
      'Sunset timing planning & SA location vetting (Beach, Vineyards or Hills)',
      'Natural, candid prompt-driven posing that avoids stiff studio styling',
      'Carefully curated wardrobe color palette harmony consultation',
      'High-res gallery with download and direct printing access'
    ],
    extraOptions: [
      { id: 'ext_f_book', name: 'Velvet Fine-Art Hardcover Book (10"x10")', price: 420, description: 'Museum-quality archival book designed to preserve your timeless family legacy.' },
      { id: 'ext_f_extended', name: 'Extended Family Session (Up to 10 people)', price: 150, description: 'Incorporate grandparents or siblings seamlessly.' }
    ]
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'r1',
    author: 'Sophia & Marcus Vance',
    rating: 5,
    reviewText: 'Falguni is an absolute genius. We booked her for our newborn session in her gorgeous Lightsview studio. She handled our 8-day-old baby with such incredible, safety-first tenderness (she is fully certified!). The resulting photos looked like pages out of an editorial baby journal. Unrivaled experience.',
    date: 'February 2026',
    serviceType: 'The Baby Masterpiece',
    location: 'Lightsview'
  },
  {
    id: 'r2',
    author: 'Dr. Sarah Al-Ahmadi',
    rating: 5,
    reviewText: 'As someone who was feeling quite self-conscious during late pregnancy, Falguni made me feel like an absolute goddess during my fine-art maternity portrait shoot. Her studio is so clean, warm, and inviting. She is so incredibly patient and her gaze for shadow and light is phenomenal.',
    date: 'April 2026',
    serviceType: 'The Divine Maternity',
    location: 'Lightsview Studio'
  },
  {
    id: 'r3',
    author: 'The Harrington Family',
    rating: 5,
    reviewText: 'We can’t recommend Falguni enough! She captured our baby girl’s 6-month sitter milestone. Falguni was incredibly patient with her, singing songs and taking her time. These photos are clean, elegant, and capture our daughter’s sweet giggle perfectly. A true South Australian treasure.',
    date: 'January 2026',
    serviceType: 'The Milestone Collection',
    location: 'Grange Beach'
  },
  {
    id: 'r4',
    author: 'Eleanor & Julian West',
    rating: 5,
    reviewText: 'Absolute magic. We have used Falguni for both our maternity shoot and newborn legacy sessions. She and her work are premium. The custom velvet photography book she printed for our coffee table is of superb, museum-like quality. Our family will cherish these forever.',
    date: 'March 2026',
    serviceType: 'Newborn & Maternity Bundle',
    location: 'McLaren Vale'
  },
  {
    id: 'r5',
    author: 'The Peterson Family',
    rating: 5,
    reviewText: 'Falguni took our family outdoor session at Grange Beach during the golden sunset. Our kids are extremely hyperactive but Falguni adjusted the pacing so naturally, making it feel like a fun beach walk. The warm neutral tones in her final frames are absolutely gorgeous.',
    date: 'November 2025',
    serviceType: 'The Golden Family Legacy',
    location: 'Adelaide Hills'
  }
];

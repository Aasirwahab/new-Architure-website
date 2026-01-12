
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'void-house',
    title: 'THE VOID HOUSE',
    location: 'Kyoto, Japan',
    year: '2023',
    category: 'Residential',
    description: 'A minimal concrete residence focused on negative space and light manipulation. Designed for meditation and silence.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
    outcome: 'Seamless integration of indoor-outdoor flow via negative-space courtyards.',
    brief: 'The client requested a sanctuary removed from the urban density of Kyoto, utilizing raw materials.',
    solution: 'A series of cast-in-place concrete volumes arranged around three internal voids.',
    size: '220 sqm',
    stage: 'Completed',
    constraints: 'Dense urban site, strict local height regulations, seismic requirements.',
    approach: 'Brutalist minimalism, biophilic courtyards, thermal mass optimization.'
  },
  {
    id: 'moss-bunker',
    title: 'MOSS BUNKER',
    location: 'Berlin, Germany',
    year: '2024',
    category: 'Interiors',
    description: 'Adaptive reuse of a WWII bunker into a sustainable vertical farm and living space.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
    outcome: 'Breathed life into 2m thick concrete walls with biophilic interventions.',
    brief: 'Conversion of a historical military structure into a carbon-neutral mixed-use facility.',
    solution: 'Hydroponic walls served as natural insulators while maintaining structural integrity.',
    size: '1200 sqm',
    stage: 'Completed',
    constraints: 'Grade II listed structure, no external window alterations allowed, poor ventilation.',
    approach: 'Internal vertical voids, hydroponic air filtration, adaptive lighting systems.'
  },
  {
    id: 'sky-cliff',
    title: 'SKY CLIFF',
    location: 'Reykjavik, Iceland',
    year: '2024',
    category: 'Commercial',
    description: 'A glass and steel structure cantilevered over the volcanic landscape, blending danger with luxury.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
    outcome: 'A 20m cantilever that defies gravity and provides 270° views of the coast.',
    brief: 'Create a landmark observatory and spa at the edge of the Snaefellsnes peninsula.',
    solution: 'Steel skeleton anchored deep into basalt bedrock, wrapped in smart-tinting glass.',
    size: '450 sqm',
    stage: 'In Planning',
    constraints: 'Extreme wind loads, volcanic soil instability, remote logistics.',
    approach: 'Deep-bore steel piles, aerodynamic glass envelope, geothermal heating.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'arch',
    title: 'Full Architecture',
    description: 'Comprehensive design from conceptualization to final site handover. Ideal for new builds.',
    deliverables: ['Feasibility Studies', '3D Visualization', 'Planning Applications', 'Construction Drawings'],
    timeline: '12-24 months'
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Curation of materials, lighting, and bespoke furniture to complete the space.',
    deliverables: ['Material Palettes', 'Furniture Selection', 'Custom Joinery', 'Lighting Plans'],
    timeline: '4-8 months'
  },
  {
    id: 'planning',
    title: 'Planning & Drawings',
    description: 'Detailed technical documentation for complex site approvals and permits.',
    deliverables: ['Site Surveys', 'Technical Details', 'Regulation Compliance', 'Consultant Coordination'],
    timeline: '3-6 months'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Aethereal transformed our vision into a structural masterpiece that feels alive.",
    author: "Elena Vance",
    project: "The Void House"
  },
  {
    quote: "Their mastery of light and concrete is unparalleled in modern architecture.",
    author: "Dr. Aris Thorne",
    project: "Sky Cliff"
  }
];

export const FAQS = [
  {
    q: "What is your typical budget range?",
    a: "We specialize in high-end residential and commercial projects typically starting at $750k USD."
  },
  {
    q: "Do you handle planning permissions?",
    a: "Yes, we handle all local authority negotiations and technical submissions."
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary, but expect 6 months for design/planning and 12+ months for construction."
  }
];

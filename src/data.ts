import { Project, SkillItem, TechnologyItem } from './types';

export const projectsData: Project[] = [
  {
    id: 'proj-apps',
    area: 'apps',
    areaLabel: { ES: 'Apps', EN: 'Apps' },
    title: {
      ES: 'CryptoNeón — UX/UI Fintech',
      EN: 'CryptoNeon — Fintech UX/UI',
    },
    description: {
      ES: 'Diseñé una interfaz móvil de inversión que rompe con lo aburrido. Estética cyberpunk, widgets de alta legibilidad y un flujo de transacciones ultra rápido para que operar sea un placer. Menos pasos, más fluidez y un modo oscuro que cuida tus ojos a la noche.',
      EN: 'I designed a mobile investment interface that breaks the boring mold. Cyberpunk aesthetics, high-readability widgets, and an ultra-fast transaction flow to make trading a pleasure. Fewer steps, more fluidity, and an eye-friendly dark mode.',
    },
    testimonial: {
      name: 'Lucas Benítez',
      role: { ES: 'CEO de CryptoNeón', EN: 'CEO of CryptoNeon' },
      text: {
        ES: 'Martín entendió al toque lo que queríamos transmitir. El diseño no solo es hermoso sino que la tasa de conversión subió un 35% desde que implementamos su prototipo.',
        EN: 'Martín immediately understood what we wanted to convey. The design is not only beautiful, but the conversion rate jumped 35% since implementing his prototype.',
      },
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 254,
    commentsCount: 42,
    shares: 89,
  },
  {
    id: 'proj-web',
    area: 'web',
    areaLabel: { ES: 'Web', EN: 'Web' },
    title: {
      ES: 'Estudio Némesis — Landing Futurista',
      EN: 'Nemesis Studio — Futuristic Landing',
    },
    description: {
      ES: 'Desarrollé la landing page para un estudio de arquitectura 3D con un look hiper-limpio, animaciones fluidas basadas en scroll y optimización SEO al mango. Cada sección encaja perfecto y la navegación es intuitiva, cargando en menos de un segundo.',
      EN: 'I developed the landing page for a 3D architecture studio with a hyper-clean look, smooth scroll-based animations, and top-tier SEO optimization. Every section fits perfectly, and the navigation is intuitive, loading in under a second.',
    },
    testimonial: {
      name: 'Sofía Rossi',
      role: { ES: 'Directora de Arte', EN: 'Art Director' },
      text: {
        ES: 'La rompió toda. Logró una fluidez increíble y un estilo espacial que nuestros clientes elogian siempre. Es hiper prolijo con los detalles.',
        EN: 'He absolutely crushed it. Achieved incredible smoothness and a cosmic style that our clients always praise. Extremely neat with the details.',
      },
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 312,
    commentsCount: 56,
    shares: 112,
  },
  {
    id: 'proj-graphic',
    area: 'graphic',
    areaLabel: { ES: 'Gráfico', EN: 'Graphic' },
    title: {
      ES: 'Metrópolis 2050 — Afiches Brutalistas',
      EN: 'Metropolis 2050 — Brutalist Posters',
    },
    description: {
      ES: 'Serie de afiches promocionales utilizando tipografías gigantes, contrastes violentos y diagramación asimétrica de estilo suizo-brutalista. Una composición pensada para destacar en la calle o en redes y captar la atención de cualquiera al instante.',
      EN: 'A series of promotional posters featuring giant typography, high contrast, and asymmetrical Swiss-brutalist layouts. Compositions crafted to stand out on the street or in social media feeds, capturing immediate attention.',
    },
    testimonial: {
      name: 'Gaspar Vega',
      role: { ES: 'Coordinador de Eventos', EN: 'Event Coordinator' },
      text: {
        ES: 'Buscábamos algo disruptivo y Martín nos trajo una propuesta con muchísima fuerza visual. Agotamos las entradas en tiempo récord.',
        EN: 'We wanted something disruptive and Martín delivered a proposal with huge visual impact. We sold out all tickets in record time.',
      },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 187,
    commentsCount: 29,
    shares: 45,
  },
  {
    id: 'proj-textil',
    area: 'textil',
    areaLabel: { ES: 'Textil', EN: 'Fashion' },
    title: {
      ES: 'Komorebi — Indumentaria Urbana',
      EN: 'Komorebi — Streetwear Apparel',
    },
    description: {
      ES: 'Diseño conceptual y estampas para una línea de ropa urbana inspirada en el synthwave y el cyberpunk. Creación de vectores para serigrafía de alta definición y mockups realistas de prendas sobredimensionadas con paletas flúor.',
      EN: 'Conceptual apparel design and prints for a streetwear line inspired by synthwave and cyberpunk cultures. Engineered high-definition vector screen prints and oversized garment mockups with glowing palettes.',
    },
    testimonial: {
      name: 'Mateo Ortega',
      role: { ES: 'Fundador de Komorebi Co.', EN: 'Founder of Komorebi Co.' },
      text: {
        ES: 'Un laburo impecable. Martín no solo tiró los diseños de las estampas sino que nos ayudó con la identidad visual de la campaña. Crack total.',
        EN: 'Impeccable work. Martín did not just deliver the print designs; he guided our campaign visual identity too. Total legend.',
      },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 421,
    commentsCount: 88,
    shares: 201,
  },
  {
    id: 'proj-branding',
    area: 'branding',
    areaLabel: { ES: 'Branding', EN: 'Branding' },
    title: {
      ES: 'Vórtice — Identidad de Marca',
      EN: 'Vortice — Brand Identity',
    },
    description: {
      ES: 'Manual de marca completo, logotipo adaptativo y papelería digital para una consultora tecnológica de vanguardia. Un sistema visual basado en la idea de expansión constante, con tipografías sans de excelente rendimiento y tonos oscuros sofisticados.',
      EN: 'A complete brand guidelines manual, adaptive logo design, and digital stationery for a leading tech consultancy. A visual system centered on constant expansion, premium sans typography, and sophisticated dark tones.',
    },
    testimonial: {
      name: 'Camila Méndez',
      role: { ES: 'Socia Gerente', EN: 'Managing Partner' },
      text: {
        ES: 'Por fin un diseñador que entiende que un logo tiene que funcionar en una pantalla chiquita y en un cartel gigante. Súper profesional y rápido.',
        EN: 'Finally a designer who gets that a logo needs to work on a small smartwatch screen as well as on a giant billboard. Super pro and fast.',
      },
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 298,
    commentsCount: 39,
    shares: 74,
  },
  {
    id: 'proj-media',
    area: 'media',
    areaLabel: { ES: 'Media', EN: 'Media' },
    title: {
      ES: 'Campaña Cyberpunk — Motion Graphics',
      EN: 'Cyberpunk Campaign — Motion Graphics',
    },
    description: {
      ES: 'Cortes dinámicos de video de 15 segundos con efectos visuales retro-digitales, glitches sonoros y animaciones tipográficas agresivas pensadas para Instagram Reels y TikTok. Diseñados para generar impacto visual inmediato en el feed del usuario.',
      EN: 'Dynamic 15-second video cuts featuring retro-digital visual effects, audio glitches, and high-impact typographic animations designed for Instagram Reels and TikTok. Engineered for maximum thumbs-stopping power in the feed.',
    },
    testimonial: {
      name: 'Rodrigo Paz',
      role: { ES: 'Director de Marketing', EN: 'Marketing Director' },
      text: {
        ES: 'El dinamismo que logró es una locura. El nivel de interacción y reproducciones superó todos nuestros benchmarks previos. El mejor con diferencia.',
        EN: 'The dynamism he achieved is insane. The level of engagement and views crushed all of our previous benchmarks. Easily the best out there.',
      },
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 356,
    commentsCount: 61,
    shares: 110,
  }
];

export const skillsList: SkillItem[] = [
  { name: { ES: 'Diseño UX/UI', EN: 'UX/UI Design' }, iconName: 'Compass' },
  { name: { ES: 'Full Stack Developer', EN: 'Full Stack Developer' }, iconName: 'Code' },
  { name: { ES: 'Redacción Digital y SEO', EN: 'Digital Writing & SEO' }, iconName: 'Search' },
  { name: { ES: 'Diseño Web HTML + CSS', EN: 'Web Design HTML + CSS' }, iconName: 'Layers' },
];

export const technologiesList: TechnologyItem[] = [
  { name: 'Adobe Illustrator', iconName: 'PenTool' },
  { name: 'Figma', iconName: 'Figma' },
  { name: 'Wordpress', iconName: 'Wordpress' },
  { name: 'Flutterflow', iconName: 'Cpu' },
  { name: 'Capcut', iconName: 'Video' },
  { name: 'Canva', iconName: 'Grid' },
  { name: 'Adobe Audition', iconName: 'Volume2' },
  { name: 'Wondershare Filmora', iconName: 'Film' },
];

export const contactDetails = {
  name: 'Martín Monzón',
  age: 42,
  phrase: { ES: '"Crear o reventar"', EN: '"Create or Burst"' },
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80', // friendly, cap look creative guy
  behance: '@dmmonzon82',
  linkedin: 'DiegoMartinMonzon',
  phone: '+54 9 (011) 15 6529 8800',
  email: 'dmmonzon82@gmail.com'
};

export const dict = {
  ES: {
    heroTitlePre: '¿Estás listo para que tu marca se llene de color y energía?',
    heroTitleMain: 'Explora cómo transformo tus ideas en diseños impactantes y memorables.',
    heroCTA1: 'Cuéntame tu idea',
    heroCTA2: 'Conoce mis trabajos',
    ctaMore: 'Quiero saber más',
    contactTitle: 'Hagamos realidad tu idea.',
    contactSubtitle: '¡Contáctame!',
    contactIntro: 'Tú tienes una idea increíble, y yo las herramientas para hacerla crecer. Cuéntame sobre ella, compartamos nuestras visiones, y construyamos juntos un proyecto del que estemos orgullosos.',
    aboutMe: 'Sobre mí',
    yearsOld: 'años de edad',
    knowledge: 'Conocimientos adquiridos',
    technologies: 'Tecnologías aplicadas',
    formName: 'Nombre y Apellido',
    formEmail: 'E-mail',
    formMessage: 'Mensaje',
    formSubmit: 'Enviar mensaje',
    successMsg: '¡Buenísimo! Tu mensaje se envió joya. Me pongo en contacto con vos al toque.',
    liked: '¡Te copó el trabajo!',
    shared: '¡Enlace copiado al portapapeles!',
    commentPlaceholder: 'Escribí un comentario...',
    commentPost: 'Comentar',
    viewMoreComments: 'Ver comentarios',
    viewLessComments: 'Ocultar comentarios',
    navContact: 'CONTACTO',
    noCommentsYet: 'No hay comentarios aún. ¡Sé el primero en dejar uno, che!',
  },
  EN: {
    heroTitlePre: 'Ready to fill your brand with color and energy?',
    heroTitleMain: 'Explore how I transform your ideas into stunning and memorable designs.',
    heroCTA1: 'Tell me your idea',
    heroCTA2: 'See my work',
    ctaMore: 'I want to know more',
    contactTitle: 'Let’s make your idea a reality.',
    contactSubtitle: 'Contact me!',
    contactIntro: 'You have an incredible idea, and I have the tools to make it grow. Tell me about it, let’s share our visions, and build a project we are proud of together.',
    aboutMe: 'About me',
    yearsOld: 'years old',
    knowledge: 'Acquired knowledge',
    technologies: 'Applied technologies',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formMessage: 'Message',
    formSubmit: 'Send message',
    successMsg: 'Awesome! Your message has been sent. I’ll get back to you as soon as possible.',
    liked: 'You liked this project!',
    shared: 'Link copied to clipboard!',
    commentPlaceholder: 'Write a comment...',
    commentPost: 'Post',
    viewMoreComments: 'View comments',
    viewLessComments: 'Hide comments',
    navContact: 'CONTACT',
    noCommentsYet: 'No comments yet. Be the first to leave one!',
  }
};

import { Project, SkillItem, TechnologyItem } from './types';
// @ts-expect-error - Vite handles image imports
import perfilImg from '../assets/img/Perfil.png';

export const projectsData: Project[] = [
  {
    id: 'proj-apps',
    area: 'apps',
    areaLabel: { ES: 'App', EN: 'App' },
    title: {
      ES: 'Innovación a medida: aplicaciones que potencian tu marca.',
      EN: 'Tailor-made innovation: applications that empower your brand.',
    },
    description: {
      ES: 'Llevemos tus ideas al entorno móvil y web con plataformas intuitivas y de alto rendimiento. Creamos la herramienta digital que tu negocio necesita para automatizar procesos, conectar con tu audiencia y generar resultados reales desde el primer día.',
      EN: `Let's bring your ideas to the mobile and web environment with intuitive, high-performance platforms. We create the digital tool your business needs to automate processes, connect with your audience, and generate real results from day one.`,
    },
    testimonial: {
      name: 'Lucas Benítez',
      role: { ES: 'CEO de CryptoNeón', EN: 'CEO of CryptoNeon' },
      text: {
        ES: 'Martín entendió al toque lo que queríamos transmitir. El diseño no solo es hermoso sino que la tasa de conversión subió un 35% desde que implementamos su prototipo.',
        EN: 'Martín immediately understood what we wanted to convey. The design is not only beautiful, but the conversion rate jumped 35% since implementing his prototype.',
      },
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&h=800&q=80',
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 254,
    commentsCount: 42,
    shares: 89,
    examples: [
      {
        id: 'apps-ex-1',
        title: { ES: 'Fintech Wallet', EN: 'Fintech Wallet' },
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 254,
        commentsCount: 42,
        shares: 89,
        description: {
          ES: 'Una billetera digital intuitiva diseñada para facilitar transferencias instantáneas, pagos QR y control de gastos personales con una interfaz moderna y futurista.',
          EN: `An intuitive digital wallet designed to facilitate instant transfers, QR payments, and personal expense tracking with a modern, futuristic interface.`
        }
      },
      {
        id: 'apps-ex-2',
        title: { ES: 'Delivery Express App', EN: 'Delivery Express App' },
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 198,
        commentsCount: 31,
        shares: 55,
        description: {
          ES: 'Plataforma de delivery optimizada con seguimiento en tiempo real, sugerencias inteligentes de menús y pasarela de pago ultra rápida.',
          EN: `Optimized delivery platform featuring real-time tracking, intelligent menu suggestions, and an ultra-fast payment gateway.`
        }
      },
      {
        id: 'apps-ex-3',
        title: { ES: 'Social Connect', EN: 'Social Connect' },
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 310,
        commentsCount: 55,
        shares: 72,
        description: {
          ES: 'Red social enfocada en creadores digitales, con galerías dinámicas interactuables y opciones avanzadas de monetización comunitaria.',
          EN: `Social network focused on digital creators, featuring dynamic interactive galleries and advanced community monetization options.`
        }
      }
    ]
  },
  {
    id: 'proj-web',
    area: 'web',
    areaLabel: { ES: 'Web', EN: 'Web' },
    title: {
      ES: 'Experiencias web que cautivan y convierten.',
      EN: 'Web experiences that captivate and convert.',
    },
    description: {
      ES: 'Transformemos tu presencia online en una experiencia inolvidable. Creemos sitios web intuitivos y atractivos que impacten a tu audiencia y generen resultados reales.',
      EN: `Let's transform your online presence into an unforgettable experience. Let's create intuitive and attractive websites that impact your audience and deliver real results.`,
    },
    testimonial: {
      name: 'Sofía Rossi',
      role: { ES: 'Directora de Arte', EN: 'Art Director' },
      text: {
        ES: 'La rompió toda. Logró una fluidez increíble y un estilo espacial que nuestros clientes elogian siempre. Es hiper prolijo con los detalles.',
        EN: `He absolutely crushed it. Achieved incredible smoothness and a cosmic style that our clients always praise. Extremely neat with the details.`,
      },
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 312,
    commentsCount: 56,
    shares: 112,
    examples: [
      {
        id: 'web-ex-1',
        title: { ES: 'Portal Web de Noticias', EN: 'News Website' },
        image: '/assets/img/WebEntreHockey.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 312,
        commentsCount: 56,
        shares: 112,
        description: {
          ES: `Diseño y desarrollo maquetado e integral del sitio web institucional y de noticias para el medio regional Entre Hockey.

La plataforma fue concebida para la gestión dinámica de contenidos informativos, estructurando la arquitectura de información en secciones clave como novedades zonales, perfiles de jugadoras abanderadas y cobertura de clubes.

El desarrollo backend y frontend se realizó íntegramente combinando ASP, HTML y CSS, garantizando una carga liviana, una jerarquía visual clara para la lectura de artículos y un consumo dinámico de imágenes y banners promocionales.`,
          EN: `Layout and comprehensive design and development of the institutional and news website for the regional media Entre Hockey.

The platform was conceived for the dynamic management of information content, structuring the information architecture in key sections such as zonal news, profiles of flag players and club coverage.

Backend and frontend development was carried out entirely by combining ASP, HTML and CSS, guaranteeing light loading, a clear visual hierarchy for reading articles and dynamic consumption of images and promotional banners.`
        }
      },
      {
        id: 'web-ex-2',
        title: { ES: 'SaaS Platform Dashboard', EN: 'SaaS Platform Dashboard' },
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 403,
        commentsCount: 72,
        shares: 145,
        description: {
          ES: 'Panel de administración intuitivo con gráficos interactivos en tiempo real, gestión de usuarios avanzada y reportería automatizada.',
          EN: `Intuitive administration dashboard with real-time interactive charts, advanced user management, and automated reporting.`
        }
      },
      {
        id: 'web-ex-3',
        title: { ES: 'E-Commerce Headless', EN: 'Headless E-Commerce' },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 278,
        commentsCount: 44,
        shares: 96,
        description: {
          ES: 'Tienda online de carga ultrarrápida optimizada para SEO técnico, catálogo dinámico con filtros instantáneos e integración fluida con pasarelas de pago.',
          EN: `Ultra-fast online store optimized for technical SEO, featuring a dynamic catalog with instant filtering and seamless payment gateway integration.`
        }
      }
    ]
  },
  {
    id: 'proj-uxui',
    area: 'uxui',
    areaLabel: { ES: 'UX/UI', EN: 'UX/UI' },
    title: {
      ES: 'Diseño centrado en las personas: interfaces que convierten.',
      EN: 'Design centered on people: interfaces that convert.',
    },
    description: {
      ES: 'Diseño experiencias digitales estratégicas basadas en investigación de usuarios, arquitectura de información y sistemas de diseño escalables. Transformemos flujos complejos en interfaces claras, accesibles y memorables.',
      EN: `I design strategic digital experiences grounded in user research, information architecture, and scalable design systems. Let's transform complex workflows into clear, accessible, and memorable interfaces.`,
    },
    testimonial: {
      name: 'Valentina Quiroga',
      role: { ES: 'Product Manager en FinTech Sur', EN: 'Product Manager at FinTech Sur' },
      text: {
        ES: 'Martín reestructuró todo el flujo de nuestra plataforma, reduciendo la fricción de uso un 40% desde el primer mes.',
        EN: `Martín restructured our entire platform workflow. We reduced usability friction by 40% in the very first month.`,
      },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: '/assets/img/WebVWFS.png?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 345,
    commentsCount: 52,
    shares: 118,
    examples: [
      {
        id: 'uxui-ex-1',
        title: { ES: 'Rediseño VWFS', EN: 'VWFS Redesign' },
        image: '/assets/img/WebVWFS.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 245,
        commentsCount: 38,
        shares: 94,
        description: {
          ES: `Rediseño integral de la plataforma web de Volkswagen Financial Services enfocado en transformar una herramienta de gestión operativa en un activo comercial altamente eficiente.

La propuesta metodológica se fundamentó en el marco de los 5 elementos del diseño de experiencia de usuario de Jesse James Garrett (Estrategia, Alcance, Estructura, Esqueleto y Superficie) para resolver fricciones de usabilidad y mejorar la navegación.

El trabajo priorizó la optimización de flujos de trabajo, aportando una solución integral de diseño UX/UI orientada a brindar mayor claridad, velocidad y funcionalidad tanto al usuario como al negocio.`,
          EN: `Integral redesign of the Volkswagen Financial Services website focused on transforming an operational management tool into a highly efficient commercial asset.

The methodological proposal was based on Jesse James Garrett's 5 elements of user experience design (Strategy, Scope, Structure, Skeleton, and Surface) to resolve usability friction and improve navigation.

The work prioritized workflow optimization, providing an integral UX/UI design solution oriented to bring greater clarity, speed and functionality to both the user and the business.`
        }
      },
      {
        id: 'uxui-ex-2',
        title: { ES: 'Design System & UI Kit', EN: 'Design System & UI Kit' },
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 289,
        commentsCount: 41,
        shares: 87,
        description: {
          ES: 'Sistema de diseño modular en Figma con tokens de color, tipografía escalable, componentes interactivos reutilizables y estándares de accesibilidad WCAG AA para acelerar el desarrollo.',
          EN: `Modular design system in Figma featuring color tokens, scalable typography, reusable interactive components, and WCAG AA accessibility standards to accelerate product development.`
        }
      },
      {
        id: 'uxui-ex-3',
        title: { ES: 'Optimización de Onboarding', EN: 'Onboarding UX Optimization' },
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 334,
        commentsCount: 49,
        shares: 105,
        description: {
          ES: 'Investigación UX, mapeo de user journeys, wireframing y prototipado de alta fidelidad enfocados en simplificar el registro y maximizar la tasa de conversión.',
          EN: `UX research, user journey mapping, wireframing, and high-fidelity prototyping focused on simplifying user onboarding and maximizing conversion rates.`
        }
      }
    ]
  },
  {
    id: 'proj-branding',
    area: 'branding',
    areaLabel: { ES: 'Branding', EN: 'Branding' },
    title: {
      ES: 'Transformemos tu marca en una gran historia visual.',
      EN: 'Let\'s transform your brand into a great visual story.',
    },
    description: {
      ES: '¿Listo para darle a tu marca una nueva y cautivadora narrativa visual? Compárteme tu historia, y juntos crearemos un branding que refleje tu esencia y conecte con tu público.',
      EN: `Ready to give your brand a new and captivating visual narrative? Share your story with me, and together we will create branding that reflects your essence and connects with your audience.`,
    },
    testimonial: {
      name: 'Camila Méndez',
      role: { ES: 'Socia Gerente', EN: 'Managing Partner' },
      text: {
        ES: 'Por fin un diseñador que entiende que un logo tiene que funcionar en una pantalla chiquita y en un cartel gigante. Súper profesional y rápido.',
        EN: `Finally a designer who gets that a logo needs to work on a small smartwatch screen as well as on a giant billboard. Super pro and fast.`,
      },
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 298,
    commentsCount: 39,
    shares: 74,
    examples: [
      {
        id: 'branding-ex-1',
        title: { ES: 'Festival cultural ', EN: 'Cultural festival' },
        image: '/assets/img/FestivalBranding.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 298,
        commentsCount: 39,
        shares: 74,
        description: {
          ES: `Creación de la identidad de marca para un evento cultural de arraigo popular. El objetivo fue diseñar un símbolo vibrante y representativo que transmitiera el espíritu festivo y el sentido de comunidad de la región.

• Simbología de Unión: El isotipo toma como metáfora central los pétalos de una flor: elementos independientes que, al entrelazarse, conforman una estructura única y armónica, representando la unión de las distintas colonias que dan vida al festival.

• Paleta Cálida y Humana: La selección cromática combina tonos vibrantes de amarillo, naranja, magenta, azul y violeta, evocando la diversidad cultural, la calidez del encuentro, la cercanía de su gente y la alegría del festejo popular.

• Versatilidad de Marca: Desarrollo de un sistema visual flexible, pensado para lucir con impacto tanto en formatos digitales como en escenografías, cartelería de gran formato e indumentaria oficial.`,
          EN: `Creation of brand identity for a cultural event with popular roots. The goal was to design a vibrant and representative symbol that conveyed the festive spirit and sense of community of the region.

• Union Symbolism: The isotype takes as its central metaphor the petals of a flower: independent elements that, when intertwined, form a unique and harmonious structure, representing the union of the different colonies that give life to the festival.

• Warm and Human Palette: The color selection combines vibrant tones of yellow, orange, magenta, blue and violet, evoking cultural diversity, the warmth of the meeting, the closeness of its people and the joy of popular celebration.

• Brand Versatility: Development of a flexible visual system, designed to shine with impact both in digital formats and in sets, large-format signage and official clothing.`
        }
      },
      {
        id: 'branding-ex-2',
        title: { ES: 'Hockey entrerriano', EN: 'Entrerrianos on Grass' },
        image: '/assets/img/LogoEntreHockey.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 221,
        commentsCount: 28,
        shares: 61,
        description: {
          ES: `Desarrollo de marca e identidad visual para un medio digital enfocado en la difusión del hockey sobre césped provincial. El concepto central nació de la integración armónica entre la pasión deportiva y el orgullo de pertenencia territorial.

La propuesta gráfica unifica el elemento más representativo de la disciplina —el palo de hockey— cruzando la bandera argentina para conformar la icónica franja roja diagonal de la bandera de la Provincia de Entre Ríos.

Esta síntesis visual genera un símbolo con un alto valor de identidad, dinamismo y conexión con la comunidad deportiva de la región.`,
          EN: `Development of brand and visual identity for a digital media focused on the diffusion of provincial field hockey. The central concept was born from the harmonious integration between sporting passion and the pride of territorial belonging.

The graphic proposal unifies the most representative element of the discipline —the hockey stick— crossing the Argentine flag to form the iconic diagonal red stripe of the flag of the Province of Entre Ríos.

This visual synthesis generates a symbol with high identity value, dynamism and connection with the region's sporting community.`
        }
      },
      {
        id: 'branding-ex-3',
        title: { ES: 'Agencia de Noticias', EN: 'News Agency' },
        image: '/assets/img/Logo3260.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 342,
        commentsCount: 45,
        shares: 88,
        description: {
          ES: `Diseño de marca para un portal de noticias enfocado en cuatro ejes fundamentales: Deportes, Cultura, Educación y Turismo. El desarrollo gráfico se construyó en torno a la identidad territorial, tomando como nombre principal el código postal 3260 para proyectar inmediatez y pertenencia geográfica.

La propuesta rescata la estética tradicional del nomenclador urbano mediante una tipografía inspirada en las icónicas chapas de numeración callejera.

Como elemento central, un pin de ubicación geolocaliza el medio e integra en su interior la silueta de la histórica Pirámide de la Plaza General Francisco Ramírez, convirtiendo un símbolo urbano en un emblema noticioso moderno.`,
          EN: `Brand design for a news portal focused on four fundamental areas: Sports, Culture, Education, and Tourism. The graphic development was built around territorial identity, taking the postal code 3260 as the main name to project immediacy and geographical belonging.

The proposal rescues the traditional aesthetic of the urban nomenclator through a typography inspired by the iconic street numbering plates.

As a central element, a location pin geolocalizes the medium, integrating the silhouette of the historic Pyramid of Plaza General Francisco Ramírez inside, turning an urban symbol into a modern news emblem.`
        }
      }
    ]
  },
  {
    id: 'proj-textil',
    area: 'textil',
    areaLabel: { ES: 'Textil', EN: 'Textile' },
    title: {
      ES: 'Diseño de indumentaria que comunica e impacta.',
      EN: 'Apparel design that communicates and impacts.',
    },
    description: {
      ES: 'Desarrollo diseños para equipos deportivos y empresas, creando prendas con estilo propio. Mi objetivo es que cada trabajo comunique la esencia de la marca y genere un impacto positivo.',
      EN: `I develop designs for sports teams and companies, creating garments with their own style. My goal is for each work to communicate the brand's essence and generate a positive impact.`,
    },
    testimonial: {
      name: 'Mateo Ortega',
      role: { ES: 'Fundador de Komorebi Co.', EN: 'Founder of Komorebi Co.' },
      text: {
        ES: 'Un laburo impecable. Martín no solo tiró los diseños de las estampas sino que nos ayudó con la identidad visual de la campaña. Crack total.',
        EN: `Impeccable work. Martín did not just deliver the print designs; he guided our campaign visual identity too. Total legend.`,
      },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 421,
    commentsCount: 88,
    shares: 201,
    examples: [
      {
        id: 'textil-ex-1',
        title: { ES: 'Indumentaria Oficial', EN: 'Official Apparel' },
        image: '/assets/img/Engranaje.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 421,
        commentsCount: 88,
        shares: 201,
        description: {
          ES: `Diseño integral de indumentaria deportiva para el equipo femenino de hockey sobre césped del Club Engranaje. El desarrollo se enfocó en fusionar la esencia histórica de la institución con un corte ergónomico y moderno.

La propuesta integra la paleta cromática institucional en azul marino y blanco junto a vibrantes acentos en magenta, aportando una impronta femenina, dinámica y moderna.

Todo el desarrollo se estructuró sobre mordería técnica de alto rendimiento, optimizando la ubicación de sponsors, dorsales y tipografías para garantizar una visibilidad limpia y profesional en la cancha.`,
          EN: `Integrated design of sports apparel for the women's field hockey team of Club Engranaje. The development focused on fusing the historical essence of the institution with an ergonomic and modern cut.

The proposal integrates the institutional color palette in navy blue and white along with vibrant magenta accents, providing a feminine, dynamic and modern imprint.

The entire development was structured on high-performance technical cutting, optimizing the location of sponsors, numbers and fonts to ensure clean and professional visibility on the court.`
        }
      },
      {
        id: 'textil-ex-2',
        title: { ES: 'Indumentaria deportiva', EN: 'Sports Clothing' },
        image: '/assets/img/TextilEH.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 310,
        commentsCount: 64,
        shares: 154,
        description: {
          ES: `Diseño y desarrollo de indumentaria deportiva (sudadera/musculosa) para la marca Entre Hockey. El concepto gráfico toma como eje rector la síntesis geométrica de un campo de hockey sobre césped, trasladando las líneas de área, el semicírculo y los trazados reglamentarios directamente sobre la estructura de la prenda.

La propuesta articula un corte ergonómico de alto rendimiento con una composición cromática dinámica en tonos azul y magenta, integrando la URL del sitio web oficial en la base para reforzar la identidad visual y el posicionamiento de la marca en cancha.`,
          EN: `Design and development of sports apparel (hoodie/tank top) for the brand Entre Hockey. The graphic concept takes as its main axis the geometric synthesis of a field hockey field, transferring the area lines, the semicircle, and the regulatory lines directly onto the structure of the garment.

The proposal articulates a high-performance ergonomic cut with a dynamic color composition in blue and magenta tones, integrating the official website URL at the base to reinforce the visual identity and market positioning of the brand on the field.`
        }
      },
      {
        id: 'textil-ex-3',
        title: { ES: 'Eco Cotton Drop', EN: 'Eco Cotton Drop' },
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 289,
        commentsCount: 49,
        shares: 110,
        description: {
          ES: 'Prendas ecológicas fabricadas con 100% algodón orgánico, tintes naturales no tóxicos y designs minimalistas inspirados en la naturaleza.',
          EN: `Eco-friendly garments made with 100% organic cotton, non-toxic natural dyes, and minimalist designs inspired by nature.`
        }
      }
    ]
  },
  {
    id: 'proj-graphic',
    area: 'graphic',
    areaLabel: { ES: 'Gráfico', EN: 'Graphic' },
    title: {
      ES: 'Narrativa visual en papel con atención al detalle.',
      EN: 'Visual narrative on paper with attention to detail.',
    },
    description: {
      ES: 'Material impreso que se adapta a las necesidades y preferencias de cada público: revistas con contenido especializado, banners publicitarios, flyers de interés y mucho más.',
      EN: `Printed material tailored to the needs and preferences of each audience: specialized magazines, advertising banners, engaging flyers, and much more.`,
    },
    testimonial: {
      name: 'Gaspar Vega',
      role: { ES: 'Coordinador de Eventos', EN: 'Event Coordinator' },
      text: {
        ES: 'Buscábamos algo disruptivo y Martín nos trajo una propuesta con muchísima fuerza visual. Agotamos las entradas en tiempo récord.',
        EN: `We wanted something disruptive and Martín delivered a proposal with huge visual impact. We sold out all tickets in record time.`,
      },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    },
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=1200&h=800&q=80',
    likes: 187,
    commentsCount: 29,
    shares: 45,
    examples: [
      {
        id: 'graphic-ex-1',
        title: { ES: 'Anuario de Campeones', EN: 'Champions Yearbook' },
        image: '/assets/img/RevistaParque.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 187,
        commentsCount: 29,
        shares: 45,
        description: {
          ES: `Diseño editorial completo de revista deportiva con maquetación de alto impacto visual, infografías detalladas e impresión de calidad premium.

• **Producción 360°**: Redacción periodística de contenidos, captura y selección fotográfica, y maquetación editorial realizada de forma independiente.

• **Narrativa Visual**: Estructuración de páginas interiores que combinan estadísticas, crónicas de partidos y un recorrido emotivo para inmortalizar la hazaña deportiva.

• **Diseño de Impresión**: Selección tipográfica y cromática ajustada a la identidad del club, pensada para resaltar el valor coleccionable del papel.`,
          EN: `Complete editorial design of a sports magazine featuring high visual impact layouts, detailed infographics, and premium quality printing.

• **360° Production**: Journalistic content writing, photography capture and selection, and editorial layout realized independently.

• **Visual Narrative**: Structuring interior pages that combine statistics, match chronicles, and an emotional journey to immortalize the sports achievement.

• **Print Design**: Typographic and color selection adjusted to the club's identity, designed to highlight the collectible value of paper.`
        }
      },
      {
        id: 'graphic-ex-2',
        title: { ES: 'Publicidad estática', EN: 'Static Advertising' },
        image: '/assets/img/CarteleriaFestival.png?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 156,
        commentsCount: 21,
        shares: 38,
        description: {
          ES: `Diseño publicitario en soporte estático (mupi/vía pública) enfocado en la promoción y convocatoria masiva para el "Festival de las Colonias".

La gráfica se estructuró para garantizar una lectura ágil en entornos urbanos, jerarquizando la grilla de artistas, ubicación y fecha del evento mediante un alto contraste cromático sobre fondo oscuro.

La pieza articula la marca central del festival con bloques de información secundaria bien delimitados en la base, organizando datos clave como precios de entradas, servicios de cantina y recomendaciones generales para los asistentes de manera clara y funcional.`,
          EN: `Advertising design on static support (mupi/public space) focused on mass promotion and calls for the "Festival de las Colonias".

The graphics were structured to ensure agile reading in urban environments, prioritizing the artist lineup, location, and event date through high chromatic contrast against a dark background.

The piece articulates the central festival brand with well-delimited secondary information blocks at the bottom, organizing key data such as ticket prices, canteen services, and general recommendations for attendees in a clear and functional manner.`
        }
      },
      {
        id: 'graphic-ex-3',
        title: { ES: 'Afiches de Conciertos', EN: 'Concert Posters' },
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&h=800&q=80',
        likes: 212,
        commentsCount: 35,
        shares: 50,
        description: {
          ES: 'Serie de pósteres promocionales para festivales musicales subterráneos, utilizando técnicas de collage digital y psicodelia visual vibrante.',
          EN: `Series of promotional posters for underground music festivals, using digital collage techniques and vibrant visual psychedelia.`
        }
      }
    ]
  },
  {
    id: 'proj-media',
    area: 'media',
    areaLabel: { ES: 'Media', EN: 'Media' },
    title: {
      ES: 'Producción multimedia creativa y con pasión.',
      EN: 'Creative and passionate multimedia production.',
    },
    description: {
      ES: 'Generemos juntos videos promocionales y corporativos que cautiven a la audiencia y transmitan la esencia del evento, como presentaciones multimedia o contenido para pantallas LED.',
      EN: `Let's generate promotional and corporate videos that captivate the audience and convey the essence of the event, such as multimedia presentations or LED screen content.`,
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
    examples: [
      {
        id: 'media-ex-1',
        title: { ES: 'Video institucional', EN: 'Institutional video' },
        video: '/assets/img/EH2020.mp4',
        likes: 356,
        commentsCount: 61,
        shares: 110,
        description: {
          ES: `Producción y postproducción audiovisual integral desarrollada para potenciar la presencia en redes sociales de una plataforma web deportiva.

El proyecto combinó la captura y selección de video propio de partidos en vivo, locución de voz en off, montaje rítmico y diseño sonoro.

Un trabajo 360° enfocado en transmitir la pasión del juego, dinamizar el contenido digital y consolidar el posicionamiento de la marca en su comunidad.`,
          EN: `Comprehensive audiovisual production and post-production developed to enhance the social media presence of a sports web platform.

The project combined the capture and selection of its own video of live matches, voice-over, rhythmic editing and sound design.

A 360° work focused on transmitting the passion of the game, energizing digital content and consolidating the brand's positioning in its community.`,
        }
      },
      {
        id: 'media-ex-2',
        title: { ES: 'Publicidad Multimedia', EN: 'Multimedia Advertising' },
        video: '/assets/img/MediaPyxis.mp4',
        likes: 284,
        commentsCount: 42,
        shares: 75,
        description: {
          ES: `Producción multimedia integral desarrollada para presentar la cartera de servicios publicitarios y digitales de la agencia Pyxis.

El proyecto abarcó el proceso creativo completo, desde la redacción del guion comercial y la grabación de locución en off propia, hasta el montaje y edición de video.

La pieza articula de manera dinámica las distintas soluciones que ofrece la agencia —audio, video, desarrollo web, manejo de redes sociales e imagen corporativa—, logrando una presentación comercial rítmica, clara y orientada a destacar el valor estratégico de cada servicio ante potenciales clientes.`,
          EN: `Comprehensive multimedia production developed to present the advertising and digital services portfolio of the Pyxis agency.

The project included the complete creative process, from writing the commercial script and recording original voice-over, to video editing.

The piece dynamically articulates the different solutions offered by the agency —audio, video, web development, social media management, and corporate identity— achieving a rhythmic, clear commercial presentation focused on highlighting the strategic value of each service to potential clients.`
        }
      },
      {
        id: 'media-ex-3',
        title: { ES: 'Teaser Promocional', EN: 'Promotional Teaser' },
        video: '/assets/img/MediaParqueSurTNA.mp4',
        likes: 412,
        commentsCount: 78,
        shares: 130,
        description: {
          ES: `Video promocional de ritmo ágil y estética dinámica desarrollado para anunciar la pretemporada y el regreso a las canchas del Club Parque Sur de cara al Torneo Nacional de Ascenso (TNA).

La pieza combina placas tipográficas de alto impacto con secuencias de entrenamiento en el estadio —ejercicios físicos, tiros a la canasta y jugadas dinámicas de práctica—.

El trabajo abarcó la captura completa de imágenes en campo, la selección musical rítmica y una edición enfocada en transmitir la energía, intensidad y preparación del plantel campeón en su camino hacia la nueva división nacional.`,
          EN: `Promotional video of agile rhythm and dynamic aesthetic developed to announce the preseason and the return to the courts of Club Parque Sur for the National Tournament of Ascent (TNA).

The piece combines high-impact typographic plates with training sequences in the stadium —physical exercises, shots at the basket and dynamic practice plays—.

The work covered the complete capture of images in the field, the rhythmic musical selection and an editing focused on transmitting the energy, intensity and preparation of the champion squad on its way to the new national division.`
        }
      },
      {
        id: 'media-ex-4',
        title: { ES: 'Vía pública', EN: 'Digital Billboard' },
        video: '/assets/img/Multicosas.mp4',
        likes: 412,
        commentsCount: 78,
        shares: 130,
        description: {
          ES: `Edición y animación de video publicitario adaptado para pantallas digitales en la vía pública (DOOH / Mupi).

El proyecto se concibió específicamente para captar la atención de peatones y conductores en movimiento, priorizando un ritmo de montaje ágil, transiciones dinámicas y una paleta de colores de alto contraste visual.

La pieza jerarquiza las promociones clave y la variedad de productos de librería y bazar mediante tipografías kinetic de rápida lectura, logrando transmitir la propuesta de valor comercial en un formato corto, memorable y de alto impacto urbano.`,
          EN: `Editing and animation of advertising video adapted for digital screens in public spaces (DOOH / Mupi).

The project was conceived specifically to capture the attention of pedestrians and drivers in motion, prioritizing a fast-paced editing rhythm, dynamic transitions, and a high-contrast color palette.

The piece emphasizes key promotions and the variety of stationery and bazaar products through fast-reading kinetic typography, effectively communicating the commercial value proposition in a short, memorable, and high-impact urban format.`
        }
      }
    ]
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
  age: 44,
  phrase: { ES: '"Crear o reventar"', EN: '"Create or Burst"' },
  avatar: perfilImg,
  behance: 'https://www.behance.net/martinmonzon3',
  linkedin: 'https://www.linkedin.com/in/dmmonzon/',
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
    contactForm: 'Formulario de contacto',
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
    contactForm: 'Contact form',
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

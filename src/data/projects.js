export const projects = [
  {
    id: 'piliprint',
    slug: 'piliprint',
    number: '001',
    title: 'PiliPrint',
    shortTitle: 'PiliPrint',
    description:
      'A unified printing-business management ecosystem covering operational modules such as POS, inventory, HRMS, and finance/accounting workflows.',
    category: 'Business Management System',
    year: '2026',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Java'],
    liveUrl: 'https://piliprint-system.duckdns.org/piliprint_system/pos/login',
    featured: true,
    preview: {
      image: '/projects/previews/piliprint.webp',
      variant: 'piliprint',
      alt: 'PiliPrint POS printing interface',
      width: 1535,
      height: 730,
      path: '/projects/previews/piliprint.webp',
    },
    caseStudy: {
      context:
        'PiliPrint was designed as a unified system for managing multiple operational areas of a printing business instead of treating those functions as isolated systems.',
      solution:
        'A modular business-management ecosystem separates major operational functions into dedicated modules while allowing them to participate in shared workflows.',
      features: [
        {
          number: '01',
          title: 'Point of Sale',
          description: 'Point-of-sale workflows are one of the operational areas represented in PiliPrint.',
        },
        {
          number: '02',
          title: 'Inventory',
          description: 'Inventory management is included as an operational module.',
        },
        {
          number: '03',
          title: 'Human Resources / HRMS',
          description: 'Human resources workflows are included in the system scope.',
        },
        {
          number: '04',
          title: 'Finance / Accounting',
          description: 'Finance and accounting workflows are represented in the ecosystem.',
        },
      ],
      architecture: {
        summary:
          'The known structure includes shared/core system concepts alongside the operational modules.',
        groups: [
          { label: 'Core', items: ['Shared / Core concepts'] },
          { label: 'Operational modules', items: ['POS', 'Inventory', 'HRMS', 'Finance / Accounting'] },
          { label: 'Technologies', items: ['PHP', 'MySQL', 'JavaScript', 'Java'] },
        ],
      },
      learnings: [],
    },
    media: [],
  },
  {
    id: 'school-copy-center',
    slug: 'school-copy-center',
    number: '002',
    title: 'LAN-Based School Copy Center Portal',
    shortTitle: 'School Copy Center',
    description:
      'A LAN-based school copy center portal designed to organize document printing and photocopy requests without relying on internet-based messaging platforms.',
    category: 'LAN-Based Web Application',
    year: '2026',
    stack: ['Vue 3', 'Vite', 'Tailwind CSS', 'PHP', 'MySQL'],
    featured: true,
    preview: {
      image: '/projects/previews/school-copy-center.webp',
      variant: 'school-copy-center',
      alt: 'LAN-Based School Copy Center Portal new order interface',
      width: 1535,
      height: 732,
      path: '/projects/previews/school-copy-center.webp',
    },
    caseStudy: {
      context:
        'The project was designed to improve how document-printing and photocopy requests are organized in a school copy-center workflow. It provides an alternative to relying entirely on internet-based communication such as messaging applications or email, for users connected to the same local network.',
      solution:
        'A browser-based local-network portal lets students submit document-printing or photocopy requests and lets attendants manage incoming jobs.',
      features: [
        { number: '01', title: 'Account Login', description: 'Account login is part of the portal workflow.' },
        { number: '02', title: 'Document Printing Requests', description: 'Submit document-printing requests through the portal.' },
        { number: '03', title: 'Photocopy Requests', description: 'Submit photocopy requests through the portal.' },
        { number: '04', title: 'Multiple File Configurations', description: 'Configure multiple files as part of a request.' },
        { number: '05', title: 'Cash at Counter', description: 'Cash at the counter is included in the listed workflow.' },
        { number: '06', title: 'Job Order Number', description: 'Requests use a job order number.' },
        { number: '07', title: 'Attendant Queue', description: 'Attendants manage incoming jobs through a queue.' },
        { number: '08', title: 'Order Status Progression', description: 'Orders progress through statuses.' },
      ],
      architecture: {
        summary:
          'The web application is accessible to devices connected to the same Local Area Network.',
        groups: [
          { label: 'Frontend', items: ['Vue 3', 'Vite', 'Tailwind CSS'] },
          { label: 'Backend', items: ['PHP'] },
          { label: 'Database', items: ['MySQL'] },
          { label: 'Network', items: ['Local Area Network'] },
        ],
      },
      learnings: [],
    },
    media: [],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

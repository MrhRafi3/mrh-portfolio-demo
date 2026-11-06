/**
 * Projects portfolio data for Mrh Rafi
 * Genuine project showcases, screenshots, architectural highlights, and features.
 */

export const CATEGORIES = [
  'All',
  'Mobile Apps',
  'Flutter',
  'UI / UX',
  'Utility & Finance',
]

export const PROJECTS = [
  {
    id: 'clocky',
    number: '01',
    title: 'Clocky',
    category: 'Utility & Finance',
    tag: 'FLUTTER MOBILE APP',
    year: '2025–2026',
    featured: true,
    thumbnail: '/images/clocky/screen-1.png',
    tagline: 'Precision horological utility with glowing analog aesthetics',
    description:
      'A tactile Flutter timekeeping application combining a glowing analog and digital World Clock with quick multi-city timezone selection, customizable alarms, and a precision circular stopwatch.',
    techStack: ['Flutter', 'Dart', 'Custom Canvas UI', 'Material 3', 'State Management'],
    role: 'Lead Mobile Developer — UI Architecture & Canvas Implementation',
    highlights: [
      'Engineered a high-contrast World Clock home screen pairing a glowing analog dial with a live digital readout and active city indicator.',
      'Integrated a searchable timezone bottom sheet with UTC offsets (Dhaka, London, New York, Dubai, Tokyo, Singapore).',
      'Developed flexible alarm scheduling with individual repeat-day toggles and a circular stopwatch with lap tracking.',
    ],
    features: [
      { title: 'World Clock Dial', detail: 'Analog dial rendered on custom Canvas alongside high-precision digital clock readout.' },
      { title: 'Multi-City Offsets', detail: 'Quick city search modal with instantaneous local time calculation.' },
      { title: 'Alarm Scheduler', detail: 'Custom repeat cycles, label annotations, and clean toggle states.' },
      { title: 'Lap Stopwatch', detail: 'Circular progress visualization with split-second lap metrics.' },
    ],
    screenshots: [
      {
        src: '/images/clocky/screen-1.png',
        title: 'World Clock Screen',
        caption: 'High-contrast glowing analog face, digital readout, and active Dhaka timezone.',
      },
      {
        src: '/images/clocky/screen-2.png',
        title: 'Time Zone Selector',
        caption: 'Searchable bottom sheet with international timezone offsets.',
      },
      {
        src: '/images/clocky/screen-3.png',
        title: 'Alarm Manager',
        caption: 'Alarm list with quick toggle pills and scheduled morning alerts.',
      },
      {
        src: '/images/clocky/screen-4.png',
        title: 'Edit Alarm Modal',
        caption: 'Time picker with M-T-W-T-F-S-S repeat day chips.',
      },
      {
        src: '/images/clocky/screen-5.png',
        title: 'Precision Stopwatch',
        caption: 'Circular timer ring with split laps and responsive control buttons.',
      },
    ],
    githubUrl: null,
    statusNote: 'Dedicated repository being prepared for open-source release.',
  },
  {
    id: 'expify-beta',
    number: '02',
    title: 'Expify Beta',
    category: 'Utility & Finance',
    tag: 'PERSONAL FINANCE',
    year: '2025–2026',
    featured: true,
    thumbnail: '/images/expify/screen-1.png',
    tagline: 'Personal cashflow and project budget tracking in BDT (৳)',
    description:
      'An expense tracker mobile application built with Flutter that gives users an instant overview of their total balance in BDT (৳), income versus expenses, dedicated project budgets, and visual financial reports.',
    techStack: ['Flutter', 'Dart', 'Data Visualization', 'Local Storage', 'Authentication'],
    role: 'Flutter App Developer — Full Mobile Architecture & UX',
    highlights: [
      'Built a dashboard featuring a prominent Total Balance card (BDT ৳) with live Income/Expense summaries and recent transactions feed.',
      'Implemented dedicated Project Budget tracking with spent vs. remaining progress bars and goal limits.',
      'Designed visual financial reports with interactive Income vs. Expense donut charts and 95% savings rate indicators.',
    ],
    features: [
      { title: 'Cashflow Overview', detail: 'Instant net balance calculation with monthly income and expense metrics.' },
      { title: 'Project Budgets', detail: 'Allocate budgets to specific initiatives (Food, Travel, Tech) with percentage bars.' },
      { title: 'Visual Analytics', detail: 'Donut chart breakdown of spending categories and savings ratios.' },
      { title: 'Quick Transaction Entry', detail: 'Category icon picker, expense/income switch, and instant balance update.' },
    ],
    screenshots: [
      {
        src: '/images/expify/screen-1.png',
        title: 'Home Dashboard',
        caption: 'Total Balance card (৳9,450.00), quick income/expense summaries, and recent feed.',
      },
      {
        src: '/images/expify/screen-2.png',
        title: 'Projects & Budgets',
        caption: 'Active project budget meters showing percentage spent and remaining.',
      },
      {
        src: '/images/expify/screen-3.png',
        title: 'Financial Reports',
        caption: 'Income vs. Expense ratio donut chart and savings rate insights.',
      },
      {
        src: '/images/expify/screen-4.png',
        title: 'App Settings',
        caption: 'Preferences, dark mode toggle, data export, and user profile management.',
      },
      {
        src: '/images/expify/screen-5.png',
        title: 'Add Transaction',
        caption: 'Intuitive amount keypad, category selector chips, and note input.',
      },
      {
        src: '/images/expify/screen-6.png',
        title: 'Project Detail View',
        caption: 'In-depth budget breakdown for specific expense categories.',
      },
    ],
    githubUrl: null,
    statusNote: 'Beta testing in progress; repository access coming soon.',
  },
  {
    id: 'nomnom',
    number: '03',
    title: 'NomNom',
    category: 'Mobile Apps',
    tag: 'FOOD DELIVERY & DISCOVERY',
    year: '2025–2026',
    featured: true,
    thumbnail: '/images/NomNom/home.png',
    tagline: 'Appetizing food ordering flow with real-time dispatch tracking',
    description:
      'A contemporary food delivery and restaurant discovery mobile application built with Flutter. Features appetizing visuals, real-time menu exploration, dish customization, intuitive cart checkout, and simulated live order tracking.',
    techStack: ['Flutter', 'Dart', 'State Management', 'Cart Architecture', 'Interactive Maps'],
    role: 'Flutter App Developer — Mobile UI Design & Component Engineering',
    highlights: [
      'Designed an engaging food discovery home feed with category pills, curated trending restaurants, and quick search filters.',
      'Engineered an item customizer sheet supporting size choices, add-on toppings, and real-time order subtotal calculations.',
      'Built an end-to-end checkout flow with voucher discounts and step-by-step simulated live order dispatch tracking.',
    ],
    features: [
      { title: 'Curated Food Feed', detail: 'Daily cravings banner, category pills, and best-seller recommendations.' },
      { title: 'Dish Customizer', detail: 'Dynamic portion sizing, extra toppings, and live price adjustment.' },
      { title: 'Cart & Vouchers', detail: 'Itemized summary, delivery address selection, and promo code redemption.' },
      { title: 'Live Order Tracker', detail: '18-minute arrival countdown, courier route map, and multi-stage timeline.' },
    ],
    screenshots: [
      {
        src: '/images/NomNom/home.png',
        title: 'Home Discovery Feed',
        caption: 'Mirpur-6 delivery address, 25% off promo banner, and cuisine categories.',
      },
      {
        src: '/images/NomNom/explore-menu.png',
        title: 'Explore & Menus',
        caption: 'Restaurant listings with customer ratings, prep time, and dish cards.',
      },
      {
        src: '/images/NomNom/food.png',
        title: 'Dish Customizer Sheet',
        caption: 'Portion choices, toppings, spice level selector, and live price update.',
      },
      {
        src: '/images/NomNom/cart.png',
        title: 'Cart & Checkout',
        caption: 'Itemized checkout summary, voucher field, and proceed to payment button.',
      },
      {
        src: '/images/NomNom/order-tracking.png',
        title: 'Live Order Tracker',
        caption: 'Courier route map, live delivery stages, and estimated arrival timer.',
      },
      {
        src: '/images/NomNom/splash-interface.png',
        title: 'Brand Splash',
        caption: 'Emblem splash screen with "Crave It · Tap It · Taste It" slogan.',
      },
    ],
    githubUrl: null,
    statusNote: 'Active development phase; mobile build in final QA.',
  },
  {
    id: 'alchemy',
    number: '04',
    title: 'Alchemy',
    category: 'Flutter',
    tag: 'EDUCATIONAL & GAMIFICATION',
    year: '2025',
    featured: false,
    thumbnail: '/images/expify/screen-3.png',
    tagline: 'Interactive elemental discovery and periodic exploration',
    description:
      'An educational gamification Flutter application exploring chemistry, element synthesis, and discovery. Features intuitive element combination algorithms, periodic reference cards, discovery milestones, and sleek dark-mode UI.',
    techStack: ['Flutter', 'Dart', 'Provider & Riverpod', 'Custom Animations', 'OOP Logic'],
    role: 'Flutter Developer — Game Logic & UI State Engineering',
    highlights: [
      'Constructed modular element discovery graph with deterministic recipe combinations.',
      'Engineered responsive periodic table visualizer and interactive element details.',
      'Integrated user progression tracking, achievement rewards, and offline local state.',
    ],
    features: [
      { title: 'Element Discovery', detail: 'Synthesize complex elements through intuitive drag-and-combine interactions.' },
      { title: 'Periodic Database', detail: 'Comprehensive atomic properties, historical data, and classification filters.' },
      { title: 'Collection Progress', detail: 'Track unlocked discoveries across air, earth, fire, and water branches.' },
    ],
    screenshots: [],
    githubUrl: 'https://github.com/mrhrafi3/alchemy',
    statusNote: 'Source code and documentation available on GitHub.',
  },
  {
    id: 'aevique',
    number: '05',
    title: 'AEVIQUE',
    category: 'UI / UX',
    tag: 'LUXURY CREATIVE SUITE',
    year: '2026',
    featured: false,
    thumbnail: '/images/clocky/screen-1.png',
    tagline: 'High-end mobile photo and portrait editing application',
    description:
      'A luxury mobile photography editing suite built with Flutter. Provides studio-grade tone curves, photographic presets, bilateral skin smoothing, and clean gesture-driven canvas inspection.',
    techStack: ['Flutter', 'Dart', 'C++ / FFI Core', 'Image Processing', 'Custom Shaders'],
    role: 'Mobile UI & Graphics Engineer — FFI Bridge & Interface Architecture',
    highlights: [
      'Designed a minimalist, luxury dark-theme editing canvas with non-destructive state history.',
      'Built real-time interactive tone curve controls and responsive preset preview strips.',
      'Architected clean separation of presentation UI and low-level pixel manipulation.',
    ],
    features: [
      { title: 'Tone Curve Engine', detail: 'Multi-point cubic spline curve editing for RGB and luminance channels.' },
      { title: 'Portrait Retouching', detail: 'Bilateral filtering and skin-tone classification for natural smoothing.' },
      { title: 'Non-Destructive History', detail: 'Instant undo/redo stack preserving uncompressed edit matrices.' },
    ],
    screenshots: [],
    githubUrl: null,
    statusNote: 'In active engineering and native C++ FFI integration.',
  },
]

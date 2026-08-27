export const navLinks = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'Destinations', href: '#destinations' },
  { id: 3, label: 'Packages', href: '#packages' },
  { id: 4, label: 'Testimonials', href: '#testimonials' },
  { id: 5, label: 'Contact', href: '#contact' },
];

export const destinations = [
  {
    id: 'd1',
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 899,
    duration: '5 Days',
    description: 'Whitewashed cliffside villages overlooking the deep blue Aegean Sea.',
  },
  {
    id: 'd2',
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 1199,
    duration: '7 Days',
    description: 'Ancient temples, bamboo groves, and traditional tea houses.',
  },
  {
    id: 'd3',
    name: 'Banff, Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 1050,
    duration: '6 Days',
    description: 'Turquoise glacial lakes framed by the Canadian Rockies.',
  },
  {
    id: 'd4',
    name: 'Marrakech, Morocco',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    price: 749,
    duration: '4 Days',
    description: 'Vibrant souks, desert dunes, and centuries-old palaces.',
  },
  {
    id: 'd5',
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    price: 699,
    duration: '6 Days',
    description: 'Lush rice terraces, sacred temples, and world-class surf breaks.',
  },
  {
    id: 'd6',
    name: 'Reykjavik, Iceland',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 1350,
    duration: '5 Days',
    description: 'Northern lights, geothermal springs, and dramatic waterfalls.',
  },
];

export const packages = [
  {
    id: 'p1',
    title: 'Explorer',
    price: 499,
    tagline: 'Best for solo travelers',
    features: ['3-star accommodation', 'Airport transfers', 'City walking tour', 'Local guide (2 days)'],
    highlighted: false,
  },
  {
    id: 'p2',
    title: 'Adventurer',
    price: 899,
    tagline: 'Most popular package',
    features: ['4-star accommodation', 'Airport transfers', 'Guided excursions', 'Local guide (5 days)', 'Daily breakfast'],
    highlighted: true,
  },
  {
    id: 'p3',
    title: 'Luxury',
    price: 1599,
    tagline: 'Best for premium travel',
    features: ['5-star resort stay', 'Private transfers', 'Private guide', 'All meals included', 'Spa access'],
    highlighted: false,
  },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Sara Ahmed',
    location: 'Lahore, Pakistan',
    avatar: 'https://i.pravatar.cc/100?img=47',
    quote: 'Every detail of our Bali trip was handled perfectly. The local guides made all the difference.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'James Carter',
    location: 'London, UK',
    avatar: 'https://i.pravatar.cc/100?img=12',
    quote: 'Banff exceeded every expectation. Smooth booking process and a truly unforgettable itinerary.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Aiko Tanaka',
    location: 'Osaka, Japan',
    avatar: 'https://i.pravatar.cc/100?img=32',
    quote: 'The Morocco package balanced adventure and comfort perfectly. Would book again in a heartbeat.',
    rating: 4,
  },
];

export const stats = [
  { id: 's1', label: 'Happy Travelers', value: '12K+' },
  { id: 's2', label: 'Destinations', value: '48' },
  { id: 's3', label: 'Tour Guides', value: '120+' },
  { id: 's4', label: 'Years of Service', value: '9' },
];

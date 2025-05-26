import { Property } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxurious Beachfront Villa',
    location: 'Malibu, California',
    price: 450,
    rating: 4.9,
    reviewCount: 127,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      superhost: true
    },
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Parking', 'Ocean View', 'Hot Tub'],
    description: 'Experience luxury living in this stunning beachfront villa with panoramic ocean views.',
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    type: 'Villa'
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 280,
    rating: 4.8,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      superhost: false
    },
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Parking', 'Mountain View'],
    description: 'Escape to this charming mountain cabin surrounded by pristine nature.',
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    type: 'Cabin'
  },
  {
    id: '3',
    title: 'Modern City Loft',
    location: 'New York, NY',
    price: 320,
    rating: 4.7,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      superhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Gym', 'City View', 'Workspace'],
    description: 'Stylish loft in the heart of Manhattan with modern amenities.',
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    type: 'Loft'
  },
  {
    id: '4',
    title: 'Charming Countryside Cottage',
    location: 'Cotswolds, England',
    price: 180,
    rating: 4.9,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      superhost: true
    },
    amenities: ['WiFi', 'Garden', 'Kitchen', 'Parking', 'Countryside View'],
    description: 'Traditional English cottage with beautiful gardens and peaceful surroundings.',
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    type: 'Cottage'
  },
  {
    id: '5',
    title: 'Tropical Paradise Bungalow',
    location: 'Bali, Indonesia',
    price: 120,
    rating: 4.8,
    reviewCount: 94,
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Ayu Sari',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      superhost: false
    },
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Garden', 'Tropical View'],
    description: 'Relax in this beautiful bungalow surrounded by lush tropical gardens.',
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    type: 'Bungalow'
  },
  {
    id: '6',
    title: 'Desert Oasis Villa',
    location: 'Scottsdale, Arizona',
    price: 380,
    rating: 4.6,
    reviewCount: 72,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Carlos Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      superhost: true
    },
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Parking', 'Desert View', 'Spa'],
    description: 'Modern desert villa with stunning architecture and resort-style amenities.',
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    type: 'Villa'
  }
];
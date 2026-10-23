import type { LucideIcon } from 'lucide-react';
import magic3 from '../../images/Magic 3.jpeg';
import magic4 from '../../images/Magic 4.jpeg';
import magic5 from '../../images/Magic 5.jpeg';
import magic7 from '../../images/Magic 7.jpeg';
import magic8 from '../../images/Magic 18.jpeg';
import magic10 from '../../images/Magic 10.jpeg';
import magic12 from '../../images/Magic 12.jpeg';
import magic13 from '../../images/Magic 17.jpeg';
import magic14 from '../../images/Magic 14.jpeg';
import {
  Scissors,
  User,
  Sparkles,
  Wind,
  Layers,
  Waves,
  Palette,
  Brush,
  Baby,
  Star,
  Crown,
} from 'lucide-react';

// =================================================================
//  EDITABLE BUSINESS DATA
//  Update the values below to customize the website for your shop.
// =================================================================

export const business = {
  name: 'Magic Fingers Barbershop',
  shortName: 'Magic Fingers',
  tagline: 'Look Sharp. Feel Confident.',
  description:
    'We do all kinds and types of hairstyles. From classic cuts to waves, curies, and braids — premium grooming with precision and attention to detail.',
  address: 'Upper Savage Square, Freetown',
  phone: '+232 73 134 745',
  whatsapp: '23273134745',
  instagram: 'https://instagram.com/magicfingersbarbershop',
  facebook: 'https://facebook.com/magicfingersbarbershop',
  email: 'hello@magicfingersbarbershop.com',
  currency: 'Le',
  mapsQuery: 'Freetown, Sierra Leone',
  hours: [
    { day: 'Monday', time: '8:00 AM – 8:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 8:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 8:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 8:00 PM' },
    { day: 'Friday', time: '8:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
};

export type Service = {
  name: string;
  description: string;
  price: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    name: 'Children',
    description: 'A neat, stylish haircut for younger customers.',
    price: 'Le 40',
    icon: Baby,
  },
  {
    name: 'Normal Barbs',
    description: 'A clean, classic barbing tailored to your personal style.',
    price: 'Le 60',
    icon: Scissors,
  },
  {
    name: 'Celebrity Cut',
    description: 'A standout, head-turning cut inspired by your favourite look.',
    price: 'Le 70',
    icon: Star,
  },
  {
    name: 'Woman Cut',
    description: 'A professional haircut styled to suit every woman.',
    price: 'Le 60',
    icon: User,
  },
  {
    name: 'Men Barb & Ruff',
    description: 'A fresh barbing with ruff styling for a sharp, clean finish.',
    price: 'Le 70',
    icon: Scissors,
  },
  {
    name: 'Women Barb & Ruff',
    description: 'Complete barbing and ruff styling for a polished look.',
    price: 'Le 80',
    icon: Brush,
  },
  {
    name: 'Taper Fade',
    description: 'A smooth, precise taper fade with a clean and natural finish.',
    price: 'Le 100',
    icon: Wind,
  },
  {
    name: 'Men Braids & Cut',
    description: 'Expertly styled braids paired with a fresh, clean cut.',
    price: 'Le 100',
    icon: Layers,
  },
  {
    name: 'Men Sporting Wave',
    description: 'Sharp, well-defined waves crafted with precision.',
    price: 'Le 150',
    icon: Waves,
  },
  {
    name: 'Women Wave',
    description: 'Beautiful, defined waves styled to perfection.',
    price: 'Le 150',
    icon: Waves,
  },
  {
    name: 'Men Curies',
    description: 'Neatly shaped curies for a bold, modern statement.',
    price: 'Le 150',
    icon: Palette,
  },
  {
    name: 'Women Curies',
    description: 'Elegant curies styled with care and attention to detail.',
    price: 'Le 200',
    icon: Crown,
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  span: 'tall' | 'wide' | 'normal';
};

export const galleryImages: GalleryImage[] = [
  {
    src: magic4,
    alt: 'Stylish haircut profile view in a barbershop',
    label: 'Taper Fade',
    span: 'tall',
  },
  {
    src: magic3,
    alt: 'Fresh sharp fade viewed from behind',
    label: 'Sharp Fade',
    span: 'wide',
  },
  {
    src: magic14,
    alt: "Close-up of a man's stylish haircut and beard",
    label: 'Celebrity Cut',
    span: 'normal',
  },
  {
    src: magic12,
    alt: 'Barber performing a stylish haircut in a modern barbershop',
    label: 'Normal Barbs',
    span: 'tall',
  },
  {
    src: magic13,
    alt: 'Barber professionally trims a beard',
    label: 'Barb & Ruff',
    span: 'wide',
  },
  {
    src: magic8,
    alt: 'Portrait of a man with an afro hairstyle',
    label: 'Curies',
    span: 'tall',
  },
  {
    src: magic10,
    alt: 'Close-up of a man getting a haircut with clippers',
    label: 'Sporting Wave',
    span: 'normal',
  },
  {
    src: magic5,
    alt: 'Young man receiving a fashionable haircut at a barbershop',
    label: 'Braids & Cut',
    span: 'tall',
  },
  {
    src: magic7,
    alt: 'Close-up portrait of a young man with a stylish haircut',
    label: 'Modern Style',
    span: 'wide',
  },
];

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const highlights: Highlight[] = [
  {
    title: 'Attention to Detail',
    description: 'Every line, every blend, every finish is crafted with care.',
    icon: Scissors,
  },
  {
    title: 'Quality Service',
    description: 'Professional grooming that meets the highest standards.',
    icon: Sparkles,
  },
  {
    title: 'Your Style, Our Craft',
    description: 'We bring out the style that reflects your personality.',
    icon: User,
  },
];

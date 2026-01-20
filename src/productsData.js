// Import dress images from assets
import dress1 from './assets/dress.png';
import dress2 from './assets/dress_2.png';
import dress3 from './assets/dress_3.png';
import dress4 from './assets/dress_4.png';
import dress5 from './assets/dress_5.png';

// Shared product data for Collection and Product Detail pages
export const products = [
  // User-provided products
  {
    id: 1,
    name: 'Product Set B-18',
    price: 2499,
    comparePrice: 2999,
    image: dress1,
    category: 'all',
    rating: 4.5,
    reviewCount: 124,
    description: 'Premium product set featuring elegant design and exceptional quality. Perfect for daily use and special occasions.',
    images: [
      dress1
    ]
  },
  {
    id: 2,
    name: 'Product Set B-47',
    price: 2799,
    comparePrice: 3299,
    image: dress2,
    category: 'all',
    rating: 4.8,
    reviewCount: 89,
    description: 'Exquisite collection with modern aesthetics and superior craftsmanship. Ideal for gifting and personal use.',
    images: [
      dress2
    ]
  },
  {
    id: 3,
    name: 'Premium Collection',
    price: 3499,
    comparePrice: 3999,
    image: dress3,
    category: 'all',
    rating: 4.2,
    reviewCount: 156,
    description: 'Luxurious premium collection featuring the finest materials and sophisticated design. A statement piece for your collection.',
    images: [
      dress3
    ]
  },
  {
    id: 4,
    name: 'Product Set B-38',
    price: 2299,
    comparePrice: 2799,
    image: dress2,
    category: 'all',
    rating: 4.6,
    reviewCount: 203,
    description: 'Stylish and versatile product set with contemporary design. Perfect combination of functionality and elegance.',
    images: [
      dress2
    ]
  },
  {
    id: 5,
    name: 'Luxury Set',
    price: 3999,
    comparePrice: 4499,
    image: dress5,
    category: 'all',
    rating: 4.9,
    reviewCount: 312,
    description: 'Ultra-premium luxury set with exclusive design and premium materials. The epitome of sophistication and class.',
    images: [
      dress5
    ]
  },
  {
    id: 6,
    name: 'Product Set B-5',
    price: 1999,
    comparePrice: 2499,
    image: dress1,
    category: 'all',
    rating: 4.4,
    reviewCount: 178,
    description: 'Essential product set with practical design and reliable quality. Great value for everyday use.',
    images: [
      dress1
    ]
  },
  {
    id: 7,
    name: 'Exclusive Collection',
    price: 3299,
    comparePrice: 3799,
    image: dress2,
    category: 'all',
    rating: 4.7,
    reviewCount: 267,
    description: 'Exclusive collection with unique design elements. Limited edition pieces that stand out from the crowd.',
    images: [
      dress2
    ]
  },
  {
    id: 8,
    name: 'Premium Set',
    price: 3799,
    comparePrice: 4299,
    image: dress3,
    category: 'all',
    rating: 4.3,
    reviewCount: 145,
    description: 'Sophisticated premium set with elegant design and exceptional attention to detail. Perfect for special occasions.',
    images: [
      dress3
    ]
  },
  {
    id: 9,
    name: 'Product Set B-12',
    price: 2599,
    comparePrice: 3099,
    image: dress4,
    category: 'all',
    rating: 4.5,
    reviewCount: 198,
    description: 'Versatile product set with timeless design and superior quality. Suitable for all ages and preferences.',
    images: [
      dress4
    ]
  },
  {
    id: 10,
    name: 'Product Set B-34',
    price: 2899,
    comparePrice: 3399,
    image: dress5,
    category: 'all',
    rating: 4.6,
    reviewCount: 221,
    description: 'Classic design meets modern functionality in this exceptional product set. A perfect blend of style and utility.',
    images: [
      dress5
    ]
  },
  // Women's dress products
  {
    id: 11,
    name: 'Floral Summer Dress',
    price: 1899,
    comparePrice: 2299,
    image: dress1,
    category: 'all',
    rating: 4.7,
    reviewCount: 342,
    description: 'Beautiful floral summer dress made from breathable fabric. Perfect for warm weather occasions and casual outings.',
    images: [
      dress1
    ]
  },
  {
    id: 12,
    name: 'Elegant Maxi Dress',
    price: 2499,
    comparePrice: 2999,
    image: dress2,
    category: 'all',
    rating: 4.8,
    reviewCount: 456,
    description: 'Elegant maxi dress with flowing silhouette and sophisticated design. Ideal for evening events and special occasions.',
    images: [
      dress2
    ]
  },
  {
    id: 13,
    name: 'Casual Midi Dress',
    price: 1599,
    comparePrice: 1999,
    image: dress3,
    category: 'all',
    rating: 4.5,
    reviewCount: 289,
    description: 'Comfortable casual midi dress perfect for everyday wear. Versatile style that can be dressed up or down.',
    images: [
      dress3
    ]
  },
  {
    id: 14,
    name: 'Formal Evening Dress',
    price: 3499,
    comparePrice: 3999,
    image: dress4,
    category: 'all',
    rating: 4.9,
    reviewCount: 523,
    description: 'Stunning formal evening dress designed for special events. Features elegant detailing and premium fabric for a glamorous look.',
    images: [
      dress4
    ]
  },
  {
    id: 15,
    name: 'Cotton A-Line Dress',
    price: 1299,
    comparePrice: 1699,
    image: dress5,
    category: 'all',
    rating: 4.4,
    reviewCount: 234,
    description: 'Comfortable cotton A-line dress with flattering fit. Perfect for casual outings and warm summer days.',
    images: [
      dress5
    ]
  },
  {
    id: 16,
    name: 'Chic Wrap Dress',
    price: 2199,
    comparePrice: 2699,
    image: dress1,
    category: 'all',
    rating: 4.6,
    reviewCount: 378,
    description: 'Chic wrap dress with adjustable fit and modern silhouette. Flatters all body types with its versatile design.',
    images: [
      dress1
    ]
  },
  {
    id: 17,
    name: 'Bohemian Style Dress',
    price: 1799,
    comparePrice: 2199,
    image: dress2,
    category: 'all',
    rating: 4.3,
    reviewCount: 267,
    description: 'Free-spirited bohemian style dress with flowing fabric and artistic patterns. Perfect for festivals and casual events.',
    images: [
      dress2
    ]
  },
  {
    id: 18,
    name: 'Classic Black Dress',
    price: 2699,
    comparePrice: 3199,
    image: dress3,
    category: 'all',
    rating: 4.8,
    reviewCount: 412,
    description: 'Timeless classic black dress that never goes out of style. Versatile piece perfect for any occasion.',
    images: [
      dress3
    ]
  },
  {
    id: 19,
    name: 'Printed Sundress',
    price: 1699,
    comparePrice: 2099,
    image: dress4,
    category: 'all',
    rating: 4.5,
    reviewCount: 301,
    description: 'Vibrant printed sundress with cheerful patterns. Lightweight and comfortable for summer wear.',
    images: [
      dress4
    ]
  },
  {
    id: 20,
    name: 'Designer Cocktail Dress',
    price: 4299,
    comparePrice: 4999,
    image: dress5,
    category: 'all',
    rating: 4.9,
    reviewCount: 489,
    description: 'Exclusive designer cocktail dress with exquisite detailing and premium finish. Make a statement at any event.',
    images: [
      dress5
    ]
  }
];

// Default product (for Blue Freesia)
export const defaultProduct = {
  id: 0,
  name: 'Blue Freesia',
  price: 299,
  comparePrice: 349,
  image: 'https://baboski.com/cdn/shop/files/2_f7707208-7963-44e1-9377-7dea84bfb781.png?v=1752147555&width=2890',
  category: 'hand-cream',
  rating: 4.2,
  reviewCount: 235,
  description: 'A luxurious hand cream for ultimate hydration. The blend of encapsulated alpha-arbutin, jojoba oil, and mango seed butter deeply moisturises, reduces hyperpigmentation, and supports the skin barrier, leaving hands soft, supple, and irresistibly smooth.',
  images: [
    'https://baboski.com/cdn/shop/files/2_f7707208-7963-44e1-9377-7dea84bfb781.png?v=1752147555&width=2890',
    'https://baboski.com/cdn/shop/files/3_b67926e1-10d8-4590-bf11-57e0c74e5a41.png?v=1752147555&width=2890',
    'https://baboski.com/cdn/shop/files/1_0b5096e5-c03f-4e70-b135-b6f0a3b453ad.png?v=1752147555&width=2890'
  ]
};


import { Product } from '../types';

// This will be replaced by the admin context products
export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Mini',
    category: 'Vanities',
    price: 799,
    description: 'products.items.modern_vanity.description',
    features: [
      'products.items.modern_vanity.features.waterproof',
      'products.items.modern_vanity.features.wall_mounted',
      'products.items.modern_vanity.features.soft_close',
      'products.items.modern_vanity.features.pre_drilled',
      'products.items.modern_vanity.features.led_lighting'
    ],
    colors: [
      { name: 'Matte White', value: '#ffffff' },
      { name: 'Matte Black', value: '#202020' },
      { name: 'Oak Finish', value: '#D4B483' }
    ],
    dimensions: {
      width: 43,
      height: 51,
      depth: 24,
      weight: 35
    },
    specifications: {
      material: 'Waterproof PVC',
      finish: 'Matte',
      handleType: 'Push-to-open',
      hingeType: 'Soft-close',
      mountingType: 'Wall-mounted'
    },
    imageUrl: 'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/1.png',
    additionalImages: [
      'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/2.png',
      'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/3.png',
      'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/4.png'
    ],
    inStock: true,
    slug: 'mini',
    main_image_url: 'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/1.png',
    additional_images: [
      'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/2.png',
      'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/3.png',
      'https://raw.githubusercontent.com/darkotodorovski/Strana/refs/heads/main/Mini/4.png'
    ],
    in_stock: true,
    is_published: true,
    sort_order: 1,
    created_by: null,
    updated_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Silver',
    category: 'Storage',
    price: 449,
    description: 'products.items.storage_cabinet.description',
    features: [
      'products.items.storage_cabinet.features.waterproof',
      'products.items.storage_cabinet.features.adjustable',
      'products.items.storage_cabinet.features.soft_close',
      'products.items.storage_cabinet.features.wall_mountable',
      'products.items.storage_cabinet.features.multiple_finishes'
    ],
    colors: [
      { name: 'Matte White', value: '#ffffff' },
      { name: 'Matte Black', value: '#202020' },
      { name: 'Walnut Finish', value: '#795C34' }
    ],
    dimensions: {
      width: 40,
      height: 160,
      depth: 35,
      weight: 25
    },
    specifications: {
      material: 'Waterproof PVC',
      finish: 'Textured',
      handleType: 'Integrated',
      hingeType: 'Soft-close',
      mountingType: 'Wall-mounted/Freestanding'
    },
    imageUrl: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
    additionalImages: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1378%20copy.jpg'
    ],
    inStock: true,
    slug: 'silver',
    main_image_url: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
    additional_images: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1378%20copy.jpg'
    ],
    in_stock: true,
    is_published: true,
    sort_order: 2,
    created_by: null,
    updated_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Classic',
    category: 'Accessories',
    price: 129,
    description: 'products.items.floating_shelf.description',
    features: [
      'products.items.floating_shelf.features.waterproof',
      'products.items.floating_shelf.features.easy_installation',
      'products.items.floating_shelf.features.hidden_mounting',
      'products.items.floating_shelf.features.high_capacity',
      'products.items.floating_shelf.features.seamless_design'
    ],
    colors: [
      { name: 'Matte White', value: '#ffffff' },
      { name: 'Matte Black', value: '#202020' },
      { name: 'Teak Effect', value: '#B68D40' }
    ],
    dimensions: {
      width: 80,
      height: 5,
      depth: 20,
      weight: 5
    },
    specifications: {
      material: 'Waterproof PVC',
      finish: 'Matte',
      handleType: 'N/A',
      hingeType: 'N/A',
      mountingType: 'Wall-mounted'
    },
    imageUrl: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg',
    additionalImages: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1297.jpg'
    ],
    inStock: true,
    slug: 'classic',
    main_image_url: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg',
    additional_images: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1297.jpg'
    ],
    in_stock: true,
    is_published: true,
    sort_order: 3,
    created_by: null,
    updated_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Lila',
    category: 'Vanities',
    price: 499,
    description: 'products.items.compact_vanity.description',
    features: [
      'products.items.compact_vanity.features.space_saving',
      'products.items.compact_vanity.features.integrated_sink',
      'products.items.compact_vanity.features.soft_close',
      'products.items.compact_vanity.features.anti_fog',
      'products.items.compact_vanity.features.waterproof'
    ],
    colors: [
      { name: 'Matte White', value: '#ffffff' },
      { name: 'Sage Green', value: '#9CAF88' },
      { name: 'Navy Blue', value: '#394C6A' }
    ],
    dimensions: {
      width: 60,
      height: 80,
      depth: 40,
      weight: 30
    },
    specifications: {
      material: 'Waterproof PVC',
      finish: 'Matte',
      handleType: 'Push-to-open',
      hingeType: 'Soft-close',
      mountingType: 'Floor-standing'
    },
    imageUrl: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1297.jpg',
    additionalImages: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg'
    ],
    inStock: false,
    slug: 'lila',
    main_image_url: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1297.jpg',
    additional_images: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg'
    ],
    in_stock: false,
    is_published: true,
    sort_order: 4,
    created_by: null,
    updated_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Style',
    category: 'Accessories',
    price: 89,
    description: 'products.items.shower_caddy.description',
    features: [
      'products.items.shower_caddy.features.rust_proof',
      'products.items.shower_caddy.features.multiple_shelves',
      'products.items.shower_caddy.features.easy_clean',
      'products.items.shower_caddy.features.no_drilling',
      'products.items.shower_caddy.features.anti_slip'
    ],
    colors: [
      { name: 'White', value: '#ffffff' },
      { name: 'Black', value: '#202020' }
    ],
    dimensions: {
      width: 30,
      height: 70,
      depth: 20,
      weight: 3
    },
    specifications: {
      material: 'Waterproof PVC with Chrome Accents',
      finish: 'Glossy',
      handleType: 'N/A',
      hingeType: 'N/A',
      mountingType: 'Corner-mounted'
    },
    imageUrl: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1378%20copy.jpg',
    additionalImages: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg'
    ],
    inStock: true,
    slug: 'style',
    main_image_url: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1378%20copy.jpg',
    additional_images: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg'
    ],
    in_stock: true,
    is_published: true,
    sort_order: 5,
    created_by: null,
    updated_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Prestige',
    category: 'Mirrors',
    price: 349,
    description: 'products.items.mirror_cabinet.description',
    features: [
      'products.items.mirror_cabinet.features.led_illumination',
      'products.items.mirror_cabinet.features.defogging',
      'products.items.mirror_cabinet.features.soft_close',
      'products.items.mirror_cabinet.features.multiple_shelves',
      'products.items.mirror_cabinet.features.waterproof'
    ],
    colors: [
      { name: 'White Frame', value: '#ffffff' },
      { name: 'Black Frame', value: '#202020' },
      { name: 'Aluminum', value: '#D0D0D0' }
    ],
    dimensions: {
      width: 80,
      height: 60,
      depth: 15,
      weight: 15
    },
    specifications: {
      material: 'Waterproof PVC Frame',
      finish: 'Mirror/Matte',
      handleType: 'Edge-grip',
      hingeType: 'Soft-close',
      mountingType: 'Wall-mounted'
    },
    imageUrl: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/flamingo%2065%20cm%20kar%C5%9F%C4%B1.jpg',
    additionalImages: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg'
    ],
    inStock: true,
    slug: 'prestige',
    main_image_url: 'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/flamingo%2065%20cm%20kar%C5%9F%C4%B1.jpg',
    additional_images: [
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1280%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1281%20copy.jpg',
      'https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/3S0A1292%20copy.jpg'
    ],
    in_stock: true,
    is_published: true,
    sort_order: 6,
    created_by: null,
    updated_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// For backward compatibility, export the initial products as default
export const products = initialProducts;

export const categories = [
  'All',
  'Vanities',
  'Storage',
  'Mirrors',
  'Accessories'
];
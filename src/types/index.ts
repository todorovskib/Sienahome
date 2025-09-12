export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  colors: Color[];
  dimensions: Dimensions;
  imageUrl: string;
  additionalImages: string[];
  inStock: boolean;
  specifications: {
    material: string;
    finish: string;
    handleType: string;
    hingeType: string;
    mountingType: string;
  };
}

export interface ProductDetails extends Product {}

export interface Color {
  name: string;
  value: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
  weight: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface NavLink {
  name: string;
  href: string;
}
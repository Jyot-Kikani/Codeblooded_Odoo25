import { Heart, Recycle, ShoppingBag, Sparkles, Star, Users } from "lucide-react";

// --- TYPE DEFINITIONS ---

export interface Product {
  id: string;
  title: string;
  description: string;
  category: "Men" | "Women" | "Kids" | "Accessories";
  size: string;
  condition: "Like New" | "Good" | "Used" | "Excellent";
  tags: string[];
  images: string[];
  uploader: string;
  points: number;
  liked?: boolean; // Optional for landing page display
}

// --- DUMMY DATA ---

export const dummyProducts: Product[] = [
  {
    id: "1",
    title: "Floral Summer Dress",
    description: "A light and breezy floral dress, perfect for summer outings. Worn only a few times and in immaculate condition. Made from 100% sustainable cotton.",
    category: "Women",
    size: "M",
    condition: "Like New",
    tags: ["floral", "summer", "dress", "sustainable"],
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop",
    ],
    uploader: "sarahstyles",
    points: 250,
    liked: false,
  },
  {
    id: "2",
    title: "Vintage Denim Jacket",
    description: "Classic vintage denim jacket with a comfortable, worn-in feel. A timeless piece that adds character to any outfit. Features original brass buttons.",
    category: "Men",
    size: "L",
    condition: "Used",
    tags: ["denim", "jacket", "vintage", "outerwear"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622332388373-c15c4973f1d8?w=800&h=600&fit=crop",
    ],
    uploader: "denimdan",
    points: 180,
    liked: true,
  },
  {
    id: "3",
    title: "Kid's Rainbow Raincoat",
    description: "A bright and cheerful raincoat to keep your little one dry. Features a soft inner lining and easy-to-use snap buttons. Perfect for puddle-jumping adventures.",
    category: "Kids",
    size: "S",
    condition: "Good",
    tags: ["raincoat", "kids", "colorful", "weatherproof"],
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589472493398-9973c9c9b5f5?w=800&h=600&fit=crop",
    ],
    uploader: "happykids",
    points: 120,
    liked: false,
  },
  {
    id: "4",
    title: "Silk Scarf Collection",
    description: "An elegant, 100% pure silk scarf with a vibrant, artistic pattern. In excellent condition, it can be styled in numerous ways to elevate any look.",
    category: "Accessories",
    size: "OS",
    condition: "Excellent",
    tags: ["silk", "scarf", "luxury", "accessory"],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&h=600&fit=crop",
    ],
    uploader: "chicfinds",
    points: 95,
    liked: false,
  },
  {
    id: "5",
    title: "Wool Winter Coat",
    description: "A high-quality, elegant wool coat to keep you warm through the coldest months. Its classic design and neutral color make it a versatile wardrobe staple.",
    category: "Women",
    size: "M",
    condition: "Like New",
    tags: ["coat", "winter", "wool", "elegant"],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572553131398-4c132227649b?w=800&h=600&fit=crop",
    ],
    uploader: "winterwardrobe",
    points: 320,
    liked: true,
  },
  {
    id: "6",
    title: "Classic Leather Sneakers",
    description: "A stylish and comfortable pair of leather sneakers, perfect for everyday wear. Kept in great condition with minimal signs of use and recently cleaned.",
    category: "Men",
    size: "42",
    condition: "Good",
    tags: ["sneakers", "casual", "footwear", "leather"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=600&fit=crop",
    ],
    uploader: "kickmaster",
    points: 150,
    liked: false,
  },
  {
    id: "7",
    title: "Designer Leather Handbag",
    description: "A stunning designer handbag made from genuine leather. This timeless piece is in excellent condition and comes with its original dust bag. A true statement accessory.",
    category: "Accessories",
    size: "OS",
    condition: "Excellent",
    tags: ["handbag", "leather", "designer", "luxury"],
    images: [
      "https://images.unsplash.com/photo-1590737141392-3b16a20070d9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop",
    ],
    uploader: "stylevault",
    points: 450,
    liked: true,
  },
  {
    id: "8",
    title: "Boy's Graphic Tee",
    description: "A fun and soft cotton graphic t-shirt for boys. The print is still vibrant and the fabric has no stains or tears. Perfect for school or play.",
    category: "Kids",
    size: "M",
    condition: "Good",
    tags: ["tshirt", "kids", "graphic", "casual"],
    images: [
      "https://images.unsplash.com/photo-1595995493201-9214734a3674?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605494028574-12967b55f69a?w=800&h=600&fit=crop"
    ],
    uploader: "kidswear_co",
    points: 40,
    liked: false,
  },
];

export const stats = [
  { icon: Users, value: "50K+", label: "Active Swappers" },
  { icon: Recycle, value: "2M+", label: "Items Exchanged" },
  { icon: Heart, value: "85%", label: "Sustainability Score" },
];

export const features = [
  {
    icon: ShoppingBag,
    title: "Direct Swaps",
    description: "Exchange items directly with other users"
  },
  {
    icon: Star,
    title: "Points System",
    description: "Earn points for items you can't swap directly"
  },
  {
    icon: Sparkles,
    title: "Quality Verified",
    description: "All items are verified for quality and authenticity"
  },
];
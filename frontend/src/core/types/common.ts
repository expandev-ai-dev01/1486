/**
 * @type Product
 * @summary Base product type for catalog items
 * @domain core
 * @category data-types
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  ingredients?: string[];
}

/**
 * @type Review
 * @summary Customer review type
 * @domain core
 * @category data-types
 */
export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

/**
 * @type CartItem
 * @summary Shopping cart item type
 * @domain core
 * @category data-types
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

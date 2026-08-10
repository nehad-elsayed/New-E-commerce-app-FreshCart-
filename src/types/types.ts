export interface UserInfo {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
}

export interface ApiError {
  message: string;
}

export interface Root {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
}
export interface Product {
  ratingsQuantity?: number;
  sold?: number;
  images?: string[];
  _id: string;
  title?: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface WishlistResponse {
  status: string;
  count: number;
  data: Product[];
}
export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Brand extends Category {
  date?: string;
}

export interface Root {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: Data;
}

export interface Data {
  _id: string;
  cartOwner: string;
  products: Product2[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface CartProductDetails {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}

export interface Product2 {
  count: number;
  _id: string;
  product: CartProductDetails;
  price: number;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface OrderShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export type ShippingAddress = OrderShippingAddress;

export interface OrderCartItem {
  count: number;
  _id: string;
  product: CartProductDetails;
  price: number;
}

export interface UserOrder {
  _id: string;
  id?: number;
  shippingAddress?: OrderShippingAddress;
  taxPrice?: number;
  shippingPrice?: number;
  totalOrderPrice?: number;
  paymentMethodType?: string;
  isPaid?: boolean;
  isDelivered?: boolean;
  cartItems?: OrderCartItem[];
  createdAt?: string;
  updatedAt?: string;
  user?: User;
  paidAt?: string;
}
export interface User {
  _id: string
  name: string
  email: string
  phone?: string
}






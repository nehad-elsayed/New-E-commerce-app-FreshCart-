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

export interface Product2 {
  count: number;
  _id: string;
  product: string;
  price: number;
}

// export interface Product3 {
//   subcategory: Subcategory[];
//   _id: string;
//   title: string;
//   quantity: number;
//   imageCover: string;
//   category: Category;
//   brand: Brand;
//   ratingsAverage: number;
//   id: string;
// }

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

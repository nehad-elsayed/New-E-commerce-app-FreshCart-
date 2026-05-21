import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import ProtectedAuthRoutes from "../guards/protectedAuthRoutes";
import ProtectedRoutes from "../guards/ProtectedRoutes";
import PageBoundary from "../components/Page/Page";
//lazy bta5od arrow function returns el import bta3 elcomponent
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Categories = lazy(() => import("../pages/Categories"));
const Brands = lazy(() => import("../pages/Brands"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Cart = lazy(() => import("../pages/Cart"));
const WishList = lazy(() => import("../pages/WishList"));
const AllOrders = lazy(() => import("../pages/AllOrders"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: (
      <PageBoundary>
        <Layout />
      </PageBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <PageBoundary>
            <Home />
          </PageBoundary>
        ),
      },
      {
        path: "/categories",
        element: (
          <PageBoundary>
            <Categories />
          </PageBoundary>
        ),
      },
      {
        path: "/brands",
        element: (
          <PageBoundary>
            <Brands />
          </PageBoundary>
        ),
      },
      {
        path: "/products",
        element: (
          <PageBoundary>
            <Products />
          </PageBoundary>
        ),
      },
      {
        path: `/prouductDetails/:id`,
        element: (
          <PageBoundary>
            <ProductDetails />
          </PageBoundary>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedAuthRoutes>
            <PageBoundary>
              <Login />
            </PageBoundary>
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedAuthRoutes>
            <PageBoundary>
              <Register />
            </PageBoundary>
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <PageBoundary>
              <Cart />
            </PageBoundary>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/wishList",
        element: (
          <ProtectedRoutes>
            <PageBoundary>
              <WishList />
            </PageBoundary>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoutes>
            <PageBoundary>
              <AllOrders />
            </PageBoundary>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <ProtectedRoutes>
            <PageBoundary>
              <UserProfile />
            </PageBoundary>
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: (
          <PageBoundary>
            <NotFound />
          </PageBoundary>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export default router;

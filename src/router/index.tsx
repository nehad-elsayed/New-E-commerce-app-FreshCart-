import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import ProtectedAuthRoutes from "../guards/protectedAuthRoutes";
import ProtectedRoutes from "../guards/ProtectedRoutes";
import Page from "../components/Page/Page";


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

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: (
      <Page>
        <Layout />
      </Page>
    ),
    children: [
      {
        index: true,
        element: (
          <Page>
            <Home />
          </Page>
        ),
      },
      {
        path: "/categories",
        element: (
          <Page>
            <Categories />
          </Page>
        ),
      },
      {
        path: "/brands",
        element: (
          <Page>
            <Brands />
          </Page>
        ),
      },
      {
        path: "/products",
        element: (
          <Page>
            <Products />
          </Page>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedAuthRoutes>
            <Page>
              <Login />
            </Page>
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedAuthRoutes>
            <Page>
              <Register />
            </Page>
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <Page>
              <Cart />
            </Page>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/wishList",
        element: (
          <ProtectedRoutes>
            <Page>
              <WishList />
            </Page>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoutes>
            <Page>
              <AllOrders />
            </Page>
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: (
          <Page>
            <NotFound />
          </Page>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export default router;

import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Suspense } from "react";
import Loadingscreen from "../components/LoadingScreen/Loadingscreen";
import Categories from "../pages/Categories";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import ProtectedAuthRoutes from "../guards/protectedAuthRoutes";
import ProtectedRoutes from "../guards/ProtectedRoutes";
import AllOrders from "../pages/AllOrders";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loadingscreen />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: (
          <ProtectedAuthRoutes>
            <Login />
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedAuthRoutes>
            <Register />
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            {" "}
            <Cart />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/wishList",
        element: (
          <ProtectedRoutes>
            <WishList />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoutes>
            <AllOrders />
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export default router;

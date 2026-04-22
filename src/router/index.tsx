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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishList",
        element: <WishList />,
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

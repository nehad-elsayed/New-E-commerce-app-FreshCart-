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
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorBoundary/ErrorFallback";
const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loadingscreen />}>
          <Layout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loadingscreen />}>
              <Home />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/categories",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loadingscreen />}>
              <Categories />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/brands",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loadingscreen />}>
              <Brands />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/products",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loadingscreen />}>
              <Products />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedAuthRoutes>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loadingscreen />}>
                <Login />
              </Suspense>
            </ErrorBoundary>
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedAuthRoutes>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loadingscreen />}>
                <Register />
              </Suspense>
            </ErrorBoundary>
          </ProtectedAuthRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loadingscreen />}>
                <Cart />
              </Suspense>
            </ErrorBoundary>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/wishList",
        element: (
          <ProtectedRoutes>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loadingscreen />}>
                <WishList />
              </Suspense>
            </ErrorBoundary>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoutes>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loadingscreen />}>
                <AllOrders />
              </Suspense>
            </ErrorBoundary>
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

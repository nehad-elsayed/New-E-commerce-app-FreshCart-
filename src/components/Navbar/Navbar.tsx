import { NavLink, useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import freshCartLogo from "../../assets/FreshCartLogo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { removeLocalStorageToken } from "../../utils/LocalStorage";
import useCartProducts from "../../hooks/useCartProducts";
import { useWishlistProducts } from "../../hooks/useToggleWishlist";

const navigationMenu = [
  { path: "/", label: "Home" },
  { path: "/categories", label: "Categories" },
  { path: "/products", label: "Products" },
  { path: "/brands", label: "Brands" },
  { path: "/allorders", label: "AllOrders" },
] as const;

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
    </svg>
  );
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────

function Badge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white ring-2 ring-white">
      {count > 9 ? "9+" : count}
    </span>
  );
}

function CartBadge() {
  const { data: cartProducts } = useCartProducts();
  return <Badge count={cartProducts?.numOfCartItems ?? 0} />;
}

function WishlistBadge() {
  const { data: wishlist } = useWishlistProducts();
  return <Badge count={wishlist?.count ?? 0} />;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { token, setToken } = useContext(AuthContext) as {
    token: string | null;
    setToken: (token: string | null) => void;
  };
  const isLoggedIn = !!token;
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Close on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isMenuOpen]);

  function logout() {
    removeLocalStorageToken();
    setToken(null);
    setIsMenuOpen(false);
    navigate("/login");
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
      isActive
        ? "text-green-600 bg-green-50 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-green-500"
        : "text-gray-600 hover:text-green-600 hover:bg-green-50",
    ].join(" ");

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium transition-all",
      isActive
        ? "bg-green-50 text-green-700 font-semibold"
        : "text-gray-700 hover:bg-gray-50 hover:text-green-600",
    ].join(" ");

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* ── Logo ── */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
            <img src={freshCartLogo} alt="freshCartLogo" />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Fresh<span className="text-primary">Cart</span>
          </span>
        </NavLink>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden items-center gap-1 md:flex">
          {navigationMenu.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} end={item.path === "/"} className={navLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {isLoggedIn ? (
            <>
              {/* Wishlist */}
              <NavLink
                to="/wishList"
                className={({ isActive }) =>
                  `relative rounded-lg p-2 transition-colors ${isActive ? "text-red-500 bg-green-50" : "text-gray-500 hover:text-primary-dark hover:bg-green-50"}`
                }
                aria-label="Wishlist"
              >
                <HeartIcon className="h-5 w-5" />
                <WishlistBadge />
              </NavLink>

              {/* Cart */}
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative rounded-lg p-2 transition-colors ${isActive ? "text-primary bg-green-50" : "text-gray-500 hover:text-primary-dark hover:bg-green-50"}`
                }
                aria-label="Cart"
              >
                <CartIcon className="h-5 w-5" />
                <Suspense fallback={null}>
                  <CartBadge />
                </Suspense>
              </NavLink>

              <button
                onClick={logout}
                className="flex w-full cursor-pointer items-center gap-2.5 px-4 py-2 text-sm text-red-600 transition-colors data-focus:bg-red-50"
              >
                <LogoutIcon className="h-4 w-4" />
                Sign out
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-600"
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {isLoggedIn && (
            <>
              <NavLink
                to="/wishList"
                className="relative rounded-lg p-2 text-gray-500 hover:bg-green-50 hover:text-primary"
                aria-label="Wishlist"
              >
                <HeartIcon className="h-5 w-5" />
                <WishlistBadge />
              </NavLink>
              <NavLink
                to="/cart"
                className="relative rounded-lg p-2 text-gray-500 hover:bg-green-50 hover:text-primary"
                aria-label="Cart"
              >
                <CartIcon className="h-5 w-5" />
                <Suspense fallback={null}>
                  <CartBadge />
                </Suspense>
              </NavLink>
            </>
          )}

          <button
            type="button"
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-mobile"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="navbar-mobile"
        className={[
          "overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="space-y-1 px-3 py-3">
          {/* Nav Links */}
          <p className="px-4 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Menu
          </p>
          {navigationMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={mobileNavLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="my-2 border-t border-gray-100" />

          {/* Auth section */}
          {isLoggedIn ? (
         
         <>
              <button
                onClick={logout}
                className="flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                <LogoutIcon className="mr-2 h-4 w-4" />
                Sign out
              </button>
            </>
          ) : (
            <>
              <p className="px-4 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                Account
              </p>
              <NavLink
                to="/login"
                className="flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className="flex w-full items-center justify-center rounded-xl bg-primary-light px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Create an account
              </NavLink>
            </>
          )}
        </div>

        {/* Bottom safe area padding */}
        <div className="h-2" />
      </div>
    </nav>
  );
}

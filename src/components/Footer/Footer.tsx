import { NavLink } from "react-router-dom";

const footerLinks = {
  Shop: [
    { label: "All Products", path: "/products" },
    { label: "Categories", path: "/categories" },
    { label: "Brands", path: "/brands" },
    { label: "New Arrivals", path: "/products" },
  ],
  Account: [
    { label: "My Cart", path: "/cart" },
    { label: "Wishlist", path: "/wishList" },
    { label: "My Orders", path: "/allorders" },
    { label: "Profile", path: "/profile" },
  ],
  Help: [
    { label: "FAQs", path: "/" },
    { label: "Shipping Info", path: "/" },
    { label: "Returns", path: "/" },
    { label: "Contact Us", path: "/" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const paymentIcons = [
  { label: "Visa", bg: "bg-blue-600", text: "VISA" },
  { label: "Mastercard", bg: "bg-red-500", text: "MC" },
  { label: "PayPal", bg: "bg-blue-500", text: "PP" },
  { label: "Cash", bg: "bg-green-600", text: "COD" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-200">
      {/* ── Main Footer ── */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* ── Brand ── */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">
                Fresh<span className="text-primary">Cart</span>
              </span>
            </NavLink>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Your one-stop shop for fresh groceries and everyday essentials, delivered fast to your
              door.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:border-primary hover:text-primary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Links ── */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.path}
                      className="text-sm text-gray-500 transition hover:text-primary"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">We accept:</span>
            {paymentIcons.map((p) => (
              <span
                key={p.label}
                className={`flex h-6 w-10 items-center justify-center rounded text-[10px] font-bold text-white ${p.bg}`}
              >
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

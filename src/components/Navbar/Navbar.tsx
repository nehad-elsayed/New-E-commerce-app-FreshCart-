// import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import freshCartLogo from "../../assets/FreshCartLogo.png";
// import {
//   Button,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// // import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// const navigationMenu = [
//   { path: "/", label: "Home" },
//   { path: "/categories", label: "Categories" },
//   { path: "/products", label: "Products" },
//   { path: "/brands", label: "Brands" },
//   { path: "/cart", label: "Cart" },
//   { path: "/wishList", label: "Wishlist", icon: "heart" as const },
// ] as const;

// function HeartIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={className}
//       aria-hidden={true}
//     >
//       <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//     </svg>
//   );
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!isMenuOpen) return;
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setIsMenuOpen(false);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [isMenuOpen]);

//   const navLinkClass = ({ isActive }: { isActive: boolean }) =>
//     [
//       "block w-full rounded-md p-2 hover:text-green-400 text-base transition-colors md:inline-block md:w-auto ",
//       isActive
//         ? "bg-slate-200 font-bold text-green-600"
//         : "text-body hover:bg-neutral-secondary-soft hover:text-heading md:hover:bg-transparent",
//     ].join(" ");

//   function logout() {
//     setIsLoggedIn(false);
//     navigate("/login");
//   }

//   return (
//     <nav className="w-full fixed border-default bg-slate-50 shadow-md">
//       <div className="mx-auto flex flex-wrap md:flex-nowrap md:gap-11 items-center justify-between gap-2 p-4">
//         <NavLink
//           to="/"
//           className="flex  items-center gap-3  space-x-3 rtl:space-x-reverse"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <img
//             src={freshCartLogo}
//             className="h-8 w-auto"
//             width={32}
//             height={32}
//             alt=""
//           />
//           <span className="text-xl font-semibold text-heading whitespace-nowrap">
//             FreshCart
//           </span>
//         </NavLink>

//         <button
//           type="button"
//           className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-base text-body hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none hover:cursor-pointer md:hidden"
//           aria-controls="navbar-main"
//           aria-expanded={isMenuOpen}
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           onClick={() => setIsMenuOpen((open) => !open)}
//         >
//           {isMenuOpen ? (
//             <svg
//               className="h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               aria-hidden={true}
//             >
//               <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
//             </svg>
//           ) : (
//             <svg
//               className="h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               aria-hidden={true}
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeWidth={2}
//                 d="M5 7h14M5 12h14M5 17h14"
//               />
//             </svg>
//           )}
//         </button>

//         <div
//           id="navbar-main"
//           className={[
//             "w-full basis-full md:basis-auto md:w-auto md:overflow-visible",
//             "transition-[max-height,opacity,margin-top] duration-300 ease-in motion-reduce:transition-none md:transition-none",
//             isMenuOpen
//               ? "max-h-[min(92vh,42rem)] opacity-100 max-md:mt-2 max-md:overflow-y-auto"
//               : "max-h-0 overflow-hidden opacity-0 max-md:pointer-events-none max-md:mt-0 md:max-h-none md:overflow-visible md:opacity-100 md:pointer-events-auto",
//           ].join(" ")}
//         >
//           <div className="flex min-h-0 w-full flex-col gap-2 rounded-base bg-neutral-secondary-soft p-2 md:flex-row md:flex-wrap md:items-center md:gap-6 md:bg-transparent md:p-0">
//             <ul className="flex w-full flex-col gap-1 font-medium md:w-auto md:flex-row md:items-center md:gap-6">
//               {navigationMenu.map((item) => (
//                 <li key={item.path} className="w-full p-2 md:w-auto">
//                   <NavLink
//                     to={item.path}
//                     end={item.path === "/"}
//                     className={navLinkClass}
//                     title={"icon" in item ? item.label : undefined}
//                     aria-label={"icon" in item ? item.label : undefined}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {"icon" in item ? (
//                       <>
//                         <span className="sr-only">{item.label}</span>
//                         <HeartIcon className="mx-auto h-6 w-6 md:mx-0" />
//                       </>
//                     ) : (
//                       item.label
//                     )}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             {/* <div className="w-full shrink-0 border-t border-slate-200 pt-2 md:w-auto md:border-t-0 md:border-l md:pl-6 md:pt-0">
//               {isLoggedIn ? (
//                 <button
//                   type="button"
//                   onClick={() => logout()}
//                   className="w-full rounded-md p-2 text-left text-xl font-bold text-red-600 hover:bg-slate-200/80 md:w-auto md:p-3 md:text-center"
//                 >
//                   Log out
//                 </button>
//               ) : (
//                 <ul className="flex flex-col gap-1 text-xl font-bold text-green-800 md:flex-row md:gap-4">
//                   <li className="w-full md:w-auto">
//                     <Link
//                       to="/login"
//                       className="block rounded-md p-2 hover:bg-slate-200/80 md:inline-block md:p-3"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Login
//                     </Link>
//                   </li>
//                   <li className="w-full md:w-auto">
//                     <Link
//                       to="/register"
//                       className="block rounded-md p-2 hover:bg-slate-200/80 md:inline-block md:p-3"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Register
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div> */}
//           </div>
//         </div>
//         <Menu as="div" className="relative ml-3 hidden md:block">
//           <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//             <span className="absolute -inset-1.5" />
//             <span className="sr-only">Open user menu</span>
//             <img
//               alt=""
//               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
//             />
//           </MenuButton>

//           <MenuItems
//             transition
//             className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//           >
//             {isLoggedIn ? (
//               <MenuItem>
//                 <button
//                   onClick={() => logout()}
//                   className="block  cursor-pointer p-4 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                 >
//                   Sign out
//                 </button>
//               </MenuItem>
//             ) : (
//               <>
//                 <MenuItem>
//                   <a
//                     href="/register"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                   >
//                     Register
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="/login"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                   >
//                     Login
//                   </a>
//                 </MenuItem>
//               </>
//             )}
//           </MenuItems>
//         </Menu>
//       </div>
//     </nav>
//   );
// }

// // import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// // import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// // const navigation = [
// //   { name: 'Dashboard', href: '#', current: true },
// //   { name: 'Team', href: '#', current: false },
// //   { name: 'Projects', href: '#', current: false },
// //   { name: 'Calendar', href: '#', current: false },
// // ]

// // function classNames(...classes) {
// //   return classes.filter(Boolean).join(' ')
// // }

// // export default function Example() {
// //   return (
// //     <Disclosure as="nav" className="relative bg-gray-800">
// //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //         <div className="relative flex h-16 items-center justify-between">
// //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //             {/* Mobile menu button*/}
// //             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
// //               <span className="absolute -inset-0.5" />
// //               <span className="sr-only">Open main menu</span>
// //               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
// //               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
// //             </DisclosureButton>
// //           </div>
// //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //             <div className="flex shrink-0 items-center">
// //               <img
// //                 alt="Your Company"
// //                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
// //                 className="h-8 w-auto"
// //               />
// //             </div>
// //             <div className="hidden sm:ml-6 sm:block">
// //               <div className="flex space-x-4">
// //                 {navigation.map((item) => (
// //                   <a
// //                     key={item.name}
// //                     href={item.href}
// //                     aria-current={item.current ? 'page' : undefined}
// //                     className={classNames(
// //                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
// //                       'rounded-md px-3 py-2 text-sm font-medium',
// //                     )}
// //                   >
// //                     {item.name}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //             <button
// //               type="button"
// //               className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
// //             >
// //               <span className="absolute -inset-1.5" />
// //               <span className="sr-only">View notifications</span>
// //               <BellIcon aria-hidden="true" className="size-6" />
// //             </button>

// //             {/* Profile dropdown */}
// //             <Menu as="div" className="relative ml-3">
// //               <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
// //                 <span className="absolute -inset-1.5" />
// //                 <span className="sr-only">Open user menu</span>
// //                 <img
// //                   alt=""
// //                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// //                   className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
// //                 />
// //               </MenuButton>

// //               <MenuItems
// //                 transition
// //                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
// //               >
// //                 <MenuItem>
// //                   <a
// //                     href="#"
// //                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
// //                   >
// //                     Your profile
// //                   </a>
// //                 </MenuItem>
// //                 <MenuItem>
// //                   <a
// //                     href="#"
// //                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
// //                   >
// //                     Settings
// //                   </a>
// //                 </MenuItem>
// //                 <MenuItem>
// //                   <a
// //                     href="#"
// //                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
// //                   >
// //                     Sign out
// //                   </a>
// //                 </MenuItem>
// //               </MenuItems>
// //             </Menu>
// //           </div>
// //         </div>
// //       </div>

// //       <DisclosurePanel className="sm:hidden">
// //         <div className="space-y-1 px-2 pt-2 pb-3">
// //           {navigation.map((item) => (
// //             <DisclosureButton
// //               key={item.name}
// //               as="a"
// //               href={item.href}
// //               aria-current={item.current ? 'page' : undefined}
// //               className={classNames(
// //                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
// //                 'block rounded-md px-3 py-2 text-base font-medium',
// //               )}
// //             >
// //               {item.name}
// //             </DisclosureButton>
// //           ))}
// //         </div>
// //       </DisclosurePanel>
// //     </Disclosure>
// //   )
// // }

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import freshCartLogo from "../../assets/FreshCartLogo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const navigationMenu = [
  { path: "/", label: "Home" },
  { path: "/categories", label: "Categories" },
  { path: "/products", label: "Products" },
  { path: "/brands", label: "Brands" },
] as const;

// ─── Icons ────────────────────────────────────────────────────────────────────

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

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
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

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({ src, name }: { src?: string; name?: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name ?? "User"}
        className="size-8 rounded-full object-cover ring-2 ring-green-400 ring-offset-1"
      />
    );
  }
  const initials = (name ?? "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 ring-2 ring-green-400 ring-offset-1">
      {initials}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface NavbarProps {
  /** Inject from auth context in a real app */
  initialLoggedIn?: boolean;
  cartCount?: number;
  wishlistCount?: number;
  userName?: string;
  userAvatar?: string;
}

export default function Navbar({
  cartCount = 3,
  wishlistCount = 5,
  userName = "John Doe",
  userAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate("/login");
  }

  // function login() {
  //   setIsMenuOpen(false);
  //   navigate("/login");
  // }

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
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 shadow-sm">
            <img src={freshCartLogo} alt="freshCartLogo" />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Fresh<span className="text-green-500">Cart</span>
          </span>
        </NavLink>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden items-center gap-1 md:flex">
          {navigationMenu.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop Right Section ── */}
        <div className="hidden items-center gap-2 md:flex">
          {isLoggedIn ? (
            <>
              {/* Wishlist */}
              <NavLink
                to="/wishList"
                className={({ isActive }) =>
                  `relative rounded-lg p-2 transition-colors ${isActive ? "text-green-600 bg-green-50" : "text-gray-500 hover:text-green-600 hover:bg-green-50"}`
                }
                aria-label="Wishlist"
              >
                <HeartIcon className="h-5 w-5" />
                <Badge count={wishlistCount} />
              </NavLink>

              {/* Cart */}
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative rounded-lg p-2 transition-colors ${isActive ? "text-green-600 bg-green-50" : "text-gray-500 hover:text-green-600 hover:bg-green-50"}`
                }
                aria-label="Cart"
              >
                <CartIcon className="h-5 w-5" />
                <Badge count={cartCount} />
              </NavLink>

              {/* User Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-green-500">
                  <Avatar src={userAvatar} name={userName} />
                  <span className="max-w-[100px] truncate text-sm font-medium text-gray-700">
                    {userName.split(" ")[0]}
                  </span>
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-20 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="px-4 py-3">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="truncate text-sm font-semibold text-gray-800">
                      {userName}
                    </p>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <NavLink
                        to="/profile"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 transition-colors data-focus:bg-gray-50 data-focus:text-gray-900"
                      >
                        <UserIcon className="h-4 w-4 text-gray-400" />
                        Your Profile
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        to="/login"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 transition-colors data-focus:bg-gray-50 data-focus:text-gray-900"
                      >
                       Sign In
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        to="/register"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 transition-colors data-focus:bg-gray-50 data-focus:text-gray-900"
                      >
                        Sign Up
                      </NavLink>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <button
                        onClick={logout}
                        className="flex w-full cursor-pointer items-center gap-2.5 px-4 py-2 text-sm text-red-600 transition-colors data-focus:bg-red-50"
                      >
                        <LogoutIcon className="h-4 w-4" />
                        Sign out
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
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

        {/* ── Mobile Right: Icons + Hamburger ── */}
        <div className="flex items-center gap-1 md:hidden">
          {isLoggedIn && (
            <>
              <NavLink
                to="/wishList"
                className="relative rounded-lg p-2 text-gray-500 hover:bg-green-50 hover:text-green-600"
                aria-label="Wishlist"
              >
                <HeartIcon className="h-5 w-5" />
                <Badge count={wishlistCount} />
              </NavLink>
              <NavLink
                to="/cart"
                className="relative rounded-lg p-2 text-gray-500 hover:bg-green-50 hover:text-green-600"
                aria-label="Cart"
              >
                <CartIcon className="h-5 w-5" />
                <Badge count={cartCount} />
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
          isMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none",
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
              <p className="px-4 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                Account
              </p>

              {/* User info */}
              <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <Avatar src={userAvatar} name={userName} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-800">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-500">View profile</p>
                </div>
              </div>

              <NavLink
                to="/profile"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                <UserIcon className="mr-2 h-4 w-4 text-gray-400" />
                Your Profile
              </NavLink>

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
                className="flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className="flex w-full items-center justify-center rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-600"
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

import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
  <div className="overflow-hidden">
      <Navbar />
      <div className="container py-20 mt-8 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

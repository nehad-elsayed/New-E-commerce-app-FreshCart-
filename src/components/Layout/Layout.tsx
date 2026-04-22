import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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

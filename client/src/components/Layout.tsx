import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingNav from "./FloatingNav";
import { useIsVisible } from "../hooks/use-is-visible";
import { useRef } from "react";

export default function Layout() {
  const { pathname } = useLocation();
  const topRef = useRef<HTMLDivElement>(null);
  const isTopVisible = useIsVisible(topRef);
  
  return (
    <div className="relative min-h-screen bg-background">
      {/* Top reference for floating nav visibility */}
      <div ref={topRef} className="absolute top-0 h-10" />
      
      {/* Main navbar */}
      <Navbar />
      
      {/* Floating navbar - shows when top is not visible */}
      {!isTopVisible && <FloatingNav />}
      
      {/* Page content with animations */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pb-16"
      >
        <Outlet />
      </motion.main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

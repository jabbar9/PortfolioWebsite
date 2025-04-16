import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading to ensure 3D models and assets are loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-foreground text-lg font-medium">Loading F&A Digitals...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-primary font-bold text-lg mb-3">F&A Digitals</h3>
              <p className="text-muted-foreground">
                Where data meets creativity, and strategy sparks growth.
              </p>
            </div>
            <div>
              <h3 className="text-primary font-bold text-lg mb-3">Contact</h3>
              <p className="text-muted-foreground">
                <a href="tel:8828052962" className="hover:text-primary transition-colors">
                  +91 8828052962
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:faizanshaikh0078@gmail.com" className="hover:text-primary transition-colors">
                  faizanshaikh0078@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-primary font-bold text-lg mb-3">Services</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground hover:text-primary transition-colors">
                  <a href="/work">SEO & Content Marketing</a>
                </li>
                <li className="text-muted-foreground hover:text-primary transition-colors">
                  <a href="/work">Social Media Management</a>
                </li>
                <li className="text-muted-foreground hover:text-primary transition-colors">
                  <a href="/work">Paid Advertising</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} F&A Digitals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

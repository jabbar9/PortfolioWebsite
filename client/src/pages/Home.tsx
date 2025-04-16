import { Suspense, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { ChevronRight, BarChart3, Users, TrendingUp, MousePointer } from 'lucide-react';
import DigitalGlobe from '@/components/models/DigitalGlobe';
import MarketingDashboard from '@/components/models/MarketingDashboard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useMousePosition } from '@/lib/hooks/use-mouse-position';

export default function Home() {
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate mouse position relative to container for parallax effect
  const calculateRelativePosition = () => {
    if (!containerRef.current || !mousePosition.x || !mousePosition.y) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    return {
      x: (mousePosition.x - centerX) / rect.width * 10,
      y: (mousePosition.y - centerY) / rect.height * 10
    };
  };
  
  const relativePosition = calculateRelativePosition();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={containerRef}
        className="pt-24 lg:pt-32 pb-16 lg:pb-32 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(19, 181, 197, 0.2) 0%, transparent 70%)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        />
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Faizan Shaikh
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                <span className="headline-gradient">Turning Clicks</span> <br />
                Into Customers
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                Freelance Digital Marketer | SEO, Social Media & Paid Ads Expert
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/work">
                    View My Work
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Connect With Me
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-[500px] relative">
              <div 
                className="w-full h-full" 
                style={{
                  transform: `translate(${relativePosition.x * -0.5}px, ${relativePosition.y * -0.5}px)`
                }}
              >
                <Canvas shadows>
                  <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                  <Suspense fallback={null}>
                    <DigitalGlobe position={[-1, 0, 0]} scale={[1.5, 1.5, 1.5]} />
                    <MarketingDashboard position={[2, -0.5, 0]} rotation={[0, -Math.PI / 6, 0]} scale={[0.7, 0.7, 0.7]} />
                    <Environment preset="city" />
                  </Suspense>
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From search engines to social feeds, we engineer every touchpoint of your 
              digital journey to deliver measurable success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">SEO & Analytics</h3>
              <p className="text-muted-foreground">
                Boost your search rankings and drive targeted traffic through data-driven SEO strategies.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Social Media</h3>
              <p className="text-muted-foreground">
                Engage and grow your audience with strategic content and community management.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Paid Advertising</h3>
              <p className="text-muted-foreground">
                Maximize ROI with targeted campaigns across Google, Facebook, Instagram and more.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MousePointer className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Content & Design</h3>
              <p className="text-muted-foreground">
                Eye-catching designs and compelling content that converts visitors into customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2313b5c5\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-primary">boost your brand</span> online?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your story deserves more than likes. It deserves loyalty, leads, and lasting growth. 
              Let's make it happen.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Start Your Journey Today
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { User, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import DigitalGlobe from '@/components/models/DigitalGlobe';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(19, 181, 197, 0.2) 0%, transparent 70%)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-muted-foreground text-lg">
              Get to know the passion and expertise behind F&A Digitals
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-12 h-1 bg-primary"></div>
                  <span className="text-primary font-medium">Our Story</span>
                </div>
                
                <h2 className="text-3xl font-bold">Where Data Meets Creativity</h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    Welcome to F & A Digitals — where data meets creativity, and strategy sparks growth.
                  </p>
                  <p>
                    We're a full-stack digital marketing powerhouse built for brands that dare to dream big. 
                    In a world driven by clicks, scrolls, and impressions, we craft campaigns that connect, 
                    convert, and create lasting impact.
                  </p>
                  <p>
                    Our team blends deep industry insight with cutting-edge tools to drive real results — 
                    not just vanity metrics. From search engines to social feeds, we engineer every touchpoint 
                    of your digital journey to deliver measurable success.
                  </p>
                  <p>
                    Whether you're launching, scaling, or dominating your niche — we don't just market your brand. 
                    We make it unforgettable.
                  </p>
                  <p>
                    Your story deserves more than likes. It deserves loyalty, leads, and lasting growth. 
                    Let's make it happen.
                  </p>
                </div>
                
                <Button asChild>
                  <Link to="/work">
                    View Our Work
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Right Column - 3D Model or Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-[500px] relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,181,197,0.15),transparent_70%)]"></div>
              
              <div className="w-full h-full">
                <Canvas>
                  <ambientLight intensity={0.6} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <Suspense fallback={null}>
                    <DigitalGlobe 
                      position={[0, 0, 0]} 
                      scale={[2, 2, 2]} 
                      rotationSpeed={0.2} 
                    />
                    <Environment preset="city" />
                  </Suspense>
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </div>
              
              {/* F&A Digitals Logo/Image Overlay */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-card p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 bg-primary rounded-full overflow-hidden flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F&A</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">F&A Digitals</h3>
                    <p className="text-sm text-muted-foreground">Since 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-6"
            >
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-6"
            >
              <p className="text-4xl font-bold text-primary mb-2">250+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="p-6"
            >
              <p className="text-4xl font-bold text-primary mb-2">5M+</p>
              <p className="text-muted-foreground">Ad Impressions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="p-6"
            >
              <p className="text-4xl font-bold text-primary mb-2">3+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your digital presence? Reach out to discuss how we can help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-card p-6 rounded-lg text-center border border-border"
            >
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <User className="text-primary" size={20} />
              </div>
              <h3 className="font-medium mb-2">Faizan Shaikh</h3>
              <p className="text-sm text-muted-foreground">Founder & Digital Marketer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-card p-6 rounded-lg text-center border border-border"
            >
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-primary" size={20} />
              </div>
              <h3 className="font-medium mb-2">Email Us</h3>
              <a href="mailto:faizanshaikh0078@gmail.com" className="text-sm text-primary hover:underline">
                faizanshaikh0078@gmail.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-card p-6 rounded-lg text-center border border-border"
            >
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-primary" size={20} />
              </div>
              <h3 className="font-medium mb-2">Call Us</h3>
              <a href="tel:8828052962" className="text-sm text-primary hover:underline">
                +91 8828052962
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-card p-6 rounded-lg text-center border border-border"
            >
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={20} />
              </div>
              <h3 className="font-medium mb-2">Working Hours</h3>
              <p className="text-sm text-muted-foreground">Mon - Fri: 9AM - 6PM</p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

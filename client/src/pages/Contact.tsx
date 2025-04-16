import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import MarketingDashboard from '@/components/models/MarketingDashboard';
import ContactForm from '@/components/ui/contact-form';

export default function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With Me</h1>
            <p className="text-muted-foreground text-lg">
              Let's discuss how we can help transform your digital presence
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form and Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
            
            {/* Right Column - Contact Info and 3D Model */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-2 rounded">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <a href="mailto:faizanshaikh0078@gmail.com" className="text-primary hover:underline">
                        faizanshaikh0078@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-2 rounded">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Phone</h3>
                      <a href="tel:8828052962" className="text-primary hover:underline">
                        +91 8828052962
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-2 rounded">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 6PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 h-[300px] relative">
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Suspense fallback={null}>
                      <MarketingDashboard scale={[1.2, 1.2, 1.2]} position={[0, -1, 0]} />
                      <Environment preset="city" />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} />
                  </Canvas>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our services and process
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-bold mb-2">How quickly can we see results?</h3>
              <p className="text-muted-foreground">
                While some strategies like paid ads can show immediate results, SEO and content marketing typically take 3-6 months to show significant impact. We provide monthly progress reports to track improvements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-bold mb-2">Do you offer one-time projects or only retainers?</h3>
              <p className="text-muted-foreground">
                We offer both one-time projects and monthly retainers depending on your needs. For sustainable growth, we typically recommend at least a 3-month commitment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-bold mb-2">How do you measure success?</h3>
              <p className="text-muted-foreground">
                We establish clear KPIs at the beginning of each project, which may include traffic growth, conversion rates, engagement metrics, and ultimately, ROI. We provide detailed monthly reports.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-bold mb-2">Do you work with businesses in specific industries?</h3>
              <p className="text-muted-foreground">
                We have experience across various industries including e-commerce, SaaS, healthcare, education, and professional services. Each strategy is custom-tailored to your specific industry and goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import TestimonialCard from '@/components/ui/testimonial-card';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Working with F&A Digitals has been a game-changer for our brand. Our online presence has skyrocketed, and we've seen a 60% increase in leads within just three months!",
    author: "Sarah D.",
    company: "Marketing Manager, TechSpark Solutions"
  },
  {
    id: 2,
    quote: "Their team is professional, responsive, and results-driven. They didn't just run campaigns—they built strategies that worked. Highly recommend!",
    author: "Ahmed K.",
    company: "Co-Founder, UrbanStyles"
  },
  {
    id: 3,
    quote: "From SEO to social media, F&A Digitals helped us grow our digital footprint with real, measurable results. We finally feel visible online.",
    author: "Priya M.",
    company: "Owner, Bliss & Bloom Boutique"
  },
  {
    id: 4,
    quote: "We've worked with multiple agencies before, but none matched the expertise and dedication of F&A Digitals. They truly understand what our business needs.",
    author: "James T.",
    company: "CEO, FitCore"
  },
  {
    id: 5,
    quote: "They took the time to understand our brand voice and delivered content that truly connected with our audience. Engagement rates are at an all-time high!",
    author: "Lina R.",
    company: "Marketing Lead, GreenHabits"
  },
  {
    id: 6,
    quote: "The ROI we've seen from Faizan's campaigns has been exceptional. Within just 2 months, our ad spend efficiency improved by 43%. Real results!",
    author: "Michael B.",
    company: "Director, CloudTech Solutions"
  }
];

export default function Testimonials() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results for our clients across different industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-lg border border-border text-center"
            >
              <p className="text-5xl font-bold text-primary mb-2">63%</p>
              <p className="text-lg font-medium mb-1">Average Increase</p>
              <p className="text-muted-foreground">In Organic Traffic</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-lg border border-border text-center"
            >
              <p className="text-5xl font-bold text-primary mb-2">42%</p>
              <p className="text-lg font-medium mb-1">Average Boost</p>
              <p className="text-muted-foreground">In Conversion Rates</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-lg border border-border text-center"
            >
              <p className="text-5xl font-bold text-primary mb-2">4.8x</p>
              <p className="text-lg font-medium mb-1">Average ROAS</p>
              <p className="text-muted-foreground">On Paid Campaigns</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-6 rounded-lg border border-border text-center"
            >
              <p className="text-5xl font-bold text-primary mb-2">89%</p>
              <p className="text-lg font-medium mb-1">Average Growth</p>
              <p className="text-muted-foreground">In Social Engagement</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Trusted by Businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From startups to established brands, we've helped businesses of all sizes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Client logos would go here - using placeholder boxes */}
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="w-24 h-12 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs"
              >
                Client {index + 1}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

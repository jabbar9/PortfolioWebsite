import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PortfolioCard from '@/components/ui/portfolio-card';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce SEO Optimization',
    description: 'Complete SEO strategy for a growing e-commerce brand resulting in 63% increase in organic traffic and 40% higher conversion rates over 6 months.',
    imageUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    category: 'seo'
  },
  {
    id: 2,
    title: 'Social Media Growth Campaign',
    description: 'Strategic social media management for a fashion brand increasing followers by 15K and engagement rates by 89% through targeted content strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
    category: 'social'
  },
  {
    id: 3,
    title: 'Google Ads Performance Marketing',
    description: 'Developed and optimized Google Ads campaigns for a SaaS company, achieving 42% reduction in CAC while increasing qualified leads by 78%.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    category: 'ads'
  },
  {
    id: 4,
    title: 'Analytics Dashboard Implementation',
    description: 'Built custom Google Analytics 4 dashboards with comprehensive KPI tracking, enabling data-driven decision making for a retail client.',
    imageUrl: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2',
    category: 'analytics'
  },
  {
    id: 5,
    title: 'Content Marketing Strategy',
    description: 'Developed a comprehensive content marketing strategy resulting in 215% increase in blog traffic and 27% growth in organic leads.',
    imageUrl: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93',
    category: 'content'
  },
  {
    id: 6,
    title: 'Facebook & Instagram Ad Campaign',
    description: 'Created and managed high-converting paid social campaigns with an average ROAS of 4.8x for a D2C beauty brand.',
    imageUrl: 'https://images.unsplash.com/photo-1485811055483-1c09e64d4576',
    category: 'ads'
  },
  {
    id: 7,
    title: 'Complete Marketing Audit',
    description: 'Conducted a comprehensive digital marketing audit revealing critical opportunities and implementing strategic recommendations for growth.',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
    category: 'analytics'
  },
  {
    id: 8,
    title: 'Local SEO for Small Business',
    description: 'Local SEO strategy for a regional service business, resulting in 400% increase in Google My Business views and 85% more local traffic.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    category: 'seo'
  }
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of successful digital marketing projects and case studies
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 max-w-[600px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="ads">Paid Ads</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="seo" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ads" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="content" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Services Breakdown */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-4">SEO & Content Marketing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Technical SEO Audits & Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Keyword Research & Strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>On-Page & Off-Page SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Content Creation & Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Local SEO & Google Business Profile</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-4">Social Media Management</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Platform Strategy & Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Content Calendar & Creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Community Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Performance Analytics & Reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Influencer Collaboration</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-4">Paid Advertising</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Google Ads (Search, Display, Shopping)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Meta Ads (Facebook & Instagram)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>LinkedIn & Twitter Ads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Remarketing & Retargeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Campaign Optimization & A/B Testing</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

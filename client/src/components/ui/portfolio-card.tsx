import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

export default function PortfolioCard({ title, description, imageUrl, index }: PortfolioCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="h-full overflow-hidden group border-border hover:border-primary/50 transition-all duration-300">
          <div className="relative overflow-hidden h-48">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setIsDialogOpen(true)}
                className="rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
              >
                <ZoomIn size={20} />
              </Button>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-foreground">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary/80"
              onClick={() => setIsDialogOpen(true)}
            >
              View Details
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogClose className="absolute top-4 right-4">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={imageUrl}
              alt={title}
              className="w-full rounded-md object-cover max-h-[400px]"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
              <p className="text-muted-foreground">{description}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-2">Services Provided</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>SEO Optimization</li>
                <li>Content Strategy</li>
                <li>Social Media Management</li>
                <li>Paid Advertising</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-2">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-muted p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-primary">+63%</p>
                  <p className="text-sm text-muted-foreground">Organic Traffic</p>
                </div>
                <div className="bg-muted p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-primary">+42%</p>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </div>
                <div className="bg-muted p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-primary">+89%</p>
                  <p className="text-sm text-muted-foreground">Social Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

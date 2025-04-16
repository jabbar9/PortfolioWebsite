import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  index: number;
}

export default function TestimonialCard({ quote, author, company, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card hover:bg-card/90 transition-colors border border-border">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="text-primary mb-4">
            <QuoteIcon size={24} />
          </div>

          <p className="text-card-foreground flex-grow mb-4">{quote}</p>
          
          <div className="mt-auto">
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

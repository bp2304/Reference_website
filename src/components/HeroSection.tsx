import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-image.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight"
            >
              Building legacy
              <br />
              <span className="text-primary">since 1845.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-xl"
          >
            For eight generations, the Oswal lineage has demonstrated resilience,
            reinvention, and the ability to evolve across industries — from crop
            trading to modern industrial manufacturing.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity group"
          >
            <span className="text-sm tracking-wide">+ More</span>
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src={heroImage}
                alt="Oswal Group - Industrial Heritage"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
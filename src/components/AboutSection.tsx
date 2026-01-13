import { motion } from 'framer-motion';
import founderImage from '@/assets/oswal-founder.jpeg';

interface AboutSectionProps {
  onNavigate: (section: string) => void;
}

const AboutSection = ({ onNavigate }: AboutSectionProps) => {
  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={founderImage}
                alt="Seth Narayan Lal Ji Pokharna - Founder of Oswal Group"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Gold accent bar */}
            <div className="absolute -bottom-4 left-0 right-0 h-12 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm tracking-widest font-medium">
                EST. 1845
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-secondary leading-tight mb-6">
              Builders of large-scale
              <br />
              <span className="text-primary">enterprises.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="font-display text-xl text-secondary italic">
                Seth Narayan Lal Ji Pokharna
              </p>
              <p className="text-sm text-primary tracking-wide">Group Founder</p>

              <p className="mt-6">
                In 1845, Seth Narayan Lal Ji Pokharna formally established a
                crop-trading corporation under the Oswal banner. Operating at
                the crossroads of Mughal and British trade routes, the firm
                dealt in cotton, wheat, barley, and jowar.
              </p>

              <p>
                The enterprise gained a reputation for discipline, honesty, and
                reliability — traits that became the signature identity of the
                House of Oswal.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('timeline')}
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            <span className="text-sm tracking-wide">+ Explore Our Legacy</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
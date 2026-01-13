import { motion } from 'framer-motion';

const timelineData = [
  {
    era: '1845–1915',
    title: 'The Founding Era',
    leader: 'Seth Narayan Lal Ji Pokharna',
    description:
      'Formally established a crop-trading corporation under the Oswal banner, dealing in cotton, wheat, barley, and jowar at the crossroads of Mughal and British trade routes.',
  },
  {
    era: '1915–1950',
    title: 'The Great Turbulence',
    leader: 'Family Expansion Period',
    description:
      'The family expanded into agriculture and crop cultivation. This period saw market volatility, changing colonial policies, and the first major challenges in the family\'s history.',
  },
  {
    era: '1950',
    title: 'The Restoration Era',
    leader: 'Seth Harak Chand Ji Pokharna',
    description:
      'Brought the business back under direct family control. Restored credibility, strengthened trade channels, and established the commercial discipline necessary for long-term survival.',
  },
  {
    era: '1985',
    title: 'Industrial Renaissance',
    leader: 'Shri Sajjan Singh Ji Jain (S. S. Jain)',
    description:
      'Initiated the transformation of Oswal from an agrarian merchant house into an engineering-driven industrial group. Founded PEW and invested heavily in mechanical R&D.',
  },
  {
    era: '1997',
    title: 'The Cement Industrial Age',
    leader: 'Shri Surender Singh Ji Jain',
    description:
      'Expanded into the cement industry as a premier OEM. Diversified into finance and real estate, creating a multi-vertical industrial powerhouse.',
  },
  {
    era: '2025–Present',
    title: 'The Fifth Industrial Reinvention',
    leader: 'Shreyansh & Rishabh Jain',
    description:
      'The eighth generation brings global exposure, technological expertise, and focus on AI, automation, Industry 4.0, smart machinery, and international expansion.',
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-secondary mb-4">
          A legacy of
          <br />
          <span className="text-primary">patient resilience.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          180 years of evolution across industries, driven by the timeless values
          passed down through eight distinguished generations.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.era}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? '' : 'md:direction-rtl'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 md:-translate-x-1/2 border-4 border-background" />

              {/* Content */}
              <div
                className={`pl-8 md:pl-0 ${
                  index % 2 === 0
                    ? 'md:pr-16 md:text-right'
                    : 'md:col-start-2 md:pl-16'
                }`}
              >
                <span className="inline-block text-primary font-display text-lg mb-2">
                  {item.era}
                </span>
                <h3 className="font-display text-xl text-secondary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3 tracking-wide">
                  {item.leader}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
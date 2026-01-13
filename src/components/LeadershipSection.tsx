import { motion } from 'framer-motion';

const lineage = [
  { name: 'Seth Narayan Lal Ji Pokharna', role: 'Group Founder', generation: '1st' },
  { name: 'Seth Jivraj Ji Pokharna', role: 'Successor', generation: '2nd' },
  { name: 'Seth Hari Singh Ji Pokharna', role: 'Successor', generation: '3rd' },
  { name: 'Seth Ghisalal Ji Pokharna', role: 'Successor', generation: '4th' },
  { name: 'Seth Harak Chand Ji Pokharna', role: 'Restorer', generation: '5th' },
  { name: 'Shri Sajjan Singh Ji Jain', role: 'Industrial Pioneer', generation: '6th' },
  { name: 'Shri Surender Singh Ji Jain', role: 'Diversification Leader', generation: '7th' },
  { name: 'Shreyansh & Rishabh Jain', role: 'Current Leadership', generation: '8th' },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-32 relative">
      <div className="absolute inset-0 bg-muted -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-secondary mb-4">
          Eight generations of
          <br />
          <span className="text-primary">distinguished leadership.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          From the founding visionary to today's global entrepreneurs, each
          generation has carried forward the Oswal legacy with distinction.
        </p>
      </motion.div>

      {/* Lineage Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {lineage.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group bg-background p-6 border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="mb-4">
              <span className="text-xs text-primary tracking-widest">
                {leader.generation} GENERATION
              </span>
            </div>
            <h3 className="font-display text-lg text-secondary mb-1 group-hover:text-primary transition-colors">
              {leader.name}
            </h3>
            <p className="text-sm text-muted-foreground">{leader.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <blockquote className="font-display text-xl md:text-2xl text-secondary italic leading-relaxed">
          "Today, the Group stands poised for global expansion, driven by
          technological ambition, engineering depth, and the timeless values
          passed down through its distinguished ancestral legacy."
        </blockquote>
      </motion.div>
    </section>
  );
};

export default LeadershipSection;
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-secondary mb-4">
              Connect with
              <br />
              <span className="text-primary">Oswal Group.</span>
            </h2>
            <p className="text-muted-foreground">
              For business inquiries, partnerships, or to learn more about our
              legacy and ventures.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm text-primary tracking-wide mb-2">EMAIL</h4>
              <p className="text-secondary">contact@oswalgroup.com</p>
            </div>
            <div>
              <h4 className="text-sm text-primary tracking-wide mb-2">HEADQUARTERS</h4>
              <p className="text-muted-foreground">
                Oswal Group of Industries
                <br />
                India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 border border-primary/30 rotate-45" />
            <div className="absolute inset-4 border border-primary/50 rotate-45" />
            <div className="absolute inset-8 bg-primary/10 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center -rotate-0">
                <span className="font-display text-4xl text-primary">180+</span>
                <p className="text-sm text-muted-foreground mt-1">Years of Legacy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
      >
        <p>© 2025 Oswal Group of Industries. All rights reserved.</p>
        <p>Est. 1845 • Eight Generations of Excellence</p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
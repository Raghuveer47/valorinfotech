import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/95 to-blue-800/95"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-orange-400 font-semibold text-lg mb-2 block"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Building Careers, Shaping Futures
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Valor Infotech empowers professionals and organizations through staffing excellence,
              structured training, and long-term career development strategies.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              We specialize in guiding <span className="text-orange-400 font-semibold">H4, L2, H1B, OPT,
              Green Card, Work Permit, PR, and Citizen</span> candidates towards successful careers in
              the tech industry. Our tailored services, including resume enhancement, skill assessments,
              and personalized training, are designed to equip you with the tools you need to thrive in
              competitive markets like the USA and Canada.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

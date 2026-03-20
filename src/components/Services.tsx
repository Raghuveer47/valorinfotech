import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, GraduationCap, TrendingUp, Briefcase, FileText } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Users,
      title: 'Staffing',
      description: 'Connect with top-tier opportunities through our extensive network of tech companies. We match your skills and career goals with the perfect positions, handling everything from initial screening to final placement.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'Industry-focused training programs designed to keep you ahead of the curve. Master in-demand technologies and frameworks through hands-on projects and real-world scenarios led by experienced professionals.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Comprehensive skill assessments and targeted development programs. We identify gaps in your expertise and provide structured learning paths to transform you into a market-ready professional.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Briefcase,
      title: 'Career Enhancement',
      description: 'Strategic career planning and advancement services including interview preparation, salary negotiation guidance, and professional branding. Build the career trajectory you deserve with expert mentorship.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Professional resume crafting, LinkedIn optimization, and portfolio development. Our experts ensure your documentation stands out to recruiters and hiring managers in competitive markets.',
      color: 'from-red-500 to-red-700',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Career Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From staffing to training, we provide end-to-end services to accelerate your tech career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

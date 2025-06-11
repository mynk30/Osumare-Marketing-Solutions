import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We'll schedule a consultation to understand your needs and create a personalized plan.",
    },
    {
      number: 2,
      title: "Planning",
      description: "Our team will create a detailed organization plan tailored to your space and lifestyle.",
    },
    {
      number: 3,
      title: "Implementation",
      description: "We'll execute the plan, decluttering and organizing your space efficiently.",
    },
    {
      number: 4,
      title: "Maintenance",
      description: "We'll provide ongoing support and tips to keep your space organized long-term.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      id="process"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a proven process to ensure your space is organized efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Process;

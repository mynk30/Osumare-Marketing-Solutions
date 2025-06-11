import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      quote: "OrganizePro transformed my home! I never thought my living space could be so functional and beautiful.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      quote: "The team was professional and efficient. My office is now a productive workspace instead of a cluttered mess.",
      image: "https://images.unsplash.com/photo-1573497014508-93a7f4428cb4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Emma Roberts",
      role: "Student",
      quote: "I can finally focus on my studies with a clean and organized study space. Thank you, OrganizePro!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      id="testimonials"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full"
                />
              </div>
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <footer className="text-sm text-gray-500">
                <strong className="font-semibold text-gray-900">{testimonial.name}</strong>
                <span className="block">{testimonial.role}</span>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;

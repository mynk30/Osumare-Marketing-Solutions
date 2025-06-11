import { motion } from 'framer-motion';

const Join = ({ setIsFormOpen }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="join"
      className="py-20 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their spaces with our professional organization services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Benefits */}
          <div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Personalized organization plans</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Professional team of organizers</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Guaranteed results</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Start Organizing Now
            </motion.button>
            <p className="mt-4 text-gray-600">
              No obligation consultation. Get started today!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Join;

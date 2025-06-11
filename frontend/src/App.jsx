import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Join from './components/Join'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [submissions, setSubmissions] = useState([])
  const [isThankYouOpen, setIsThankYouOpen] = useState(false)

  const handleFormSubmit = (formData) => {
    setSubmissions([
      ...submissions,
      {
        ...formData,
        timestamp: new Date().toLocaleString()
      }
    ])
    setIsThankYouOpen(true)

    // Close thank you modal after 2 seconds
    setTimeout(() => {
      setIsThankYouOpen(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection setIsFormOpen={setIsFormOpen} />

      {/* Main Content Container */}
      <div className="bg-gray-50">
        {/* Process Section */}
        <Process />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Join Section */}
        <Join setIsFormOpen={setIsFormOpen} />

        {/* Submissions Table */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted At</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Thank You Modal */}
        {isThankYouOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </motion.div>
          </motion.div>
        )}

        {/* Contact Form */}
        <ContactForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App;

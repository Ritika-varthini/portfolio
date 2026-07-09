import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Clear success badge after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-slate-50 dark:bg-[#111827] relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-10 w-96 h-96 rounded-full bg-accent/5 dark:bg-accent/5 blur-3xl glow-blob" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-primary dark:text-accent tracking-wide uppercase flex items-center justify-center gap-2">
            <FaPaperPlane className="inline text-xs" /> Let's Connect
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Information cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex-grow flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-350 font-light mb-8 leading-relaxed">
                Have a question, proposal, or just want to say hello? Drop me a message through the form, or reach out directly via my contact details below!
              </p>

              {/* Info Items List */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-100 text-primary dark:bg-slate-800 dark:text-accent shrink-0 shadow-sm">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-455 dark:text-slate-500 uppercase tracking-wider font-mono">Email Address</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm sm:text-base font-medium text-slate-850 dark:text-slate-200 hover:text-primary dark:hover:text-accent transition-colors break-all">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-100 text-primary dark:bg-slate-800 dark:text-accent shrink-0 shadow-sm">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-455 dark:text-slate-500 uppercase tracking-wider font-mono">Phone Number</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm sm:text-base font-medium text-slate-850 dark:text-slate-200 hover:text-primary dark:hover:text-accent transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-100 text-primary dark:bg-slate-800 dark:text-accent shrink-0 shadow-sm">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-455 dark:text-slate-500 uppercase tracking-wider font-mono">Current Location</p>
                    <span className="text-sm sm:text-base font-medium text-slate-850 dark:text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-slate-350">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-900/40 text-slate-850 dark:text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-550' 
                          : 'border-slate-200 focus:ring-primary dark:border-slate-800 dark:focus:ring-accent'
                      }`}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500 font-medium font-sans">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-350">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-900/40 text-slate-850 dark:text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-550' 
                          : 'border-slate-200 focus:ring-primary dark:border-slate-800 dark:focus:ring-accent'
                      }`}
                      placeholder="e.g. john@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium font-sans">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-600 dark:text-slate-350">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-900/40 text-slate-850 dark:text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-550' 
                        : 'border-slate-200 focus:ring-primary dark:border-slate-800 dark:focus:ring-accent'
                    }`}
                    placeholder="e.g. Project Proposal"
                  />
                  {errors.subject && <p className="text-xs text-red-500 font-medium font-sans">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-slate-350">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-900/40 text-slate-850 dark:text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-550' 
                        : 'border-slate-200 focus:ring-primary dark:border-slate-800 dark:focus:ring-accent'
                    }`}
                    placeholder="Type your message here..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 font-medium font-sans">{errors.message}</p>}
                </div>

                {/* Success Alert Message */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-350 border border-emerald-200/50 dark:border-emerald-900/40"
                    >
                      <FaCheckCircle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-semibold">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="h-3.5 w-3.5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

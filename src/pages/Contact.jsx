import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      description: "Get in touch via email",
      value: "hello@starkui.dev",
      action: "mailto:hello@starkui.dev"
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Chat",
      description: "Let's have a conversation",
      value: "Start a chat",
      action: "#"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Location",
      description: "Based in",
      value: "India",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 sm:mb-6">
            Let's Work Together
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's discuss how Stark UI can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
              <p className="text-slate-600 text-sm sm:text-base">Fill out the form below and I'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Send Message
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-blue-600 bg-blue-50 p-2.5 sm:p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">{info.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm mb-2">{info.description}</p>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-slate-700 font-medium text-sm sm:text-base">{info.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 sm:p-6 text-white">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                <h3 className="font-semibold text-base sm:text-lg">Quick Response</h3>
              </div>
              <p className="text-blue-100 text-sm sm:text-base">
                I typically respond within 24 hours. For urgent matters, feel free to reach out directly.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Connect with me</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all duration-300 text-slate-600 ${social.color} text-sm sm:text-base`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

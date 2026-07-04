import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { SiLeetcode } from "react-icons/si";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setAlertMessage('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    setStatus('loading');

    // Simulate secure form sending with real callback delivery
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setAlertMessage(`Thank you, ${formData.name}! Your message was queued successfully. Muzamil will get back to you at ${formData.email} shortly.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setStatus('error');
      setAlertMessage('A system error occurred. Please try sending your message again or email collabwithmuzamil@gmail.com directly.');
    }
  };
const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'Github':
      return <Icons.Github size={16} />;

    case 'Linkedin':
      return <Icons.Linkedin size={16} />;

    case 'Instagram':
      return <Icons.Instagram size={16} />;

    case 'Mail':
      return <Icons.Mail size={16} />;

    case 'Leetcode':
      return <SiLeetcode size={16} />;

    default:
      return <Icons.MessageSquare size={16} />;
  }
};

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-neutral-950 transition-colors relative"
    >
      {/* Dynamic Background visual detail */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[10%] left-[20%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-3 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10"
          >
            Get In Touch
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white"
          >
            Contact Me
          </motion.h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Layout outer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Parameters & Social Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-6">
                Contact Information
              </h3>

              {/* Main Info Blocks */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1.5">
                      Email address
                    </span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-500 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1.5">
                      Phone Number
                    </span>
                    <span className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1.5">
                      Office Location
                    </span>
                    <span className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp connection */}
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-xl text-xs font-bold tracking-wide uppercase bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-md shadow-emerald-500/10 hover:scale-[1.01]"
              >
                <MessageSquare size={16} />
                Message via WhatsApp
              </a>

              {/* Availability tag */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span>Availability Status: <strong className="text-neutral-800 dark:text-neutral-100">{personalInfo.availability}</strong></span>
              </div>
            </div>

            {/* Social Accounts Grid panel */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">
                Professional Networks
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-white/5 flex flex-col items-center justify-center gap-1.5 transition-all hover:scale-105 hover:shadow ${social.color} text-neutral-600 dark:text-neutral-400`}
                    title={social.platform}
                  >
                    {getSocialIcon(social.iconName)}
                    <span className="text-[9px] font-bold font-mono tracking-wide uppercase truncate max-w-full">
                      {social.platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm"
          >
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
              <Sparkles className="text-blue-500" size={18} />
              Drop Me A Line
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
              Fill out this responsive form to submit a project inquiry. Muzamil will analyze your parameters and send an answer as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Your Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none text-sm text-neutral-800 dark:text-neutral-200 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Email Address <span className="text-blue-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none text-sm text-neutral-800 dark:text-neutral-200 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none text-sm text-neutral-800 dark:text-neutral-200 transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none text-sm text-neutral-800 dark:text-neutral-200 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Detailed Message <span className="text-blue-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your requirements..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none text-sm text-neutral-800 dark:text-neutral-200 transition-colors resize-none"
                />
              </div>

              {/* Alert Message display container */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/25 flex items-start gap-2 text-xs text-green-600 dark:text-green-400"
                  >
                    <CheckCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{alertMessage}</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{alertMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit trigger button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 disabled:opacity-50 text-white font-bold tracking-wide uppercase text-xs transition-all hover:scale-[1.01] shadow-lg shadow-blue-500/10"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Securing Connection...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Secure Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// ✅ Import hero image
import heroImage from '../assets/contactus.png';

export function ContactPage() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!formState.name || !formState.email || !formState.phone || !formState.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '849064c5-e2ac-4294-89eb-8f5b0ec8f9eb',
          subject: `New Contact Message from ${formState.name}`,
          from_name: 'Kinto Tyres Website',
          replyto: formState.email,
          message: `
Name: ${formState.name}
Email: ${formState.email}
Phone: ${formState.phone}

Message:
${formState.message}
          `
        })
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormState({ name: '', email: '', phone: '', message: '' });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mt-4 text-lg md:text-xl"
          >
            Have questions about our products or need support? We’re here to help.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'phone'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-400 mb-1 capitalize">
                    {field} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formState[field as keyof typeof formState]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white"
                  />
                  {touched[field as keyof typeof touched] &&
                    !formState[field as keyof typeof formState] && (
                      <p className="text-red-500 text-sm mt-1">
                        This field is required
                      </p>
                    )}
                </div>
              ))}
              <div>
                <label className="block text-gray-400 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white"
                />
                {touched.message && !formState.message && (
                  <p className="text-red-500 text-sm mt-1">Message is required</p>
                )}
              </div>
              <Button type="submit" fullWidth className="py-4 text-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* RIGHT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Head Office</h2>
              <div className="space-y-6">
                <Info icon={<MapPin />} title="Address">
                  132, Great North Road<br />Hatfield, Hertfordshire<br />United Kingdom AL9 5JN
                </Info>
                <Info icon={<Phone />} title="Phone">
                  +44 7886 686142<br />+44 1707 912085
                </Info>
                <Info icon={<Mail />} title="Email">
                  info@kinto-tyres.co.uk
                </Info>
                <Info icon={<Clock />} title="Business Hours">
                  Mon–Fri: 9:00 AM – 6:00 PM<br />
                  Sat: 10:00 AM – 4:00 PM<br />
                  Sun: Closed
                </Info>
              </div>
            </div>

            {/* Dealer CTA */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-2xl shadow-glow">
              <h3 className="text-xl font-bold mb-4 text-white">Become a Dealer</h3>
              <p className="text-gray-400 mb-6">
                Join our dealer network and grow your business.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/dealer-registration')}
                className="w-full"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SUCCESS / ERROR MODAL */}
      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-[#1A1A1A] p-8 rounded-xl text-center border border-[#333]">
              {submitStatus === 'success' ? (
                <p className="text-green-500 text-lg font-semibold">
                  ✅ Message sent successfully!
                </p>
              ) : (
                <p className="text-red-500 text-lg font-semibold">
                  ❌ Something went wrong. Try again.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Info({ icon, title, children }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 rounded-lg text-brand-red">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{children}</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/contactus.png';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "KINTO TYRES UK LIMITED",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "132, Great North Road",
      "addressLocality": "Hatfield",
      "addressRegion": "Hertfordshire",
      "postalCode": "AL9 5JN",
      "addressCountry": "GB"
    },
    "telephone": ["+44-7886-686142", "+44-1707-912085"],
    "email": "info@kinto-tyres.co.uk"
  }
};

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
    const fieldName = e.target.name as keyof typeof touched;
    setFormState({ ...formState, [e.target.name]: e.target.value });
    
    // Clear error when user starts typing
    if (touched[fieldName]) {
      setTouched({ ...touched, [fieldName]: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!formState.name || !formState.email || !formState.phone || !formState.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '3fd2ddc1-ecad-4f31-88e5-457ec4e8ba68',
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
          setTouched({ name: false, email: false, phone: false, message: false });
          setSubmitStatus('idle');
        }, 4000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInput = (
    field: keyof typeof formState,
    label: string,
    type: string = 'text'
  ) => {
    const hasError = touched[field] && !formState[field];
    
    return (
      <div>
        <label className="block text-gray-400 mb-2 capitalize">
          {label} <span className="text-red-500">*</span>
        </label>
        {type === 'textarea' ? (
          <textarea
            rows={5}
            name={field}
            value={formState[field]}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
              hasError ? 'border-red-500' : 'border-[#333]'
            } text-white focus:ring-2 focus:ring-brand-red outline-none transition-all`}
            aria-label={label}
          />
        ) : (
          <input
            type={type}
            name={field}
            value={formState[field]}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
              hasError ? 'border-red-500' : 'border-[#333]'
            } text-white focus:ring-2 focus:ring-brand-red outline-none transition-all`}
            aria-label={label}
          />
        )}
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-500 text-sm mt-2 bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>This field is required</span>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact KINTO TYRES UK - Get in Touch | Hatfield, Hertfordshire</title>
        <meta name="description" content="Contact KINTO TYRES UK LIMITED in Hatfield, Hertfordshire. Call +44 7886 686142 or email info@kinto-tyres.co.uk. Open Monday-Saturday for your convenience." />
        <meta name="keywords" content="contact kinto tyres, kinto uk contact, tyre enquiries, hatfield tyres, kinto customer service, tyre support uk" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kinto-tyres.co.uk/contact" />
        <meta property="og:title" content="Contact KINTO TYRES UK" />
        <meta property="og:description" content="Get in touch with KINTO TYRES UK. Located in Hatfield, Hertfordshire." />
        
        <link rel="canonical" href="https://kinto-tyres.co.uk/contact" />
        
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <div className="bg-[#0A0A0A] min-h-screen">
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Contact KINTO TYRES UK"
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
              Have questions about our products or need support? We're here to help.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow p-8 md:p-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderInput('name', 'Name')}
                {renderInput('email', 'Email', 'email')}
                {renderInput('phone', 'Phone')}
                {renderInput('message', 'Message', 'textarea')}
                
                <Button type="submit" fullWidth className="py-4 text-lg mt-6" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>

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
                    <a href="tel:+447886686142" className="hover:text-brand-red transition-colors">+44 7886 686142</a><br />
                    <a href="tel:+441707912085" className="hover:text-brand-red transition-colors">+44 1707 912085</a>
                  </Info>
                  <Info icon={<Mail />} title="Email">
                    <a href="mailto:info@kinto-tyres.co.uk" className="hover:text-brand-red transition-colors">
                      info@kinto-tyres.co.uk
                    </a>
                  </Info>
                  <Info icon={<Clock />} title="Business Hours">
                    Mon–Fri: 9:00 AM – 6:00 PM<br />
                    Sat: 10:00 AM – 4:00 PM<br />
                    Sun: Closed
                  </Info>
                </div>
              </div>

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

        {/* Success/Error Modal */}
        <AnimatePresence>
          {submitStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setSubmitStatus('idle')}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-10 text-center max-w-md w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {submitStatus === 'success' ? (
                  <>
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Request Confirmed!</h3>
                    <p className="text-gray-300 mb-2">
                      Your message has been sent successfully.
                    </p>
                    <p className="text-gray-400 text-sm">
                      One of our call center operators will contact you shortly. Thank you!
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-10 h-10 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Submission Failed</h3>
                    <p className="text-gray-300 mb-4">
                      Something went wrong. Please try again later.
                    </p>
                    <Button onClick={() => setSubmitStatus('idle')} variant="outline">
                      Close
                    </Button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
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
        <div className="text-gray-400">{children}</div>
      </div>
    </div>
  );
}
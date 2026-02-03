import React, { useState } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

interface DealerFormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  website?: string;
  region: string;
  monthlySalesEstimate: string;
}

export const DealerRegistrationForm: React.FC = () => {
  const [formState, setFormState] = useState<DealerFormData>({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    region: '',
    monthlySalesEstimate: ''
  });

  const [touched, setTouched] = useState({
    businessName: false,
    ownerName: false,
    email: false,
    phone: false,
    address: false,
    region: false,
    monthlySalesEstimate: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name as keyof typeof touched;
    setFormState({ ...formState, [e.target.name]: e.target.value });
    
    // Clear error when user starts typing
    if (touched[fieldName]) {
      setTouched({ ...touched, [fieldName]: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      businessName: true,
      ownerName: true,
      email: true,
      phone: true,
      address: true,
      region: true,
      monthlySalesEstimate: true
    });

    if (
      !formState.businessName ||
      !formState.ownerName ||
      !formState.email ||
      !formState.phone ||
      !formState.address ||
      !formState.region ||
      !formState.monthlySalesEstimate
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '849064c5-e2ac-4294-89eb-8f5b0ec8f9eb',
          subject: `New Dealer Registration - ${formState.businessName}`,
          from_name: 'Dealer Registration Form',
          replyto: formState.email,
          message: `
Business Name: ${formState.businessName}
Owner Name: ${formState.ownerName}
Email: ${formState.email}
Phone: ${formState.phone}
Address: ${formState.address}
Region: ${formState.region}
Website: ${formState.website || 'N/A'}
Monthly Sales Estimate: ${formState.monthlySalesEstimate}
          `
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');

        setTimeout(() => {
          setFormState({
            businessName: '',
            ownerName: '',
            email: '',
            phone: '',
            address: '',
            website: '',
            region: '',
            monthlySalesEstimate: ''
          });
          setTouched({
            businessName: false,
            ownerName: false,
            email: false,
            phone: false,
            address: false,
            region: false,
            monthlySalesEstimate: false
          });
          setSubmitStatus('idle');
        }, 5000);
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
    name: keyof DealerFormData,
    label: string,
    type: string = 'text',
    required = true
  ) => {
    const hasError = touched[name as keyof typeof touched] && !formState[name];
    
    return (
      <div>
        <label className="text-gray-400 mb-2 block">
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        {type === 'textarea' ? (
          <textarea
            name={name}
            value={formState[name]}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
              hasError ? 'border-red-500' : 'border-[#333]'
            } text-white focus:ring-2 focus:ring-brand-red outline-none transition-all`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formState[name]}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
              hasError ? 'border-red-500' : 'border-[#333]'
            } text-white focus:ring-2 focus:ring-brand-red outline-none transition-all`}
          />
        )}

        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-500 text-sm mt-2 bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{label} is required</span>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow p-8 md:p-12 space-y-6"
      >
        {renderInput('businessName', 'Business Name')}
        {renderInput('ownerName', 'Owner Name')}
        {renderInput('email', 'Email', 'email')}
        {renderInput('phone', 'Phone', 'tel')}
        {renderInput('address', 'Address', 'textarea')}
        {renderInput('website', 'Website (Optional)', 'text', false)}
        {renderInput('region', 'Region / City')}
        {renderInput('monthlySalesEstimate', 'Estimated Monthly Sales')}

        <Button type="submit" fullWidth className="py-4 text-lg mt-6" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Register as Dealer'}
        </Button>
      </motion.form>

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
                  <h3 className="text-2xl font-bold text-white mb-3">Application Received!</h3>
                  <p className="text-gray-300 mb-2">
                    Thank you for your interest in becoming a dealer partner with The Kinto Tyres UK Ltd.
                  </p>
                  <p className="text-gray-400 text-sm mb-1">
                    We have received your dealer registration request and our team will review your application.
                  </p>
                  <p className="text-gray-400 text-sm font-semibold">
                    We'll contact you within 1-3 business days.
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
    </>
  );
};
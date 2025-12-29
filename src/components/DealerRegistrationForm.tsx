import React, { useState } from 'react';
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
    setFormState({ ...formState, [e.target.name]: e.target.value });
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

  const renderInput = (
    name: keyof DealerFormData,
    label: string,
    type: string = 'text',
    required = true
  ) => (
    <div>
      <label className="text-gray-400 mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          name={name}
          value={formState[name]}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white focus:ring-2 focus:ring-brand-red outline-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formState[name]}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white focus:ring-2 focus:ring-brand-red outline-none"
        />
      )}

      {touched[name] && !formState[name] && (
        <p className="text-red-500 text-sm mt-1">{label} is required</p>
      )}
    </div>
  );

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

        <Button type="submit" fullWidth className="py-4 text-lg" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Register as Dealer'}
        </Button>
      </motion.form>

      {/* CENTER MESSAGE */}
      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 text-center max-w-sm">
              {submitStatus === 'success' ? (
                <p className="text-green-500 text-lg font-semibold">
                  ✅ Registration submitted successfully!
                </p>
              ) : (
                <p className="text-red-500 text-lg font-semibold">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

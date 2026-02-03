import React, { useState } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

interface DistributorFormData {
  companyName: string;
  registrationNumber: string;
  yearEstablished: string;
  website: string;
  address: string;
  country: string;
  region: string;

  contactName: string;
  designation: string;
  email: string;
  phone: string;

  businessType: string;
  currentBrands: string;
  containerVolume: string;
  countriesCovered: string;

  euCompliance: string;
  euCertifiedOnly: string;

  requirements: string;
  message: string;
}

export const DistributorRegistrationForm: React.FC = () => {
  const [formState, setFormState] = useState<DistributorFormData>({
    companyName: '',
    registrationNumber: '',
    yearEstablished: '',
    website: '',
    address: '',
    country: '',
    region: '',

    contactName: '',
    designation: '',
    email: '',
    phone: '',

    businessType: '',
    currentBrands: '',
    containerVolume: '',
    countriesCovered: '',

    euCompliance: '',
    euCertifiedOnly: '',

    requirements: '',
    message: ''
  });

  // NEW: track which fields have been touched for validation
  const [touched, setTouched] = useState<Record<keyof DistributorFormData, boolean>>({
    companyName: false,
    registrationNumber: false,
    yearEstablished: false,
    website: false,
    address: false,
    country: false,
    region: false,

    contactName: false,
    designation: false,
    email: false,
    phone: false,

    businessType: false,
    currentBrands: false,
    containerVolume: false,
    countriesCovered: false,

    euCompliance: false,
    euCertifiedOnly: false,

    requirements: false,
    message: false
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof DistributorFormData;
    setFormState({ ...formState, [name]: e.target.value });
    if (touched[name]) {
      setTouched({ ...touched, [name]: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // mark all fields as touched
    const newTouched = Object.keys(formState).reduce((acc, key) => {
      acc[key as keyof DistributorFormData] = true;
      return acc;
    }, {} as Record<keyof DistributorFormData, boolean>);
    setTouched(newTouched);

    // check if any field is empty
    const hasEmpty = Object.values(formState).some((v) => v.trim() === '');
    if (hasEmpty) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '86546526549064c5',
          subject: `New Distributor Application - ${formState.companyName}`,
          from_name: 'Distributor Form',
          replyto: formState.email,
          message: JSON.stringify(formState, null, 2)
        })
      });

      const result = await response.json();
      setSubmitStatus(result.success ? 'success' : 'error');
      if (result.success) {
        setFormState({
          companyName: '',
          registrationNumber: '',
          yearEstablished: '',
          website: '',
          address: '',
          country: '',
          region: '',

          contactName: '',
          designation: '',
          email: '',
          phone: '',

          businessType: '',
          currentBrands: '',
          containerVolume: '',
          countriesCovered: '',

          euCompliance: '',
          euCertifiedOnly: '',

          requirements: '',
          message: ''
        });
        setTouched(Object.fromEntries(Object.keys(touched).map((k) => [k, false])) as any);
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInput = (name: keyof DistributorFormData, label: string, type = 'text') => {
    const hasError = touched[name] && !formState[name].trim();
    return (
      <div>
        <label className="text-gray-400 mb-2 block">
          {label} <span className="text-red-500">*</span>
        </label>
        {type === 'textarea' ? (
          <textarea
            name={name}
            value={formState[name]}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
              hasError ? 'border-red-500' : 'border-[#333]'
            } text-white focus:ring-2 focus:ring-brand-red outline-none`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formState[name]}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
              hasError ? 'border-red-500' : 'border-[#333]'
            } text-white focus:ring-2 focus:ring-brand-red outline-none`}
          />
        )}
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-500 text-sm mt-2"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" /> <span>{label} is required</span>
          </motion.div>
        )}
      </div>
    );
  };

  const renderSelect = (name: keyof DistributorFormData, label: string, options: string[]) => {
    const hasError = touched[name] && !formState[name].trim();
    return (
      <div>
        <label className="text-gray-400 mb-2 block">
          {label} <span className="text-red-500">*</span>
        </label>
        <select
          name={name}
          value={formState[name]}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
            hasError ? 'border-red-500' : 'border-[#333]'
          } text-white focus:ring-2 focus:ring-brand-red outline-none`}
        >
          <option value="">Select</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-500 text-sm mt-2"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" /> <span>{label} is required</span>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow p-8 md:p-12 space-y-6"
      >
        {renderInput('companyName', 'Company Name')}
        {renderInput('registrationNumber', 'Company Registration Number')}
        {renderInput('yearEstablished', 'Year Established')}
        {renderInput('website', 'Website')}
        {renderInput('address', 'Company Address', 'textarea')}
        {renderInput('country', 'Country')}
        {renderSelect('region', 'Region', ['Europe', 'Middle East', 'Africa', 'Asia', 'Other'])}

        {renderInput('contactName', 'Contact Person Name')}
        {renderInput('designation', 'Designation')}
        {renderInput('email', 'Email', 'email')}
        {renderInput('phone', 'Phone', 'tel')}

        {renderSelect('businessType', 'Business Type', ['Importer', 'Wholesaler', 'Distributor', 'Retail Chain'])}
        {renderInput('currentBrands', 'Current Tyre Brands You Handle')}
        {renderSelect('containerVolume', 'Monthly Container Volume', ['1-2', '3-5', '5+'])}
        {renderInput('countriesCovered', 'Countries You Distribute To')}

        {renderSelect('euCompliance', 'Comply with EU Tyre Regulations?', ['Yes', 'No'])}
        {renderSelect('euCertifiedOnly', 'Require EU Certified Tyres Only?', ['Yes', 'No'])}

        {renderInput('requirements', 'Requirements / Capabilities', 'textarea')}
        {renderInput('message', 'Why do you want to partner with us?', 'textarea')}

        <Button type="submit" fullWidth className="py-4 text-lg mt-6" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Apply for Distributorship'}
        </Button>
      </motion.form>

      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <motion.div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-10 text-center max-w-md w-full">
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Application Received!</h3>
                  <p className="text-gray-400">Our export team will contact you within 2-3 business days.</p>
                </>
              ) : (
                <>
                  <AlertCircle className="mx-auto text-red-500 w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Submission Failed</h3>
                  <p className="text-gray-400">Please try again later.</p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

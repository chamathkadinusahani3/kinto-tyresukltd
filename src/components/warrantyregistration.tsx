import React, { useState, useRef } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

interface WarrantyFormData {
  firstName: string;
  surname: string;
  address: string;
  city: string;
  mobilePhone: string;
  dealerShop: string;
  dateOfPurchase: string;
  tyrePattern: string;
  tyreSize: string;
  tyreCount: string;
  dotNumber: string;
  currentMileage: string;
  vehicleNo: string;
  invoiceImage: File | null;
  acceptedPolicy: boolean; 
}

const initialState: WarrantyFormData = {
  firstName: '',
  surname: '',
  address: '',
  city: '',
  mobilePhone: '',
  dealerShop: '',
  dateOfPurchase: '',
  tyrePattern: '',
  tyreSize: '',
  tyreCount: '1',
  dotNumber: '',
  currentMileage: '',
  vehicleNo: '',
  invoiceImage: null,
  acceptedPolicy: false
};

export function WarrantyRegistrationForm() {
  const [formData, setFormData] = useState<WarrantyFormData>(initialState);
  const [errors, setErrors] = useState<{ [key in keyof WarrantyFormData]?: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Ref to reset file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] || null : value
    }));

    // Clear error for this field
    if (errors[name as keyof WarrantyFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key in keyof WarrantyFormData]?: string } = {};
    if (!formData.firstName) newErrors.firstName = 'Please fill in the required information.';
    if (!formData.surname) newErrors.surname = 'Please fill in the required information.';
    if (!formData.address) newErrors.address = 'Please fill in the required information.';
    if (!formData.city) newErrors.city = 'Please fill in the required information.';
    if (!formData.mobilePhone) newErrors.mobilePhone = 'Please fill in the required information.';
    if (!formData.dealerShop) newErrors.dealerShop = 'Please fill in the required information.';
    if (!formData.dateOfPurchase) newErrors.dateOfPurchase = 'Please fill in the required information.';
    if (!formData.tyrePattern) newErrors.tyrePattern = 'Please fill in the required information.';
    if (!formData.tyreSize) newErrors.tyreSize = 'Please fill in the required information.';
    if (!formData.dotNumber) newErrors.dotNumber = 'Please fill in the required information.';
    if (!formData.currentMileage) newErrors.currentMileage = 'Please fill in the required information.';
    if (!formData.vehicleNo) newErrors.vehicleNo = 'Please fill in the required information.';
    if (!formData.invoiceImage) newErrors.invoiceImage = 'Please upload an invoice image.';
    if (!formData.acceptedPolicy) newErrors.acceptedPolicy = 'Please accept the Privacy Policy.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudName = "dffjb2rl4"; // replace with your Cloudinary name
    const unsignedUploadPreset = "warranty_upload"; // replace with your preset

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", unsignedUploadPreset);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: data
    });

    const result = await response.json();
    return result.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitStatus('idle');

    try {
      let invoiceURL = "";
      if (formData.invoiceImage) {
        invoiceURL = await uploadToCloudinary(formData.invoiceImage);
      }

      const dataToSend = new FormData();
      dataToSend.append("access_key", "3fd2ddc1-ecad-4f31-88e5-457ec4e8ba68"); // Web3Forms access key
      dataToSend.append("subject", "New Warranty Registration");
      dataToSend.append("from_name", `${formData.firstName} ${formData.surname}`);
      dataToSend.append("replyto", formData.mobilePhone);

      // Append other form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "invoiceImage") {
          dataToSend.append("invoiceImageURL", invoiceURL);
        } else {
          dataToSend.append(key, value as string);
        }
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');

        // Reset everything including file input
        setTimeout(() => {
          setFormData(initialState);
          setErrors({});
          setSubmitStatus('idle');
          if (fileInputRef.current) fileInputRef.current.value = '';
        }, 4000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }

    setLoading(false);
  };

  const renderError = (field: keyof WarrantyFormData) =>
    errors[field] ? (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-red-500 text-sm mt-2 bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20"
      >
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <span>{errors[field]}</span>
      </motion.div>
    ) : null;

  return (
    <div className="max-w-3xl mx-auto p-8 md:p-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-6 text-center"
      >
        Warranty Registration Form
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow p-8 md:p-12 space-y-6"
      >
        {Object.entries(formData).map(([key, value]) => {
          if (key === "invoiceImage") {
            return (
              <div key={key}>
                <label className="block text-gray-400 mb-2">
                  Attach Invoice Image <span className="text-red-500">*</span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  name={key}
                  onChange={handleChange}
                  className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-brand-red/90 file:cursor-pointer"
                />
                {renderError(key as keyof WarrantyFormData)}
              </div>
            );
          }

          if (key === "acceptedPolicy") {
            return (
              <div key={key} className="space-y-2">
                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.acceptedPolicy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-brand-red cursor-pointer"
                    id="acceptedPolicy"
                  />
                  <label htmlFor="acceptedPolicy" className="text-gray-400 text-sm cursor-pointer">
                    I agree to Privacy Policy and Terms and Conditions <span className="text-red-500">*</span>
                  </label>
                </div>
                {renderError(key as keyof WarrantyFormData)}
              </div>
            );
          }

          const type = key === "dateOfPurchase" ? "date" : key === "tyreCount" ? "number" : "text";

          return (
            <div key={key}>
              <label className="block text-gray-400 mb-2">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} <span className="text-red-500">*</span>
              </label>
              <input
                type={type}
                name={key}
                value={value as string}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border ${
                  errors[key as keyof WarrantyFormData] ? 'border-red-500' : 'border-[#333]'
                } text-white focus:ring-2 focus:ring-brand-red outline-none transition-all`}
              />
              {renderError(key as keyof WarrantyFormData)}
            </div>
          );
        })}

        <Button type="submit" fullWidth className="py-4 text-lg mt-6" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Warranty'}
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
                  <h3 className="text-2xl font-bold text-white mb-3">Request Confirmed!</h3>
                  <p className="text-gray-300 mb-2">
                    Your warranty registration has been received successfully.
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
  );
}
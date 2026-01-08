import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

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

export function WarrantyRegistrationForm() {
  const [formData, setFormData] = useState<WarrantyFormData>({
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
  });

  const [errors, setErrors] = useState<{ [key in keyof WarrantyFormData]?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] || null : value
    }));
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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  const formDataToSend = new FormData();

  // Web3Forms access key
  formDataToSend.append("access_key", "849064c5-e2ac-4294-89eb-8f5b0ec8f9eb");

  // Email subject
  formDataToSend.append("subject", "New Warranty Registration");

  // Email where you want to receive data
  formDataToSend.append("from_name", "Warranty Form");
  formDataToSend.append("replyto", formData.mobilePhone);

  // Form fields
  Object.entries(formData).forEach(([key, value]) => {
    if (value !== null) {
      formDataToSend.append(key, value as any);
    }
  });

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json();

    if (result.success) {
      alert("Warranty registered successfully!");

      setFormData({
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
      });

      setErrors({});
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Submission failed. Please try again later.");
  }
};


  const renderError = (field: keyof WarrantyFormData) =>
    errors[field] ? (
      <div className="flex items-center text-red-500 text-sm mt-1">
        <AlertCircle className="w-4 h-4 mr-1" /> {errors[field]}
      </div>
    ) : null;

  return (
    <div className="max-w-3xl mx-auto p-8 md:p-12">
      {/* Separate H2 Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-6 text-center"
      >
        Warranty Registration Form
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow p-8 md:p-12 space-y-6"
      >
        {/* First Name */}
        <div>
          <label className="block text-gray-400 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('firstName')}
        </div>

        {/* Surname */}
        <div>
          <label className="block text-gray-400 mb-1">
            Surname <span className="text-red-500">*</span>
          </label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('surname')}
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-400 mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea name="address" rows={2} value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white resize-none" />
          {renderError('address')}
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-400 mb-1">
            City / Province <span className="text-red-500">*</span>
          </label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('city')}
        </div>

        {/* Mobile Phone */}
        <div>
          <label className="block text-gray-400 mb-1">
            Mobile Phone <span className="text-red-500">*</span>
          </label>
          <input type="tel" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('mobilePhone')}
        </div>

        {/* Dealer Shop */}
        <div>
          <label className="block text-gray-400 mb-1">
            Dealer Shop <span className="text-red-500">*</span>
          </label>
          <input type="text" name="dealerShop" value={formData.dealerShop} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('dealerShop')}
        </div>

        {/* Date of Purchase */}
        <div>
          <label className="block text-gray-400 mb-1">
            Date of Purchase <span className="text-red-500">*</span>
          </label>
          <input type="date" name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('dateOfPurchase')}
        </div>

        {/* Tyre Pattern */}
        <div>
          <label className="block text-gray-400 mb-1">
            Tyre Pattern <span className="text-red-500">*</span>
          </label>
          <input type="text" name="tyrePattern" value={formData.tyrePattern} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('tyrePattern')}
        </div>

        {/* Tyre Size */}
        <div>
          <label className="block text-gray-400 mb-1">
            Tyre Size <span className="text-red-500">*</span>
          </label>
          <input type="text" name="tyreSize" value={formData.tyreSize} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('tyreSize')}
        </div>

        {/* Tyre Count */}
        <div>
          <label className="block text-gray-400 mb-1">
            Tyre Count <span className="text-red-500">*</span>
          </label>
          <input type="number" min="1" name="tyreCount" value={formData.tyreCount} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('tyreCount')}
        </div>

        {/* DOT Number */}
        <div>
          <label className="block text-gray-400 mb-1">
            DOT Number <span className="text-red-500">*</span>
          </label>
          <input type="text" name="dotNumber" value={formData.dotNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('dotNumber')}
        </div>

        {/* Current Mileage */}
        <div>
          <label className="block text-gray-400 mb-1">
            Current Mileage (KM) <span className="text-red-500">*</span>
          </label>
          <input type="text" name="currentMileage" value={formData.currentMileage} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('currentMileage')}
        </div>

        {/* Vehicle Number */}
        <div>
          <label className="block text-gray-400 mb-1">
            Vehicle Number <span className="text-red-500">*</span>
          </label>
          <input type="text" name="vehicleNo" value={formData.vehicleNo} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
          {renderError('vehicleNo')}
        </div>

        {/* Invoice Image */}
        <div>
          <label className="block text-gray-400 mb-1">
            Attach Invoice Image <span className="text-red-500">*</span>
          </label>
          <input type="file" accept="image/*" name="invoiceImage" onChange={handleChange} className="w-full text-gray-300" />
          {renderError('invoiceImage')}
        </div>

        {/* Privacy Policy */}
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" name="acceptedPolicy" checked={formData.acceptedPolicy} onChange={handleChange} />
          <span className="text-gray-400 text-sm">
            I agree to Privacy Policy and Terms and Conditions <span className="text-red-500">*</span>
          </span>
        </div>
        {renderError('acceptedPolicy')}

        <Button type="submit" fullWidth className="py-4 text-lg mt-4">
          Submit Warranty
        </Button>
      </motion.form>
    </div>
  );
}

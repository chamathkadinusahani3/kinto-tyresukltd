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
  const [loading, setLoading] = useState(false);

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

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudName = "dqftsrquy"; // <-- replace
    const unsignedUploadPreset = "warranty_upload"; // <-- replace

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", unsignedUploadPreset);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: data
    });

    const result = await response.json();
    return result.secure_url; // Cloudinary URL
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      let invoiceURL = "";
      if (formData.invoiceImage) {
        invoiceURL = await uploadToCloudinary(formData.invoiceImage);
      }

      const dataToSend = new FormData();
      dataToSend.append("access_key", "849064c5-e2ac-4294-89eb-8f5b0ec8f9eb"); // Web3Forms access key
      dataToSend.append("subject", "New Warranty Registration");
      dataToSend.append("from_name", `${formData.firstName} ${formData.surname}`);
      dataToSend.append("replyto", formData.mobilePhone);

      // Append all other form fields
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

    setLoading(false);
  };

  const renderError = (field: keyof WarrantyFormData) =>
    errors[field] ? (
      <div className="flex items-center text-red-500 text-sm mt-1">
        <AlertCircle className="w-4 h-4 mr-1" /> {errors[field]}
      </div>
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
        {/* Form fields */}
        {Object.entries(formData).map(([key, value]) => {
          if (key === "invoiceImage") {
            return (
              <div key={key}>
                <label className="block text-gray-400 mb-1">
                  Attach Invoice Image <span className="text-red-500">*</span>
                </label>
                <input type="file" accept="image/*" name={key} onChange={handleChange} className="w-full text-gray-300" />
                {renderError(key as keyof WarrantyFormData)}
              </div>
            );
          }

          if (key === "acceptedPolicy") {
            return (
              <div key={key} className="flex items-center gap-2 mt-2">
                <input type="checkbox" name={key} checked={formData.acceptedPolicy} onChange={handleChange} />
                <span className="text-gray-400 text-sm">
                  I agree to Privacy Policy and Terms and Conditions <span className="text-red-500">*</span>
                </span>
                {renderError(key as keyof WarrantyFormData)}
              </div>
            );
          }

          const type = key === "dateOfPurchase" ? "date" : key === "tyreCount" ? "number" : "text";

          return (
            <div key={key}>
              <label className="block text-gray-400 mb-1">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} <span className="text-red-500">*</span>
              </label>
              <input type={type} name={key} value={value as string} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white" />
              {renderError(key as keyof WarrantyFormData)}
            </div>
          );
        })}

        <Button type="submit" fullWidth className="py-4 text-lg mt-4" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Warranty'}
        </Button>
      </motion.form>
    </div>
  );
}

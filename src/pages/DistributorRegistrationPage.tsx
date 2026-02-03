import React from 'react';
import { DistributorRegistrationForm } from '../components/DistributorRegistrationForm';

export function DistributorRegistrationPage() {
  const handleDealerSubmit = (data: any) => {
    console.log('Distributor Data:', data);
    alert('Distributor registration submitted!');
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Distributor Registration</h1>
        <DistributorRegistrationForm onSubmit={handleDealerSubmit} />
      </div>
    </div>
  );
}

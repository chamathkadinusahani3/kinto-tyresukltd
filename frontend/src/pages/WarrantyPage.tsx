import React, { useState } from 'react';
import { Shield, Clock, AlertCircle, CheckCircle, XCircle, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
export function WarrantyPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
const navigate = useNavigate();
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const notCoveredItems = ['Tyres which are removed or reinstalled improperly, with impaired balance, or with a repaired tyre/wheel drum.', 'Damaged tyres with premature or irregular wear due to improper inflation pressure or having been run while flat.', 'Damaged tyres due to flat tyres having no air pressure.', 'Damaged tyres due to having been run while flat, having no pressure in tyres or the pressure is lower than the determined standard.', 'Tyres with premature or irregular wear due to the defective mechanical conditions of the vehicles, including misalignment, wheel imbalance, and faulty shocks or brakes.', 'Tyres which are installed or used with valves, wheel drums, or wheels that are improper for the type of tyres.', 'Tyres which are worn out: the tyres which are having the remaining groove depth equal to or less than 1.6 mm.', 'Tyres which have been retreaded or repaired.', 'Tyres which are worn by overloading of the prescribed standard of tyre or over-speeding of the prescribed standard as per the tyre manual provided by the manufacturing company.', 'Used and resold tyres.', 'Tyres which are stored improperly.', 'Tyres which are not used as per the tyre manual provided by the manufacturing company.', 'Tyres which are worn out or damaged by chemicals, fire, flood, accidents, or any change or configuration of cars to be different.', 'Tyres which are bought at stores that are not the distributors of KINTO TYRES or those agents who are not approved by KINTO TYRES.', 'Tyres which are damaged due to the weather and the effect of the atmosphere.'];
  const limitationItems = ["Tyres that have been misused or misused, such as passenger car tyres used in pickup trucks or vans. Overloading the tyre's capacity.", 'Tyres fitted to all race vehicles.', 'Tyres with tread delamination from use.', 'Tyres with any foreign material inserted into the tyre such as waterproofing foam, etc.', 'Tyres that have been disassembled/improperly assembled. Unbalanced tyres/pans or patches. The wheel pan does not meet the standards specified by the vehicle manual or uses a defective wheel pan.', 'Tyres installed or used with valves, wheel pans, or wheels that are not suitable according to the tyre type.', "Tyres that have been damaged or tyres worn prematurely or tyres that have worn abnormally due to the vehicle's defective mechanical condition, including incorrect wheel alignment, wheel imbalance, and defects in the brake system or shock absorbers.", "Tyres that are subject to the weight of a vehicle that exceeds the specified tyre standards or tyres of a vehicle that exceeds the specified speed by considering the information specified in the manufacturer's tyre manual.", 'Tyres that have been used and re-traded.', 'Tyres that are damaged or destroyed by chemicals, fire, water, accidents, or from changes or modifications to the shape of the vehicle and suspension to be different from the original.', 'Tyres damaged due to weather conditions and atmospheric effects.'];
  return <div className="bg-[#0A0A0A] min-h-screen py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Language Selector */}
        <motion.div initial="hidden" whileInView="show" viewport={{
        once: true
      }} variants={fadeInUp} className="text-center mb-12">
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Warranty Policy
          </h1>
          <p className="text-xl text-gray-400">
            Comprehensive coverage and protection for your KINTO tyres
          </p>
        </motion.div>

        {/* Main Warranty Card - 2 Year / 50,000 KM */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-brand-red to-[#B01820] p-8 text-white text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">
              2-Year or 50,000 KM Warranty
            </h2>
            <p className="text-white/90 text-lg">Whichever comes first</p>
          </div>
          <div className="p-8 md:p-10">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                The warranty is valid for{' '}
                <strong className="text-white">2 years or 50,000 KM</strong>{' '}
                (whichever comes first), under the following conditions:
              </p>

              <div className="space-y-4 pl-4 border-l-2 border-[#2A2A2A]">
                <p className="pl-4">
                  The tyre damage warranty policy guarantees only the conditions
                  specified in this policy. Any statements that appear in the
                  distributorship contract or in other contracts that conflict
                  consider that message to be void.
                </p>

                <p className="pl-4">
                  The warranty will end when the tyre tread wear is only{' '}
                  <strong className="text-white">1.6 mm</strong> with
                  consideration of the initial level of damage. This is at the
                  discretion of the "Company" and inspection of damaged tyres
                  must be carried out only by authorized representatives.
                </p>

                <p className="pl-4">
                  The Company and/or the Distributor are not responsible for
                  items that are removed from the vehicle or have been changed
                  by another person after it has been installed.
                </p>

                <p className="pl-4">
                  This warranty will not cover accidents, injuries, or damages
                  resulting from crimes or intentional acts, fire, theft, or
                  being used in a car race or misuse and/or for the wrong
                  purpose.
                </p>

                <p className="pl-4 text-gray-400 italic">
                  The Company reserves the right to terminate and/or amend the
                  warranty policy without prior notice.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 100 Days Care Assurance */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow overflow-hidden mb-8">
          <div className="bg-[#111] p-6 border-b border-[#2A2A2A] flex items-center">
            <Clock className="w-8 h-8 text-brand-red mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white">
                100 Days Care Assurance
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                From warranty registration accepted date
              </p>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-gray-300 mb-6 leading-relaxed">
              The warranty is valid for{' '}
              <strong className="text-white">100 days</strong> from the warranty
              registration accepted date, covering the following damages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start bg-[#0A0A0A] p-4 rounded-lg border border-[#2A2A2A]">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Cut and broken by sharp objects
                </span>
              </div>
              <div className="flex items-start bg-[#0A0A0A] p-4 rounded-lg border border-[#2A2A2A]">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Swelling from impact</span>
              </div>
              <div className="flex items-start bg-[#0A0A0A] p-4 rounded-lg border border-[#2A2A2A]">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Damaged from footpath or wayside
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A2A]/50 p-4 rounded-lg border border-[#333]">
              <p className="text-sm text-gray-400">
                <strong className="text-gray-200">Important:</strong> All
                damages must be inspected by the company upon claim submission.
                100 days starting from invoice date of end-user purchase.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What is NOT Included */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow overflow-hidden mb-8">
          <button onClick={() => toggleSection('notCovered')} className="w-full p-6 border-b border-[#2A2A2A] flex items-center justify-between hover:bg-[#252525] transition-colors">
            <div className="flex items-center">
              <XCircle className="w-8 h-8 text-red-500 mr-4" />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white">
                  What is NOT Included
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Exclusions and limitations
                </p>
              </div>
            </div>
            <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${expandedSection === 'notCovered' ? 'rotate-180' : ''}`} />
          </button>

          {expandedSection === 'notCovered' && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="p-8 md:p-10">
              <p className="text-gray-300 mb-6 leading-relaxed">
                KINTO TYRES are not warranted against any damage owing to the
                negligence of the customer or any accidents which are not
                attributable and such negligence shall be deemed to terminate
                this Policy including, but not limited to, the following:
              </p>

              <div className="space-y-3">
                {notCoveredItems.map((item, index) => <div key={index} className="flex items-start bg-[#0A0A0A] p-4 rounded-lg border border-[#2A2A2A] hover:border-red-900/30 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-red-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-red-500 text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>)}
              </div>
            </motion.div>}
        </motion.div>

        {/* Limitation and Termination */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-glow overflow-hidden mb-12">
          <button onClick={() => toggleSection('limitation')} className="w-full p-6 border-b border-[#2A2A2A] flex items-center justify-between hover:bg-[#252525] transition-colors">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-yellow-500 mr-4" />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white">
                  Limitation and Termination of Warranty
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Road hazard and misuse exclusions
                </p>
              </div>
            </div>
            <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${expandedSection === 'limitation' ? 'rotate-180' : ''}`} />
          </button>

          {expandedSection === 'limitation' && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="p-8 md:p-10">
              <p className="text-gray-300 mb-6 leading-relaxed">
                The warranty policy for road hazard injuries or damages caused
                by obstacles or debris shall terminate and/or not cover when
                used in the following cases:
              </p>

              <div className="space-y-3">
                {limitationItems.map((item, index) => <div key={index} className="flex items-start bg-[#0A0A0A] p-4 rounded-lg border border-[#2A2A2A] hover:border-yellow-900/30 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-yellow-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-yellow-500 text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>)}
              </div>
            </motion.div>}
        </motion.div>

        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="bg-gradient-to-r from-[#1A1A1A] to-[#111] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 text-center shadow-glow">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Register Your Warranty?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Activate your warranty coverage within 30 days of purchase. Have
            your proof of purchase and tyre DOT codes ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/warrantyregistration" className="px-12 py-4 text-lg">
              Register Warranty Now
            </Button>

            <Button variant="outline" href="/contact" className="px-12 py-4 text-lg border-gray-600 hover:bg-white/10">
              Contact Support
            </Button>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="mt-8 text-center">
          <p className="text-xs text-gray-600 italic">
            This warranty policy is subject to change without prior notice.
            Please refer to your purchase documentation for the most current
            terms and conditions.
          </p>
        </motion.div>
      </div>
    </div>;
}
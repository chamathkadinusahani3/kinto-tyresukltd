import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, ShoppingCart, Shield, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsAndConditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | KINTO TYRES UK LIMITED</title>
        <meta name="description" content="Terms and Conditions for KINTO TYRES UK LIMITED. Read our terms of service, warranty information, and legal agreements." />
        <link rel="canonical" href="https://kinto-tyres.co.uk/terms-and-conditions" />
      </Helmet>

      <div className="bg-[#0A0A0A] min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-brand-red/10 rounded-full mb-6"
            >
              <FileText className="w-10 h-10 text-brand-red" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Terms and Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Last Updated: 10 February 2026
            </motion.p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 space-y-8"
          >
            {/* Introduction */}
            <Section
              icon={<Scale className="w-6 h-6" />}
              title="1. Introduction"
              content={
                <>
                  <p>
                    Welcome to the website of KINTO TYRES UK LIMITED ("we", "our", "us"). These Terms and Conditions ("Terms") govern your access to and use of our website located at kinto-tyres.co.uk ("Website"). By accessing or using this Website, you agree to be bound by these Terms.
                  </p>
                  <div className="mt-4 bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                    <p className="text-gray-300">
                      <strong>Company Information:</strong><br />
                      KINTO TYRES UK LIMITED<br />
                      Company Registration Number: [COMPANY NUMBER]<br />
                      132, Great North Road, Hatfield, Hertfordshire, AL9 5JN, United Kingdom<br />
                      Email: info@kinto-tyres.co.uk<br />
                      Phone: +44 7886 686142
                    </p>
                  </div>
                </>
              }
            />

            {/* Purpose of Website */}
            <Section
              title="2. Purpose of This Website"
              content={
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Informational purposes about our tyre products and services</li>
                  <li>Warranty registration by customers</li>
                  <li>Dealer and distributor applications</li>
                  <li>Customer enquiries and support</li>
                  <li>We do not sell products directly through this Website; no online purchases are processed.</li>
                </ul>
              }
            />

            {/* Use of Website */}
            <Section
              icon={<Shield className="w-6 h-6" />}
              title="3. Use of the Website"
              content={
                <>
                  <p>You agree to use this Website only for lawful purposes. You must not:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Misuse the Website or attempt unauthorized access</li>
                    <li>Introduce viruses or malicious code</li>
                    <li>Use the Website in a way that may damage its functionality</li>
                    <li>Infringe the rights of others</li>
                    <li>Use automated systems to extract data from the Website</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to suspend or block access if these Terms are breached.
                  </p>
                </>
              }
            />

            {/* Accuracy of Information */}
            <Section
              title="4. Accuracy of Information"
              content={
                <p>
                  We aim to ensure that all information on this Website is accurate and up to date. However, we do not guarantee that all content, product descriptions, images, or technical information are error-free, complete, or current. Information on this Website does not constitute professional or technical advice.
                </p>
              }
            />

            {/* Warranty Registration */}
            <Section
              title="5. Warranty Registration"
              content={
                <p>
                  Customers may use this Website to register tyre warranties. By submitting warranty information, you confirm that all details provided (including vehicle information) are accurate. Submitting false or misleading warranty information may invalidate warranty coverage.
                </p>
              }
            />

            {/* Dealer Applications */}
            <Section
              title="6. Dealer and Distributor Applications"
              content={
                <p>
                  Businesses may submit applications to become authorized dealers or distributors. Submission of an application does not guarantee approval. We reserve the right to accept or reject applications at our discretion.
                </p>
              }
            />

            {/* Intellectual Property */}
            <Section
              title="7. Intellectual Property"
              content={
                <p>
                  All content on this Website, including text, graphics, logos, images, documents, and software, is the property of KINTO TYRES UK LIMITED or its licensors and is protected by intellectual property laws. You may not copy, reproduce, distribute, or use any content without our prior written permission.
                </p>
              }
            />

            {/* Limitation of Liability */}
            <Section
              icon={<AlertTriangle className="w-6 h-6" />}
              title="8. Limitation of Liability"
              content={
                <>
                  <p>Nothing in these Terms limits or excludes liability that cannot be limited under UK law. To the maximum extent permitted by law, we shall not be liable for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Any loss arising from reliance on Website information</li>
                    <li>Website downtime or technical issues</li>
                    <li>Indirect or consequential losses</li>
                    <li>Loss of data, profits, or business interruption</li>
                  </ul>
                  <p>Your use of this Website is at your own risk.</p>
                </>
              }
            />

            {/* Third-Party Links */}
            <Section
              title="9. Links to Third-Party Websites"
              content={
                <p>
                  This Website may contain links to external websites. We are not responsible for the content, security, or privacy practices of those websites.
                </p>
              }
            />

            {/* Privacy */}
            <Section
              title="10. Privacy and Data Protection"
              content={
                <p>
                  Your use of this Website is also governed by our <Link to="/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</Link> and <Link to="/cookie-policy" className="text-brand-red hover:underline">Cookie Policy</Link>, which explain how we collect and use your personal data.
                </p>
              }
            />

            {/* Changes to Terms */}
            <Section
              title="11. Changes to the Website or These Terms"
              content={
                <p>
                  We may update these Terms or the Website content at any time without notice. Continued use of the Website after changes indicates acceptance of the updated Terms.
                </p>
              }
            />

            {/* Governing Law */}
            <Section
              title="12. Governing Law"
              content={
                <p>
                  These Terms are governed by the laws of England and Wales. Any disputes arising from the use of this Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              }
            />

            {/* Statutory Rights */}
            <Section
              title="13. Your Statutory Rights"
              content={
                <p>
                  Nothing in these Terms affects your statutory rights under UK law.
                </p>
              }
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

interface SectionProps {
  icon?: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function Section({ icon, title, content }: SectionProps) {
  return (
    <div className="border-b border-[#2A2A2A] last:border-0 pb-8 last:pb-0">
      <div className="flex items-start gap-3 mb-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red mt-1">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold text-white flex-1">{title}</h2>
      </div>
      <div className="text-gray-300 leading-relaxed space-y-3 ml-[52px]">
        {content}
      </div>
    </div>
  );
}
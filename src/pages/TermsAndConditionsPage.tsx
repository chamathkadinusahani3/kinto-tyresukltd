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
              Last Updated: January 30, 2026
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
                    Welcome to KINTO TYRES UK LIMITED. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
                  </p>
                  <div className="mt-4 bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                    <p className="text-gray-300">
                      <strong>Company Information:</strong><br />
                      KINTO TYRES UK LIMITED<br />
                      Company Registration Number: [Your Company Number]<br />
                      132, Great North Road, Hatfield, Hertfordshire, AL9 5JN, United Kingdom<br />
                      Email: info@kinto-tyres.co.uk<br />
                      Phone: +44 7886 686142
                    </p>
                  </div>
                </>
              }
            />

            {/* Definitions */}
            <Section
              title="2. Definitions"
              content={
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>"Website"</strong> refers to kinto-tyres.co.uk</li>
                  <li><strong>"Services"</strong> refers to all products, services, and information provided by KINTO TYRES UK LIMITED</li>
                  <li><strong>"Customer"</strong> or "You" refers to any person or entity using our website or services</li>
                  <li><strong>"Products"</strong> refers to tyres and related automotive products we sell</li>
                  <li><strong>"We," "Us," "Our"</strong> refers to KINTO TYRES UK LIMITED</li>
                </ul>
              }
            />

            {/* Use of Website */}
            <Section
              icon={<Shield className="w-6 h-6" />}
              title="3. Use of Website"
              content={
                <>
                  <p className="font-semibold mb-2">You agree to use our website only for lawful purposes and in a way that does not:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Infringe on the rights of others</li>
                    <li>Restrict or inhibit anyone else's use of the website</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Transmit any harmful or malicious code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to suspend or terminate your access if you breach these Terms.
                  </p>
                </>
              }
            />

            {/* Products and Orders */}
            <Section
              icon={<ShoppingCart className="w-6 h-6" />}
              title="4. Products and Orders"
              content={
                <>
                  <p className="font-semibold mb-2">4.1 Product Information</p>
                  <p className="mb-4">
                    We strive to display accurate product descriptions, images, and prices. However, we do not warrant that product information is complete, reliable, current, or error-free. We reserve the right to correct errors and update information without prior notice.
                  </p>

                  <p className="font-semibold mb-2">4.2 Pricing</p>
                  <p className="mb-4">
                    All prices are in British Pounds (GBP) and include VAT unless otherwise stated. Prices are subject to change without notice. The price applicable is the price at the time of order confirmation.
                  </p>

                  <p className="font-semibold mb-2">4.3 Order Acceptance</p>
                  <p className="mb-4">
                    Your order constitutes an offer to purchase. We reserve the right to accept or decline any order for any reason. Order acceptance occurs when we send you an order confirmation email.
                  </p>

                  <p className="font-semibold mb-2">4.4 Payment</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Payment must be made in full before delivery</li>
                    <li>We accept major credit/debit cards and other payment methods as displayed</li>
                    <li>Payment processing is handled securely by third-party providers</li>
                  </ul>
                </>
              }
            />

            {/* Delivery */}
            <Section
              title="5. Delivery"
              content={
                <>
                  <p className="mb-4">
                    We will deliver products to the address you specify during checkout. Delivery times are estimates and not guaranteed. We are not liable for delays caused by circumstances beyond our control.
                  </p>
                  <p className="font-semibold mb-2">Risk and Title</p>
                  <p>
                    Risk of loss and title for products pass to you upon delivery. You are responsible for inspecting products upon delivery and reporting any damage or discrepancies within 48 hours.
                  </p>
                </>
              }
            />

            {/* Returns and Refunds */}
            <Section
              title="6. Returns and Refunds"
              content={
                <>
                  <p className="font-semibold mb-2">6.1 Return Policy</p>
                  <p className="mb-4">
                    You may return unused products in their original packaging within 14 days of delivery, subject to our return policy. Custom orders and fitted tyres may not be eligible for return.
                  </p>

                  <p className="font-semibold mb-2">6.2 Refund Process</p>
                  <p className="mb-4">
                    Refunds will be processed within 14 days of receiving returned products. Original shipping costs are non-refundable unless the return is due to our error.
                  </p>

                  <p className="font-semibold mb-2">6.3 Damaged or Defective Products</p>
                  <p>
                    If you receive damaged or defective products, contact us within 48 hours with photographic evidence. We will arrange a replacement or refund at no cost to you.
                  </p>
                </>
              }
            />

            {/* Warranty */}
            <Section
              title="7. Warranty"
              content={
                <>
                  <p className="mb-4">
                    Products sold by KINTO TYRES UK LIMITED come with a manufacturer's warranty. Warranty terms vary by product and manufacturer. To activate your warranty, you must register your purchase through our warranty registration portal.
                  </p>
                  <p className="font-semibold mb-2">Warranty Coverage</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                    <li>Manufacturing defects</li>
                    <li>Material defects</li>
                    <li>Workmanship issues</li>
                  </ul>
                  <p className="font-semibold mb-2">Warranty Exclusions</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Normal wear and tear</li>
                    <li>Damage from accidents or misuse</li>
                    <li>Improper installation or maintenance</li>
                    <li>Use in racing or commercial applications (unless specified)</li>
                  </ul>
                </>
              }
            />

            {/* Intellectual Property */}
            <Section
              title="8. Intellectual Property"
              content={
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of KINTO TYRES UK LIMITED or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              }
            />

            {/* Limitation of Liability */}
            <Section
              icon={<AlertTriangle className="w-6 h-6" />}
              title="9. Limitation of Liability"
              content={
                <>
                  <p className="mb-4">
                    To the maximum extent permitted by law, KINTO TYRES UK LIMITED shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, revenue, or data</li>
                    <li>Business interruption</li>
                    <li>Personal injury or property damage (except where caused by our negligence)</li>
                  </ul>
                  <p>
                    Our total liability to you for any claim shall not exceed the amount you paid for the product or service giving rise to the claim.
                  </p>
                </>
              }
            />

            {/* Indemnification */}
            <Section
              title="10. Indemnification"
              content={
                <p>
                  You agree to indemnify and hold harmless KINTO TYRES UK LIMITED, its officers, directors, employees, and agents from any claims, damages, liabilities, costs, and expenses arising from your use of our website or services, your violation of these Terms, or your violation of any third-party rights.
                </p>
              }
            />

            {/* Privacy */}
            <Section
              title="11. Privacy and Data Protection"
              content={
                <p>
                  Your use of our website is also governed by our <Link to="/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</Link>. We are committed to protecting your personal information in accordance with GDPR and UK data protection laws.
                </p>
              }
            />

            {/* Third-Party Links */}
            <Section
              title="12. Third-Party Links"
              content={
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these sites. Your use of third-party websites is at your own risk.
                </p>
              }
            />

            {/* Termination */}
            <Section
              icon={<Ban className="w-6 h-6" />}
              title="13. Termination"
              content={
                <p>
                  We reserve the right to suspend or terminate your access to our website at any time, with or without notice, for any reason, including breach of these Terms. Upon termination, your right to use the website will immediately cease.
                </p>
              }
            />

            {/* Governing Law */}
            <Section
              title="14. Governing Law and Jurisdiction"
              content={
                <p>
                  These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              }
            />

            {/* Changes to Terms */}
            <Section
              title="15. Changes to Terms"
              content={
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically.
                </p>
              }
            />

            {/* Severability */}
            <Section
              title="16. Severability"
              content={
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
              }
            />

            {/* Entire Agreement */}
            <Section
              title="17. Entire Agreement"
              content={
                <p>
                  These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and KINTO TYRES UK LIMITED regarding your use of our website and services.
                </p>
              }
            />

            {/* Contact */}
            <Section
              title="18. Contact Information"
              content={
                <>
                  <p className="mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                    <p className="text-gray-300">
                      <strong>KINTO TYRES UK LIMITED</strong><br />
                      132, Great North Road<br />
                      Hatfield, Hertfordshire<br />
                      AL9 5JN, United Kingdom<br /><br />
                      <strong>Email:</strong> info@kinto-tyres.co.uk<br />
                      <strong>Phone:</strong> +44 7886 686142
                    </p>
                  </div>
                </>
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
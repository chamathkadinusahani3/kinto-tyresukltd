import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | KINTO TYRES UK LIMITED</title>
        <meta name="description" content="Privacy Policy for KINTO TYRES UK LIMITED. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://kinto-tyres.co.uk/privacy-policy" />
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
              <Shield className="w-10 h-10 text-brand-red" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Privacy Policy
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
              icon={<Eye className="w-6 h-6" />}
              title="Introduction"
              content={
                <>
                  <p>
                    KINTO TYRES UK LIMITED ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="mt-4">
                    <strong>Company Information:</strong><br />
                    KINTO TYRES UK LIMITED<br />
                    132, Great North Road, Hatfield, Hertfordshire, AL9 5JN, United Kingdom<br />
                    Email: info@kinto-tyres.co.uk<br />
                    Phone: +44 7886 686142
                  </p>
                </>
              }
            />

            {/* Information We Collect */}
            <Section
              icon={<Database className="w-6 h-6" />}
              title="Information We Collect"
              content={
                <>
                  <p className="font-semibold mb-2">Personal Information:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and delivery addresses</li>
                    <li>Vehicle information (for warranty registration)</li>
                    <li>Payment information (processed securely by third-party providers)</li>
                    <li>Business details (for dealer applications)</li>
                  </ul>

                  <p className="font-semibold mb-2 mt-4">Automatically Collected Information:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </>
              }
            />

            {/* How We Use Your Information */}
            <Section
              icon={<UserCheck className="w-6 h-6" />}
              title="How We Use Your Information"
              content={
                <>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Process orders and warranty registrations</li>
                    <li>Communicate with you about products, services, and support</li>
                    <li>Respond to inquiries and provide customer service</li>
                    <li>Process dealer applications</li>
                    <li>Improve our website and services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and enhance security</li>
                  </ul>
                </>
              }
            />

            {/* Cookie Usage */}
            <Section
              icon={<Lock className="w-6 h-6" />}
              title="Cookies and Tracking Technologies"
              content={
                <>
                  <p>
                    We use cookies and similar technologies to enhance your browsing experience. For detailed information about our cookie practices, please see our <Link to="/cookie-policy" className="text-brand-red hover:underline">Cookie Policy</Link>.
                  </p>
                  <p className="mt-4">
                    You can control cookie preferences through our cookie consent banner or your browser settings.
                  </p>
                </>
              }
            />

            {/* Data Sharing */}
            <Section
              icon={<Mail className="w-6 h-6" />}
              title="Information Sharing and Disclosure"
              content={
                <>
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, email services, analytics providers)</li>
                    <li><strong>Business Partners:</strong> Authorized dealers and distributors (with your consent)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                  </ul>
                  <p className="mt-4">
                    We do not sell your personal information to third parties.
                  </p>
                </>
              }
            />

            {/* Data Security */}
            <Section
              title="Data Security"
              content={
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              }
            />

            {/* Your Rights */}
            <Section
              title="Your Rights (GDPR/UK GDPR)"
              content={
                <>
                  <p>If you are in the UK or EU, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your data</li>
                    <li><strong>Restriction:</strong> Limit how we use your data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Object:</strong> Object to processing of your data</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at info@kinto-tyres.co.uk
                  </p>
                </>
              }
            />

            {/* Data Retention */}
            <Section
              title="Data Retention"
              content={
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we securely delete or anonymize it.
                </p>
              }
            />

            {/* Third-Party Links */}
            <Section
              title="Third-Party Links"
              content={
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies before providing any information.
                </p>
              }
            />

            {/* Children's Privacy */}
            <Section
              title="Children's Privacy"
              content={
                <p>
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              }
            />

            {/* Changes to Policy */}
            <Section
              title="Changes to This Privacy Policy"
              content={
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              }
            />

            {/* Contact */}
            <Section
              title="Contact Us"
              content={
                <>
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="mt-4 bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                    <p className="text-gray-300">
                      <strong>Email:</strong> info@kinto-tyres.co.uk<br />
                      <strong>Phone:</strong> +44 7886 686142<br />
                      <strong>Address:</strong> 132, Great North Road, Hatfield, Hertfordshire, AL9 5JN, UK
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
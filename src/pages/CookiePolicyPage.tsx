import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart, Shield, Target } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | KINTO TYRES UK LIMITED</title>
        <meta name="description" content="Cookie Policy for KINTO TYRES UK LIMITED. Learn about the cookies we use and how to manage your cookie preferences." />
        <link rel="canonical" href="https://kinto-tyres.co.uk/cookie-policy" />
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
              <Cookie className="w-10 h-10 text-brand-red" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Cookie Policy
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
              icon={<Cookie className="w-6 h-6" />}
              title="Introduction"
              content={
                <p>
                  This Cookie Policy explains how KINTO TYRES UK LIMITED uses cookies and similar technologies when you visit our website. 
                  This policy should be read alongside our <a href="/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</a>.
                </p>
              }
            />

            {/* What Are Cookies */}
            <Section
              icon={<Settings className="w-6 h-6" />}
              title="What Are Cookies?"
              content={
                <p>
                  Cookies are small text files placed on your device to ensure proper website functioning, improve performance, and provide personalized content and advertising.
                </p>
              }
            />

            {/* Legal Basis */}
            <Section
              title="Legal Basis for Using Cookies"
              content={
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Strictly Necessary Cookies:</strong> Based on our legitimate interest to operate the website.</li>
                  <li><strong>Analytics, Functional, and Advertising Cookies:</strong> Used only with your consent. Disabled by default and activated only after you accept them via our cookie banner.</li>
                </ul>
              }
            />

            {/* Types of Cookies */}
            <Section
              title="Types of Cookies We Use"
              content={
                <div className="space-y-6">
                  <CookieType
                    title="Strictly Necessary Cookies (Always Active)"
                    description="Essential for security, session management, and accessibility."
                    examples={['Session management', 'Security authentication', 'Load balancing']}
                    required={true}
                  />
                  <CookieType
                    title="Performance / Analytics Cookies (Consent Required)"
                    description="Used to understand how visitors use our website."
                    examples={['Google Analytics']}
                    required={false}
                  />
                  <CookieType
                    title="Functionality Cookies (Consent Required)"
                    description="Remember user preferences and enhance user experience."
                    examples={['Language preference', 'Region selection', 'UI customization']}
                    required={false}
                  />
                  <CookieType
                    title="Targeting / Advertising Cookies (Consent Required)"
                    description="Deliver relevant ads and measure campaign effectiveness."
                    examples={['Google Ads', 'Facebook Pixel']}
                    required={false}
                  />
                </div>
              }
            />

            {/* Specific Cookies */}
            <Section
              icon={<BarChart className="w-6 h-6" />}
              title="Specific Cookies We Use"
              content={
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#333]">
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Cookie Name</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Type</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Duration</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <CookieRow name="_session" type="Necessary" duration="Session" purpose="Maintains session state" />
                      <CookieRow name="cookie_consent" type="Necessary" duration="1 year" purpose="Stores consent preferences" />
                      <CookieRow name="_ga" type="Analytics" duration="2 years" purpose="Distinguishes users (Google Analytics)" />
                      <CookieRow name="_gid" type="Analytics" duration="24 hours" purpose="Distinguishes users (Google Analytics)" />
                      <CookieRow name="language" type="Functional" duration="1 year" purpose="Language preference" />
                    </tbody>
                  </table>
                </div>
              }
            />

            {/* Third Party */}
            <Section
              icon={<Target className="w-6 h-6" />}
              title="Third-Party Cookies & International Transfers"
              content={
                <>
                  <p>
                    We use third-party services that may store or process data outside the UK, including the United States and EU. These include:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Google (Analytics & Ads)</li>
                    <li>Meta (Facebook Pixel)</li>
                    <li>Cloudinary (image hosting)</li>
                  </ul>
                  <p className="mt-2">We ensure appropriate safeguards such as Standard Contractual Clauses are in place.</p>
                </>
              }
            />

            {/* Managing Cookies */}
            <Section
              icon={<Shield className="w-6 h-6" />}
              title="Managing and Withdrawing Consent"
              content={
                <>
                  <p>You can withdraw or change your cookie consent at any time by:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Clicking the “Cookie Settings” link in our website footer</li>
                    <li>Adjusting your browser settings</li>
                  </ul>
                  <p className="mt-3 font-semibold">Browser controls:</p>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                  </ul>
                </>
              }
            />

            {/* Updates */}
            <Section
              title="Updates to This Policy"
              content={
                <p>
                  We may update this policy from time to time. Changes will be posted with a new "Last Updated" date.
                </p>
              }
            />

            {/* Contact */}
            <Section
              title="Contact Us"
              content={
                <div className="mt-4 bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                  <p className="text-gray-300">
                    <strong>Email:</strong> info@kinto-tyres.co.uk<br />
                    <strong>Phone:</strong> +44 7886 686142<br />
                    <strong>Address:</strong> 132, Great North Road, Hatfield, Hertfordshire, AL9 5JN, UK
                  </p>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

// Reusable Section Component
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
      <div className="text-gray-300 leading-relaxed space-y-3 ml-[52px]">{content}</div>
    </div>
  );
}

// CookieType Component
interface CookieTypeProps {
  title: string;
  description: string;
  examples: string[];
  required: boolean;
}
function CookieType({ title, description, examples, required }: CookieTypeProps) {
  return (
    <div className="bg-[#0A0A0A] p-5 rounded-lg border border-[#333]">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        {required && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Required</span>}
      </div>
      <p className="text-gray-400 mb-3">{description}</p>
      <div className="text-sm">
        <p className="text-gray-500 mb-1">Examples:</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {examples.map((example, idx) => (
            <li key={idx}>{example}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// CookieRow Component
interface CookieRowProps {
  name: string;
  type: string;
  duration: string;
  purpose: string;
}
function CookieRow({ name, type, duration, purpose }: CookieRowProps) {
  return (
    <tr className="border-b border-[#2A2A2A] last:border-0">
      <td className="py-3 px-4 text-white font-mono text-xs">{name}</td>
      <td className="py-3 px-4 text-gray-400">{type}</td>
      <td className="py-3 px-4 text-gray-400">{duration}</td>
      <td className="py-3 px-4 text-gray-400">{purpose}</td>
    </tr>
  );
}
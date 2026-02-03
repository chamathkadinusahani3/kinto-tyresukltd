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
              icon={<Cookie className="w-6 h-6" />}
              title="What Are Cookies?"
              content={
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain features.
                </p>
              }
            />

            {/* Types of Cookies */}
            <Section
              icon={<Settings className="w-6 h-6" />}
              title="Types of Cookies We Use"
              content={
                <div className="space-y-6">
                  <CookieType
                    title="1. Strictly Necessary Cookies"
                    description="These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility."
                    examples={[
                      'Session management',
                      'Security authentication',
                      'Load balancing'
                    ]}
                    required={true}
                  />

                  <CookieType
                    title="2. Performance Cookies"
                    description="These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve our website's performance."
                    examples={[
                      'Google Analytics',
                      'Page load times',
                      'Error tracking'
                    ]}
                    required={false}
                  />

                  <CookieType
                    title="3. Functionality Cookies"
                    description="These cookies allow our website to remember choices you make (such as language preferences) and provide enhanced, personalized features."
                    examples={[
                      'Language preferences',
                      'Region selection',
                      'User interface customization'
                    ]}
                    required={false}
                  />

                  <CookieType
                    title="4. Targeting/Advertising Cookies"
                    description="These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns."
                    examples={[
                      'Google Ads',
                      'Facebook Pixel',
                      'Remarketing tags'
                    ]}
                    required={false}
                  />
                </div>
              }
            />

            {/* Cookie Table */}
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
                      <CookieRow
                        name="_session"
                        type="Necessary"
                        duration="Session"
                        purpose="Maintains user session state"
                      />
                      <CookieRow
                        name="cookie_consent"
                        type="Necessary"
                        duration="1 year"
                        purpose="Stores cookie consent preferences"
                      />
                      <CookieRow
                        name="_ga"
                        type="Analytics"
                        duration="2 years"
                        purpose="Google Analytics - distinguishes users"
                      />
                      <CookieRow
                        name="_gid"
                        type="Analytics"
                        duration="24 hours"
                        purpose="Google Analytics - distinguishes users"
                      />
                      <CookieRow
                        name="language"
                        type="Functional"
                        duration="1 year"
                        purpose="Remembers language preference"
                      />
                    </tbody>
                  </table>
                </div>
              }
            />

            {/* Third-Party Cookies */}
            <Section
              icon={<Target className="w-6 h-6" />}
              title="Third-Party Cookies"
              content={
                <>
                  <p>
                    We use services from third-party companies that may set cookies on your device:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                    <li><strong>Google Analytics:</strong> Helps us understand how visitors use our website</li>
                    <li><strong>Google Ads:</strong> Delivers relevant advertisements</li>
                    <li><strong>Facebook Pixel:</strong> Tracks conversions from Facebook ads</li>
                    <li><strong>Cloudinary:</strong> Hosts and optimizes images</li>
                  </ul>
                  <p className="mt-4">
                    These third parties have their own privacy policies, and we have no control over their cookies.
                  </p>
                </>
              }
            />

            {/* Managing Cookies */}
            <Section
              icon={<Shield className="w-6 h-6" />}
              title="How to Manage Your Cookie Preferences"
              content={
                <>
                  <p className="font-semibold mb-3">You can control cookies in several ways:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                      <h4 className="text-white font-semibold mb-2">1. Cookie Consent Banner</h4>
                      <p>When you first visit our website, you can accept, reject, or customize your cookie preferences through our cookie banner.</p>
                    </div>

                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                      <h4 className="text-white font-semibold mb-2">2. Cookie Settings</h4>
                      <p>You can change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website.</p>
                    </div>

                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                      <h4 className="text-white font-semibold mb-2">3. Browser Settings</h4>
                      <p>Most browsers allow you to control cookies through their settings:</p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Safari</a></li>
                        <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Microsoft Edge</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-yellow-200 text-sm">
                      <strong>Note:</strong> Blocking or deleting cookies may impact your experience on our website. Some features may not work properly if you disable necessary cookies.
                    </p>
                  </div>
                </>
              }
            />

            {/* Updates */}
            <Section
              title="Updates to This Policy"
              content={
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will post any changes on this page with an updated "Last Updated" date.
                </p>
              }
            />

            {/* Contact */}
            <Section
              title="Contact Us"
              content={
                <>
                  <p>If you have questions about our use of cookies, please contact us:</p>
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
        {required && (
          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Required</span>
        )}
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
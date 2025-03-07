import { defaultHead } from "next/head";
import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col my-28 items-start gap-12 relative">
      <div className="flex-col items-center gap-14 self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="flex-col  items-center gap-5 flex relative flex-[0_0_auto]">
          <div className="text-[80px] tracking-[-0.80px] relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-primary leading-[normal]">
            Privacy Policy
          </div>

          <p className="relative self-stretch [font-family:'Lato-SemiBold',Helvetica] font-semibold text-gray-400  text-2xl text-center tracking-[-0.72px] leading-[normal]">
            Last Update on 1st Feb, 2025
          </p>
        </div>

        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          Utopian Takeoffs LLC ("Company," "we," "our," or "us") values your
          privacy. This Privacy Policy explains how we collect, use, share, and
          protect your information when you use our services. By using our
          services, you agree to the terms outlined in this Privacy Policy.
        </p>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          1. Information We Collect
        </div>
        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          We collect personal and business-related information to provide our
          takeoff and estimation services effectively. This may include:
        </p>
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-2xl tracking-[-0.24px] [font-family:'Lato-Bold',Helvetica] font-bold text-white leading-[normal] mb-3">
              Personal Information
            </div>
            <ul className="list-disc pl-8">
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Name
              </li>
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Email address
              </li>
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Phone number
              </li>
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Business details
              </li>
            </ul>
          </div>
          <div>
            <div className="text-2xl tracking-[-0.24px] [font-family:'Lato-Bold',Helvetica] font-bold text-white leading-[normal] mb-3">
              Project Information
            </div>
            <ul className="list-disc pl-8">
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Construction plans
              </li>
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Blueprints
              </li>
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Bid details
              </li>
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Other pre-construction documents
              </li>
            </ul>
          </div>

          <div>
            <div className="text-2xl tracking-[-0.24px] [font-family:'Lato-Bold',Helvetica] font-bold text-white leading-[normal] mb-3">
              Payment Information
            </div>
            <ul className="list-disc pl-8">
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Billing details for processing payments
              </li>
            </ul>
          </div>

          <div>
            <div className="text-2xl tracking-[-0.24px] [font-family:'Lato-Bold',Helvetica] font-bold text-white leading-[normal] mb-3">
              Website Usage Data
            </div>
            <ul className="list-disc pl-8">
              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                IP addresses
              </li>

              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Browsing activity
              </li>

              <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
                Data collected through cookies and analytics tools
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full">
        <div className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          2. How We Use Your Information
        </div>
        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          We use the collected information for the following purposes:
        </p>
        <ul className="list-disc pl-8">
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            To provide and enhance our takeoff and estimation services
          </li>
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            To communicate regarding projects, invoices, and customer support
          </li>
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            To process payments securely
          </li>
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            To personalize and improve your experience on our website
          </li>
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            To comply with legal and regulatory requirements
          </li>
        </ul>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
            3. How We Share Your Information
          </p>

          <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-8">
            We do not sell or rent your personal information. However, we may
            share your data in the following cases:
          </p>
        </div>

        <div className="flex-col items-start gap-3 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="text-2xl tracking-[-0.24px] relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white leading-[normal]">
            Service Providers
          </div>

          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex-1 mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-8">
              Third-party vendors who assist in providing our services (e.g.,
              payment processors, cloud storage providers).
            </p>
          </div>
        </div>

        <div className="flex-col items-start gap-3 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="text-2xl tracking-[-0.24px] relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white leading-[normal]">
            Legal Requirements
          </div>

          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex-1 mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-8">
              If required by law or legal processes, we may disclose your
              information.
            </p>
          </div>
        </div>

        <div className="flex-col items-start gap-3 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="text-2xl tracking-[-0.24px] relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white leading-[normal]">
            Business Transfers
          </div>

          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex-1 mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
              In the event of a merger, sale, or business reorganization, your
              information may be transferred.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          4. Data Security
        </div>

        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          We implement reasonable security measures to protect your personal and
          project data from unauthorized access, alteration, or disclosure.
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          5. Your Rights and Choices
        </div>
        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          You have the right to:
        </p>
        <ul className="list-disc pl-8">
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            Request access to the personal data we hold about you
          </li>
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            Correct or update inaccurate information
          </li>
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            Request deletion of your personal data, subject to legal obligations
          </li>
          <li className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl">
            Opt out of marketing communications at any time
          </li>
        </ul>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          6. Cookies and Tracking Technologies
        </div>

        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          Our website may use cookies and similar tracking technologies to
          enhance user experience. You can adjust your browser settings to
          refuse cookies, but this may affect certain website functionalities.
        </p>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          7. Third-Party Links
        </div>

        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these external sites.
        </p>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          8. Updates to This Privacy Policy
        </p>

        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-10">
          We may update this Privacy Policy periodically. Any significant
          changes will be communicated by updating the &#34;Effective Date&#34;
          above.
        </p>
      </div>

      <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[normal]">
          9. Contact Us
        </div>

        <p className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-10">
          <span className="text-[#5e6272]">
            For any questions regarding this Privacy Policy or our data
            practices, please contact us at:
            <br />
          </span>

          <span className="text-[#0f142c]">Utopian Takeoffs LLC</span>

          <br />
          <span className="text-[#5e6272] border-b border-b-background-300">
            7901 4th St N, St. Petersburg, FL 33702, United States
          </span>

          <br />

          <span className="text-[#0f142c]">
            📞 +1 914 407 3061
            <br />
          </span>

          <span className="text-[#5e6272]">
            By using our services, you acknowledge that you have read and
            understood this Privacy Policy.
          </span>
        </p>
      </div>
    </div>
  );
};
export default Frame;

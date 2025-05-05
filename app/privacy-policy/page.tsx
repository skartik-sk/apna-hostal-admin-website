// pages/privacy-policy.js
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Head>
        <title>Privacy Policy - Apna Hostel RGPV</title>
        <meta name="description" content="Privacy Policy for Apna Hostel RGPV application" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">Privacy Policy for Apna Hostel RGPV</h1>
        <p className="italic text-gray-600 mb-8">Last Updated: May 5, 2025</p>

        <p className="mb-4">
          Welcome to Apna Hostel RGPV. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Information We Collect</h2>
        <p className="mb-2">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information (name, email address, phone number)</li>
          <li>Academic information (enrollment number, branch)</li>
          <li>Hostel information (hostel name, room number)</li>
          <li>Images you upload related to complaints or profile pictures</li>
          <li>Academic marks you enter</li>
          <li>Documents you upload</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">How We Use Your Information</h2>
        <p className="mb-2">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Create and manage your account</li>
          <li>Process attendance records</li>
          <li>Handle complaints and applications</li>
          <li>Facilitate hostel committee elections</li>
          <li>Enable communication between users</li>
          <li>Send notifications about important updates</li>
          <li>Improve our services</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal information. 
          However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Data Sharing</h2>
        <p className="mb-2">We do not sell your personal information to third parties. Information is only shared with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Hostel administrators for management purposes</li>
          <li>Other students for features that require peer interaction (elections, chat)</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">User Rights</h2>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access and update your personal information</li>
          <li>Request deletion of your account</li>
          <li>Opt out of non-essential communications</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Data Retention</h2>
        <p className="mb-4">
          We retain your personal information as long as your account is active or as needed to provide services. 
          We may retain certain information as required by law or for legitimate business purposes.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, please contact us at:<br />
          Email: apnahostelrgpv@example.com<br />
          Phone: [Your contact number]
        </p>
      </main>
    </div>
  );
}
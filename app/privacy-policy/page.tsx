import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          This Privacy Policy outlines how Internal Knowledge Base collects,
          uses, and protects your personal information. We are committed to
          ensuring the privacy and security of our users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Email addresses: We capture email addresses upon login to
            authenticate users and provide personalized services.
          </li>
          <li className="mb-2">
            Cookies: We use cookies to improve your experience and analyze site
            usage.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">To provide and maintain our service</li>
          <li className="mb-2">To authenticate users and secure accounts</li>
          <li className="mb-2">
            To analyze site usage and improve our offerings
          </li>
          <li className="mb-2">
            To communicate with you about your account or our services
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We take the security of your data seriously. Document contents used in
          RAG (Retrieval-Augmented Generation) search are left on your device
          and are not captured or stored by us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4">
          We use cookies to improve your experience and analyze site usage. You
          can control cookies through your browser settings. Please note that
          disabling cookies may affect the functionality of our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal
          information. If you wish to exercise these rights or have any
          questions about our privacy practices, please contact us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className="mb-4">Email: david@esspressocode.tech</p>
      </section>

      <p className="text-sm text-gray-600 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <Link href="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
}

// pages/index.js
'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('features');
  
  const features = [
    { icon: "📱", title: "User Authentication", description: "Secure email verification with OTP for student login and registration." },
    { icon: "✅", title: "Attendance Tracking", description: "Mark hostel and mess attendance with location-based verification." },
    { icon: "📝", title: "Applications & Complaints", description: "Submit and track applications and complaints with image uploads." },
    { icon: "💬", title: "Real-Time Chat", description: "Connect with other students through integrated messaging." },
    { icon: "📄", title: "Document Management", description: "Upload and manage important documents up to 10MB." },
    { icon: "🗳️", title: "Committee Elections", description: "Nominate and vote for hostel committee positions." },
    { icon: "📊", title: "Marks Tracking", description: "Record and monitor academic performance." },
    { icon: "💰", title: "Fine Management", description: "Track imposed fines and payment status." }
  ];

  return (
    <div>
      <Head>
        <title>Apna Hostel RGPV - Hostel Management App</title>
        <meta name="description" content="Streamline hostel life with Apna Hostel RGPV - the comprehensive hostel management app for RGPV students." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apna Hostel RGPV</h1>
          <p className="text-xl md:text-2xl mb-8">Simplifying Hostel Life for RGPV Students</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">Download App</a>
            <Link href="/privacy-policy " className='bg-blue-700 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition'>
 Privacy Policy
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* App Preview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="bg-gray-800 rounded-3xl p-4 inline-block shadow-xl">
                  {/* Placeholder for app screenshot */}
                  <div className="bg-white rounded-2xl w-64 h-96 mx-auto overflow-hidden">
                    <div className="bg-blue-600 h-12 flex items-center justify-center text-white">
                      Apna Hostel RGPV
                    </div>
                    <div className="p-4">
                      <div className="bg-gray-200 h-40 rounded mb-4"></div>
                      <div className="bg-gray-200 h-4 rounded mb-2 w-3/4"></div>
                      <div className="bg-gray-200 h-4 rounded mb-2"></div>
                      <div className="bg-gray-200 h-4 rounded mb-2 w-5/6"></div>
                      <div className="flex justify-around mt-6">
                        <div className="bg-blue-600 w-10 h-10 rounded-full"></div>
                        <div className="bg-blue-600 w-10 h-10 rounded-full"></div>
                        <div className="bg-blue-600 w-10 h-10 rounded-full"></div>
                        <div className="bg-blue-600 w-10 h-10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">Your Complete Hostel Companion</h2>
                <p className="text-lg mb-6">
                  Apna Hostel RGPV brings hostel management to your fingertips with a 
                  comprehensive suite of features designed specifically for RGPV students.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Effortless Attendance</h3>
                      <p className="text-gray-600">Mark your hostel and mess attendance with location verification.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Streamlined Applications</h3>
                      <p className="text-gray-600">Submit and track applications and complaints in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Democratic Participation</h3>
                      <p className="text-gray-600">Nominate, vote, and participate in hostel committee elections.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every aspect of hostel life simplified with our feature-rich application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hostel Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of RGPV students who are simplifying their hostel life with Apna Hostel RGPV.
            </p>
            <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
              Download Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Apna Hostel RGPV</h3>
              <p className="text-gray-400">© 2025 All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className='hover:text-blue-400 transition'>
Privacy Policy
              </Link>
              <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
              <a href="#" className="hover:text-blue-400 transition">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
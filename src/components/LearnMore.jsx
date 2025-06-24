import React from 'react';
import Footer from './Footer.jsx';

const LearnMore = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">UoM x CodeCrafters</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <a
              className="mr-5 hover:text-gray-900"
              href="https://codecrafters.io"
              target="_blank"
            >
              CodeCrafters
            </a>
          </nav>
          <button
            onClick={onBack}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Back to Home
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Learn More About CodeCrafters
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is CodeCrafters?</h2>
              <p className="text-gray-700 leading-relaxed">
                CodeCrafters is a platform that helps developers learn by building real-world projects. 
                Instead of just reading tutorials, you'll implement actual features that companies use in production.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why UoM Students?</h2>
              <p className="text-gray-700 leading-relaxed">
                As University of Manchester students, you get exclusive access to CodeCrafters for free! 
                This is your opportunity to build industry-ready skills and stand out in the job market.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What You'll Learn</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Projects</h3>
                <p className="text-gray-700">Build actual features used by companies like Git, Redis, and Docker</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-on Learning</h3>
                <p className="text-gray-700">Learn by doing, not just reading. Get instant feedback on your code</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Ready</h3>
                <p className="text-gray-700">Develop skills that employers actually want and value</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have leveled up their skills with CodeCrafters. 
              As a UoM student, you get this premium learning experience completely free.
            </p>
            <button
              onClick={onBack}
              className="inline-block rounded border border-violet-600 bg-violet-600 px-8 py-4 font-medium text-white shadow-sm transition-colors hover:bg-violet-700 text-lg"
            >
              Start Learning Now →
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore; 
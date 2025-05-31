'use client';

import Button from '../ui/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Smart Resume Parsing for Better Hiring
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upload your resume and get instant insights. Our AI-powered parser extracts key information and helps you make better hiring decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/upload">
              <Button size="lg">
                Upload Resume
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
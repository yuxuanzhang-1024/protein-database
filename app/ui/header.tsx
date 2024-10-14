import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-4xl font-bold text-gray-800 font-sans">
          <Link href="/">
            <Image 
              src="/protein.ico" 
              alt="Protein Database" 
              width={50} 
              height={50} />
          </Link>
        </div>
        <nav className="flex space-x-10">
          <Link href="/">
            <p className="text-gray-800 hover:text-gray-600 font-sans">Home</p>
          </Link>
          <Link href="/database">
            <p className="text-gray-800 hover:text-gray-600 font-sans">Database</p>
          </Link>
          <a href="https://hanyugao.com/">
            <p className="text-gray-800 hover:text-gray-600 font-sana">About Us</p>
          </a>
          <Link href="/about">
          <div className="flex items-center text-gray-800 hover:text-gray-600 font-sans">
              <p className="order-1">Github</p>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};
import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-4xl font-bold text-gray-800">
          <Link href="/">
            <p>Logo</p>
          </Link>
        </div>
        <nav className="flex space-x-10">
          <Link href="/">
            <p className="text-gray-800 hover:text-gray-600">Home</p>
          </Link>
          <Link href="/database">
            <p className="text-gray-800 hover:text-gray-600">Database</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-800 hover:text-gray-600">About Us</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};
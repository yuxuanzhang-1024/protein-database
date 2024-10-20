"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaHome, FaDatabase, FaInfoCircle, FaTimes, FaBars } from "react-icons/fa";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="fixed top-0 w-full bg-blue-500 text-white z-10 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className='flex items-center'>
            <Image src="/logo.ico" alt="TangleDB" width={40} height={40}></Image>
            <h1 className="text-2xl font-bold">TangleDB</h1>
          </Link>
        </motion.div>
        <motion.ul
          className="hidden md:flex space-x-4 text-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/">
              <button className="flex items-center" aria-label="Home">
                <FaHome className="mr-1" /> Home
              </button>
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/database">
              <button className="flex items-center" aria-label="Database">
                <FaDatabase className="mr-1" /> Database
              </button>
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="https://hanyugao.com">
              <button className="flex items-center" aria-label="About Us">
                <FaInfoCircle className="mr-1" /> About Us
              </button>
            </Link>
          </motion.li>
        </motion.ul>
        <motion.div
          className="md:hidden text-white focus:outline-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </motion.div>
      </nav>
    {isMenuOpen && (
      <nav className="md:hidden bg-white shadow-md">
        <ul className="flex flex-col">
          <li>
            <Link href="/">
              <button className="flex items-center w-full py-2 px-4 text-blue-500 hover:bg-gray-100 transition-colors duration-300" aria-label="Home">
                <FaHome className="mr-1" /> Home
              </button>
            </Link>
          </li>
          <li>
            <Link href="/database">
              <button className="flex items-center w-full py-2 px-4 text-blue-500 hover:bg-gray-100 transition-colors duration-300" aria-label="Database">
                <FaDatabase className="mr-1" /> Database
              </button>
            </Link>
          </li>
          <li>
            <Link href="https://hanyugao.com">
              <button className="flex items-center w-full py-2 px-4 text-blue-500 hover:bg-gray-100 transition-colors duration-300" aria-label="About Us">
                <FaInfoCircle className="mr-1" /> About Us
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )}
  </header>
  );
};
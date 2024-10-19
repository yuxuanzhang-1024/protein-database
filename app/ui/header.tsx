"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { FaHome, FaDatabase, FaInfoCircle } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">TangleDB</h1>
      </motion.div>
      <nav>
        <motion.ul
          className="flex space-x-10"
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
            <a href="https://hanyugao.com">
              <button className="flex items-center" aria-label="About Us">
                <FaInfoCircle className="mr-1" /> About Us
              </button>
            </a>
          </motion.li>
        </motion.ul>
      </nav>
    </div>
  </header>
  );
};
"use client";
// import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <NextUIProvider>
      <main className="container mx-auto mt-8 px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Welcome to TangleDB</h2>
          <p className="mb-4">
            TangleDB is a comprehensive database focusing on protein assembly structures with inter-chain entanglement. Our database provides valuable insights into the complex world of protein structures and their interactions.
          </p>
          <div className="mb-8">
            <motion.div
              className="relative w-full h-full md:h-full rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src='/home.png'
                alt="Protein structure"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <Link href="/database">
                <button
                  className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                  aria-label="Next image"
                >
                  Database
                </button>
              </Link>
            </motion.div>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Our Focus</h3>
          <p className="mb-4">
            At TangleDB, we specialize in cataloging and analyzing protein assembly structures that exhibit inter-chain entanglement. This unique focus allows researchers and scientists to delve deeper into the intricate world of protein interactions and their functional implications.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Comprehensive database of entangled protein structures</li>
            <li>Advanced search and filtering options</li>
            <li>Detailed structural analysis tools</li>
            <li>Regular updates with newly discovered structures</li>
          </ul>
          <p className="mb-4">
            Whether you're a biochemist, structural biologist, or a curious student, TangleDB offers a wealth of information to support your research and understanding of complex protein structures.
          </p>
        </motion.section>
      </main>
    </NextUIProvider>
  );
}

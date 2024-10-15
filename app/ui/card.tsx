import React from 'react';
import { ProteinType } from '../lib/definitions';
import Image from 'next/image';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

// const ImageCard = ({ image, title, description }) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
//         loading="lazy"
//       />
//       <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
//         <h3 className="text-white text-lg font-semibold">{title}</h3>
//         <p className="text-white text-sm">{description}</p>
//       </div>
//     </div>
//   );
// };


export default function ProteinCard(protein: ProteinType) {
  const ID = protein.ID;
  const Image_Url = protein.Image_Url
  const File_Url = protein.File_Url
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500">
      <Image
        src={Image_Url}
        alt={ID}
        className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
        loading="lazy"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">{ID}</h3>
        {/* <p className="text-white text-sm"></p> */}
        <div className="flex justify-between mt-2">
          {/* <button
            onClick={File_Url}
            className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            Download
          </button> */}
          <a
            href={File_Url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            Download
          </a>
          <a
            href={`/database/${protein.id}`}
            rel="noopener noreferrer"
            className="bg-green-500 text-white text-sm px-2 py-1 rounded-md flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="mr-2" />
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
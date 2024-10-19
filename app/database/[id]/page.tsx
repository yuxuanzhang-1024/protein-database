import NglViwer from '../../ui/viewer';
import { fetchProteinById } from '../../lib/data';
import React from "react";
import Link from 'next/link';

export default async function Page({params}: {params: {id: string;}})
{
    const id = params.id;
    const protein = await fetchProteinById(id);
    console.log(id);
    console.log(protein);
    const proteinData = {
        Uniprot_ID: [protein.Uniprot_ID, 'Uniprot ID'],
        GLN: [protein.GLN, 'GLN'],
        pLDDT: [protein.pLDDT, 'pLDDT'],
        BSA: [protein.BSA, 'BSA'],
        Core_GLN: [protein.Core_GLN, 'Core GLN'],
        Symmetry: [protein.Symmetry, 'Symmetry'],
        Proteome: [protein.Proteome, 'Proteome'],
    };

    return (
        <div className="max-w-6xl max-h-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex mt-20 mb-20">
            <div className="md:w-2/5 p-6">
              <h1 className="text-3xl font-bold mb-6 text-blue-500">Protein Introduction</h1>
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(proteinData).map(([key, value]) => (
                    <tr key={key} className="hover:bg-gray-100 transition-colors duration-200">
                      <td className="py-3 px-4 border-b border-gray-200 font-semibold text-gray-800 text-lg capitalize">
                        {value[1]}
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200 text-gray-500 text-lg relative group ">
                        {typeof value[0] === 'number' ? value[0].toFixed(4) : value[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between">
                <Link href={protein.File_Url}>
                  <button
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    aria-label="Explore more details about the protein"
                  >
                    Download
                  </button>
                </Link>
                <Link href={`https://www.uniprot.org/uniprotkb/${protein.Uniprot_ID}/entry`}>
                  <button
                    className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    aria-label="Explore more details about the protein"
                  >
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-3/5 p-6 flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
                <NglViwer pdbUrl={protein?.File_Url} persp="cartoon" />
            </div>
        </div>
    );
}

// const ProteinIntroductionPage = () => {
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [showError, setShowError] = useState(false);

//   const proteinData = {
//     name: "Hemoglobin",
//     structure: "Tetramer",
//     function: "Oxygen transport",
//     molecularWeight: "64,500 Da",
//     additionalInfo: "Essential for red blood cells"
//   };

//   const handleZoomIn = () => {
//     setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2));
//   };

//   const handleZoomOut = () => {
//     setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
//   };

//   const handleImageError = () => {
//     setShowError(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:w-1/2 p-6">
//             <h1 className="text-3xl font-bold mb-6 text-indigo-700">Protein Introduction</h1>
//             <table className="w-full border-collapse">
//               <tbody>
//                 {Object.entries(proteinData).map(([key, value]) => (
//                   <tr key={key} className="hover:bg-gray-100 transition-colors duration-200">
//                     <td className="py-3 px-4 border-b border-gray-200 font-semibold text-gray-700 capitalize">
//                       {key.replace(/([A-Z])/g, " $1").trim()}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-200 text-gray-600 relative group">
//                       {value}
//                       {key === "additionalInfo" && (
//                         <span className="ml-2 text-indigo-500 cursor-pointer">
//                           <FaInfoCircle />
//                           <span className="absolute invisible group-hover:visible bg-indigo-600 text-white text-xs rounded py-1 px-2 right-0 bottom-full mb-2 w-48">
//                             {value}
//                           </span>
//                         </span>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button
//               className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
//               aria-label="Explore more details about the protein"
//             >
//               Explore More
//             </button>
//           </div>
//           <div className="md:w-1/2 p-6 flex flex-col items-center justify-center bg-gray-50">
//             {showError ? (
//               <div className="text-red-500 text-center">
//                 <p>Error loading image. Please try again later.</p>
//               </div>
//             ) : (
//               <>
//                 <div className="relative overflow-hidden rounded-lg shadow-md w-full h-64 md:h-80">
//                   <img
//                     src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
//                     alt="3D representation of hemoglobin protein structure"
//                     className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out"
//                     style={{ transform: `scale(${zoomLevel})` }}
//                     onError={handleImageError}
//                   />
//                 </div>
//                 <div className="mt-4 flex space-x-4">
//                   <button
//                     onClick={handleZoomIn}
//                     className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
//                     aria-label="Zoom in"
//                   >
//                     <FaSearch className="text-lg" />
//                     <span className="sr-only">Zoom in</span>
//                   </button>
//                   <button
//                     onClick={handleZoomOut}
//                     className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
//                     aria-label="Zoom out"
//                   >
//                     <FaSearch className="text-lg transform rotate-90" />
//                     <span className="sr-only">Zoom out</span>
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

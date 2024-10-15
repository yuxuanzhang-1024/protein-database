"use client";
import React from "react";

import { ProteinType } from "../lib/definitions";
import ProteinCard from "./card";
import { useGenerateProtiensPerPage } from "../lib/utils";

export default function ProteinGallery({ Proteins, currentPage}: 
    { Proteins: ProteinType[]; currentPage: number})
    {
        // const [proteinsPerPage, setProteinsPerPage] = useState(8);

        // useEffect(() => {
        //     const handleResize = () => {
        //       if (window.innerWidth < 640) {
        //         setProteinsPerPage(2);
        //       } else if (window.innerWidth < 1024) {
        //         setProteinsPerPage(4);
        //       } else {
        //         setProteinsPerPage(8);
        //       }
        //     };
        
        //     window.addEventListener("resize", handleResize);
        //     handleResize();
            
        //     return () => window.removeEventListener("resize", handleResize);
        //   }, []);
        const proteinsPerPage = useGenerateProtiensPerPage();
        const currentProteins = Proteins.slice((currentPage - 1) * proteinsPerPage, currentPage * proteinsPerPage);
        
        return (
            <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProteins.map((protein, index) => (
                <ProteinCard key={index} {...protein} />
              ))}
            </div>
            </div>
        )
    };

// const ImageGallery = ({ images }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [imagesPerPage, setImagesPerPage] = useState(8);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setImagesPerPage(2);
//       } else if (window.innerWidth < 1024) {
//         setImagesPerPage(4);
//       } else {
//         setImagesPerPage(8);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const indexOfLastImage = currentPage * imagesPerPage;
//   const indexOfFirstImage = indexOfLastImage - imagesPerPage;
//   const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

//   const totalPages = Math.ceil(images.length / imagesPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
//   const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {currentImages.map((image, index) => (
//           <ImageCard key={index} {...image} />
//         ))}
//       </div>
//       <div className="mt-8 flex justify-center items-center space-x-4">
//         <button
//           onClick={goToPrevPage}
//           disabled={currentPage === 1}
//           className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50"
//           aria-label="Previous page"
//         >
//           <FaChevronLeft />
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//           <button
//             key={number}
//             onClick={() => paginate(number)}
//             className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
//               currentPage === number
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             aria-label={`Page ${number}`}
//             aria-current={currentPage === number ? "page" : undefined}
//           >
//             {number}
//           </button>
//         ))}
//         <button
//           onClick={goToNextPage}
//           disabled={currentPage === totalPages}
//           className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50"
//           aria-label="Next page"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const dummyImages = [
//     {
//       image: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95",
//       title: "Beautiful Landscape",
//       description: "A serene mountain view"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb",
//       title: "City Lights",
//       description: "Vibrant nightlife in the city"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee",
//       title: "Ocean Sunset",
//       description: "Golden hour at the beach"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892",
//       title: "Forest Trail",
//       description: "A peaceful walk in nature"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682687981674-0927add86f2b",
//       title: "Urban Architecture",
//       description: "Modern buildings in the city"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d",
//       title: "Desert Oasis",
//       description: "A hidden gem in the sand dunes"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682687980918-3c2149a8f110",
//       title: "Snowy Mountains",
//       description: "Winter wonderland peaks"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682687981630-cefe9cd73072",
//       title: "Tropical Paradise",
//       description: "Crystal clear waters and palm trees"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682687981325-7efe18d598e2",
//       title: "Historical Landmark",
//       description: "Ancient ruins with a story to tell"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1682687981296-1f09375661c1",
//       title: "Wildlife Safari",
//       description: "Exotic animals in their natural habitat"
//     }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-3xl font-bold text-gray-800">Image Gallery</h1>
//         </div>
//       </header>
//       <main>
//         <ImageGallery images={dummyImages} />
//       </main>
//     </div>
//   );
// };

// export default App;
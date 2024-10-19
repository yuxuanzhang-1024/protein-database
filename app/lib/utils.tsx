'use client';
import { useEffect, useState } from "react";
import { ProteinFilterType } from "./definitions";
import { ProteinType } from "./definitions";
export const useGenerateProtiensPerPage=() => {
    const [proteinsPerPage, setProteinsPerPage] = useState(24);
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 640) {
            setProteinsPerPage(6);
        } else if (window.innerWidth < 1024) {
            setProteinsPerPage(12);
        } else {
            setProteinsPerPage(24);
        }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return proteinsPerPage;
}

export const symmetryOptions = ()=>{
  return [{label:'C2'}, {label:'C3'}, {label:'All'}];
}

export const generateDefaultSearchConfig = ({proteins}:{proteins: ProteinType[]}) => {
  return {
    Uniprot_ID: '',
    // 
    minGLN: Math.floor(Math.min(...proteins.map((protein) => protein.GLN))),
    maxGLN: Math.floor(Math.max(...proteins.map((protein) => protein.GLN)))+1,
    minpLDDT: Math.floor(Math.min(...proteins.map((protein) => protein.pLDDT))),
    maxpLDDT: Math.floor(Math.max(...proteins.map((protein) => protein.pLDDT)))+1,
    minBSA: Math.floor(Math.min(...proteins.map((protein) => protein.BSA))/100)*100,
    maxBSA: Math.floor(Math.max(...proteins.map((protein) => protein.BSA))/100)*100+100,
    minCore_GLN: Math.floor(Math.min(...proteins.map((protein) => protein.Core_GLN))),
    maxCore_GLN: Math.floor(Math.max(...proteins.map((protein) => protein.Core_GLN)))+1,
    Symmetry: 'All',
  };
}


export const useProteinFilterCondition = () => {
  const [useProteinFilterCondition, setUseProteinFilterCondition] = useState<ProteinFilterType>({
    Uniprot_ID: '',
    minGLN: 0,
    maxGLN: 100,
    minpLDDT: 0,
    maxpLDDT: 100,
    minBSA: 0,
    maxBSA: 100,
    minCore_GLN: 0,
    maxCore_GLN: 100,
    Symmetry: '',
  });

  return {
    useProteinFilterCondition,
    setUseProteinFilterCondition
  };
}
export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
  
    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
      return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
  
    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };
  
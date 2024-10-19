import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaDownload } from "react-icons/fa";
import ProteinCard from "./card";
import { ProteinType } from "../lib/definitions";
import { useGenerateProtiensPerPage } from "../lib/utils";
import { Pagination } from "@nextui-org/react";

export default function ProteinGallery({ Proteins}: { Proteins: ProteinType[]}) {
    const [currentPage, setCurrentPage] = useState(1);
    const proteinsPerPage = useGenerateProtiensPerPage();
    const totalPages = Math.ceil(Proteins.length / proteinsPerPage);
    const currentProteins = Proteins.slice((currentPage - 1) * proteinsPerPage, currentPage * proteinsPerPage);
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProteins.map((protein, index) => (
              <ProteinCard key={index} {...protein} />
            ))}
          </div>
          <div className="flex flex-col gap-5 mt-8 items-center">
            <Pagination
              size="lg"
              total={totalPages}
              onChange={paginate}
            />
          </div>
        </div>
      );
    };

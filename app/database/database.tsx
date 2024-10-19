'use client';
import { useState} from 'react';
import { Filter } from '../lib/data';
import { ProteinType } from '../lib/definitions';
import ProteinCard from '../ui/card';
import { ProteinFilterType } from '../lib/definitions';
import { useDebouncedCallback } from 'use-debounce';
import {Slider,Select, SelectItem,Input, Button, Pagination} from "@nextui-org/react";
import { generateDefaultSearchConfig, symmetryOptions,useGenerateProtiensPerPage  } from '../lib/utils';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";


export default function App({proteins}: {proteins: ProteinType[]}) {
    const [filteredProteins, setFilteredProteins] = useState(proteins);
    const defaultSearchConfig = generateDefaultSearchConfig({proteins});
    const [filterCondition, setFilterCondition] = useState<ProteinFilterType>(
      generateDefaultSearchConfig({proteins})
    );
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [selectedSymmetry, setSelectedSymmetry] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const proteinsPerPage = useGenerateProtiensPerPage();
    const [currentProteins, setCurrentProteins] = useState(
      proteins.slice((currentPage - 1) * proteinsPerPage, currentPage * proteinsPerPage)
    );
    const totalPages = Math.ceil(filteredProteins.length / proteinsPerPage);
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
      setCurrentProteins(
        filteredProteins.slice((pageNumber - 1) * proteinsPerPage, pageNumber * proteinsPerPage)
      );
    }

    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };
    
    const handleSearch = useDebouncedCallback((value: string|number[]|number, prop_type: string) => {
      if (prop_type === 'GLN' || prop_type === 'pLDDT' || prop_type === 'BSA' || prop_type === 'Core_GLN'){
        if (typeof value === 'number') {
          console.log(value);
          throw new Error('value should be a number list');
        }
        setFilterCondition({
          ...filterCondition,
          ['min' + prop_type]: value[0],
          ['max' + prop_type]: value[1]
        });
      }else{
        setFilterCondition({
          ...filterCondition,
          [prop_type]: value
        });
      }
      setFilteredProteins(Filter({proteins, filterCondition, prop_type, value}));
      setCurrentPage(1);
    }, 10);

    const handleReset = () => {
      setFilterCondition(defaultSearchConfig);
      setFilteredProteins(proteins);
      setSelectedSymmetry('');
      setCurrentPage(1);
    }
    return (
      <div className="container mx-auto mt-8 px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-500">Database</h2>
            <button
              onClick={toggleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 flex items-center"
            >
              Search{isSearchVisible ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
              {/* <FaSearch className="mr-2" /> {isSearchVisible ? "Hide Search" : "Show Search"} */}
            </button>
          </div>
          {/* <p>GLN: {filterCondition.minGLN} - {filterCondition.maxGLN}</p> */}
          <AnimatePresence>
          {isSearchVisible && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <div className="mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="Uniprot ID"
                size = "sm"
                label="Uniprot ID"
                value={filterCondition.Uniprot_ID}
                onChange={(e) => handleSearch(e.target.value, 'Uniprot_ID')}></Input>
              <Select
                aria-label="Symmetry"
                placeholder="Select the symmetry type"
                size = "lg"
                selectedKeys={selectedSymmetry ? [selectedSymmetry] : []}
                onSelectionChange={(keys) => {
                  handleSearch(Array.from(keys)[0], 'Symmetry')
                  setSelectedSymmetry(Array.from(keys)[0] as string);
                }}
              >
                {symmetryOptions().map((symmetry) => (
                  <SelectItem key={symmetry.label}>
                    {symmetry.label}
                  </SelectItem>
                ))}
              </Select>
              <Button size='lg' onClick={handleReset} className='bg-blue-500 text-white'>
                Reset
              </Button>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full sm:w-5/12 ml-3 mb-4 sm:mb-0">
                <h2 className="text-m font-bold mb-2  mt-2 text-gray-800">GLN</h2>
                <div className="mb-2">
                  <Slider 
                    aria-label="GLN"
                    step={0.1} 
                    minValue={defaultSearchConfig.minGLN}
                    maxValue={defaultSearchConfig.maxGLN}
                    defaultValue={[defaultSearchConfig.minGLN, defaultSearchConfig.maxGLN]}
                    value={[filterCondition.minGLN, filterCondition.maxGLN]}
                    hideValue={true}
                    className="max-w-2xl"
                    onChange={(value) => handleSearch(value, 'GLN')}
                  />
                </div>
                <div className="flex justify-between items-center mb-1 mt-2">
                  <span className="text-sm font-medium text-gray-600">Min: {filterCondition.minGLN}</span>
                  <span className="text-sm font-medium text-gray-600">Max: {filterCondition.maxGLN}</span>
                </div>
              </div>
              <div className="w-full sm:w-5/12 ml-3 mb-4 sm:mb-0">
                <h2 className="text-m font-bold mb-2  mt-2 text-gray-800">pLDDT</h2>
                <div className="mb-2">
                  <Slider 
                    aria-label="pLDDT"
                    step={1} 
                    minValue={defaultSearchConfig.minpLDDT}
                    maxValue={defaultSearchConfig.maxpLDDT}
                    defaultValue={[defaultSearchConfig.minpLDDT, defaultSearchConfig.maxpLDDT]}
                    value = {[filterCondition.minpLDDT, filterCondition.maxpLDDT]}
                    hideValue={true}
                    className="max-w-2xl"
                    onChange={(value) => handleSearch(value, 'pLDDT')
                    }
                  />
                </div>
                <div className="flex justify-between items-center mb-1 mt-2">
                  <span className="text-sm font-medium text-gray-600">Min: {filterCondition.minpLDDT}</span>
                  <span className="text-sm font-medium text-gray-600">Max: {filterCondition.maxpLDDT}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full sm:w-5/12 ml-3 mb-4 sm:mb-0">
                <h2 className="text-m font-bold mb-2  mt-2 text-gray-800">BSA</h2>
                <div className="mb-2">
                  <Slider 
                    aria-label="BSA"
                    step={100} 
                    minValue={defaultSearchConfig.minBSA}
                    maxValue={defaultSearchConfig.maxBSA}
                    defaultValue={[defaultSearchConfig.minBSA, defaultSearchConfig.maxBSA]}
                    value = {[filterCondition.minBSA, filterCondition.maxBSA]}
                    hideValue={true}
                    className="max-w-2xl"
                    onChange={(value) => handleSearch(value, 'BSA')
                    }
                  />
                </div>
                <div className="flex justify-between items-center mb-1 mt-2">
                  <span className="text-sm font-medium text-gray-600">Min: {filterCondition.minBSA}</span>
                  <span className="text-sm font-medium text-gray-600">Max: {filterCondition.maxBSA}</span>
                </div>
              </div>
              <div className="w-full sm:w-5/12 ml-3 mb-4 sm:mb-0">
                <h2 className="text-m font-bold mb-2  mt-2 text-gray-800">Core GLN</h2>
                <div className="mb-2">
                  <Slider 
                    aria-label="Core GLN"
                    step={0.1} 
                    minValue={defaultSearchConfig.minCore_GLN}
                    maxValue={defaultSearchConfig.maxCore_GLN}
                    defaultValue={[defaultSearchConfig.minCore_GLN, defaultSearchConfig.maxCore_GLN]}
                    value = {[filterCondition.minCore_GLN, filterCondition.maxCore_GLN]}
                    hideValue={true}
                    className="max-w-2xl"
                    onChange={(value) => handleSearch(value, 'Core_GLN')
                    }
                  />
                </div>
                <div className="flex justify-between items-center mb-1 mt-2">
                  <span className="text-sm font-medium text-gray-600">Min: {filterCondition.minCore_GLN}</span>
                  <span className="text-sm font-medium text-gray-600">Max: {filterCondition.maxCore_GLN}</span>
                </div>
              </div>
            </div>
            </div>
          </motion.div>)}
          </AnimatePresence>
        <div className='items-center mx-auto p-6 bg-white rounded-lg shadow-lg'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProteins.map((protein, index) => (
                  <ProteinCard key={index} {...protein} />
              ))}
            </div>
            <div className="flex flex-col gap-5 mt-8 items-center">
              <Pagination
                showControls
                size="lg"
                total={totalPages}
                page={currentPage}
                onChange={paginate}
              />
            </div>
        </div>
        </motion.section>
      </div>
    );
}
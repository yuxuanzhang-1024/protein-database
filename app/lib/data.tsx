import { PrismaClient } from '@prisma/client';
import { ProteinType, ProteinFilterType } from './definitions';
import { tr } from 'framer-motion/client';

const prisma = new PrismaClient();

export async function fetchAllProteins() {
  return await prisma.protein.findMany() as ProteinType[];
}

export function Filter({proteins, filterCondition, prop_type, value}: {
  proteins: ProteinType[]; 
  filterCondition: ProteinFilterType;
  prop_type: string;
  value: any;}) {
    let truefilterCondition = { ...filterCondition };

    if (prop_type === 'GLN' || prop_type === 'pLDDT' || prop_type === 'BSA' || prop_type === 'Core_GLN') {
      truefilterCondition = { ...filterCondition, ['min' + prop_type]: value[0], ['max' + prop_type]: value[1] };
    } else {
      truefilterCondition = { ...filterCondition, [prop_type]: value };
    }  const filteredProteins = proteins.filter((protein) => {
    return (
      protein.Uniprot_ID.includes(truefilterCondition.Uniprot_ID) &&
      protein.GLN >= truefilterCondition.minGLN &&
      protein.GLN <= truefilterCondition.maxGLN &&
      protein.pLDDT >= truefilterCondition.minpLDDT &&
      protein.pLDDT <= truefilterCondition.maxpLDDT &&
      protein.BSA >= truefilterCondition.minBSA &&
      protein.BSA <= truefilterCondition.maxBSA &&
      protein.Core_GLN >= truefilterCondition.minCore_GLN &&
      protein.Core_GLN <= truefilterCondition.maxCore_GLN
    );
  });
  if (truefilterCondition.Symmetry !== 'All') {
    const symmetry = truefilterCondition.Symmetry.charAt(0).toLowerCase() + truefilterCondition.Symmetry.slice(1);
    return filteredProteins.filter((protein) => protein.Symmetry === symmetry);
  }
  return filteredProteins;
}

export async function fetchProteinById(proteinId: string) {
  const protein = await prisma.protein.findUnique({
    where: { id: proteinId },
  });
  return protein as ProteinType;
}
import { PrismaClient } from '@prisma/client';
import { ProteinType } from './definitions';
const prisma = new PrismaClient();

export async function fetchAllProteins() {
  return await prisma.protein.findMany();
}

export async function fetchProteinById(proteinId: string) {
  const protein = await prisma.protein.findUnique({
    where: { id: proteinId },
  });
  return protein as ProteinType;
}


export async function fetchNumProteinPages(
  query:string, 
  proteinsPerPage: number
) {
  try {
    const proteins = await prisma.protein.findMany({
      where: {
        ID: {
          contains: query,
        },
      },
    });
    const pages = Math.ceil(proteins.length / proteinsPerPage);
    return pages;
  }catch(error){
    console.error("Database Error", error);
    throw new Error("Error in fetching the number of protein pages");
  }
}

export async function fetchProteins(
  query:string, 
) {
  try {
    const proteins = await prisma.protein.findMany({
      where: {
        ID: {
          contains: query,
        },
      },
    });
    return proteins;
  }catch(error){
    console.error("Database Error", error);
    throw new Error("Error in fetching proteins");
  }
}

export async function fetchProteinsByPage(
  currentPage: number,
  query: string,
  proteinsPerPage: number
){
  try {
    const proteins = await prisma.protein.findMany({
      where: {
        ID: {
          contains: query,
        },
      },
      skip: (currentPage - 1) * proteinsPerPage,
      take: proteinsPerPage,
    });
    return proteins;
  }catch(error){
    console.error("Database Error", error);
    throw new Error("Error in fetching proteins by page");
  }
}


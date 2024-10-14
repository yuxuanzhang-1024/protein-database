import { PrismaClient } from '@prisma/client';
import { ProteinType } from './definitions';
const prisma = new PrismaClient();

export async function fetchAllProteins() {
  return await prisma.protein.findMany();
}

export async function fetchProteinById({ proteinId } : { proteinId: string }) {
  const protein = await prisma.protein.findUnique({
    where: { id : proteinId },
  });
  return protein as ProteinType;
}



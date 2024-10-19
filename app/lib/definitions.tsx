export type ProteinType = {
    id: string;
    Uniprot_ID: string;
    GLN: number;
    pLDDT: number;
    BSA: number;
    Core_GLN: number;
    Symmetry: string;
    Proteome: string;
    File_Url: string;
    Image_Url: string;
  };

export type ProteinFilterType = {
    Uniprot_ID: string;
    minGLN: number;
    maxGLN: number;
    minpLDDT: number;
    maxpLDDT: number;
    minBSA: number;
    maxBSA: number;
    minCore_GLN: number;
    maxCore_GLN: number;
    Symmetry: string;
};
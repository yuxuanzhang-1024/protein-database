import React from 'react';
import { ProteinType } from '../lib/definitions';

export default function ProteinCard(protein: ProteinType) {
  const { id, ID, GLN, pLDDT, BSA, Core_GLN, Symmetry, Proteome, File_Url, Image_Url } = protein;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={Image_Url} alt={ID} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ID}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  );
}
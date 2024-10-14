import React from 'react';
import { ProteinType } from '../lib/definitions';
import Image from 'next/image';

export default function ProteinCard(protein: ProteinType) {
  const ID = protein.ID;
  const Image_Url = protein.Image_Url
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={Image_Url} alt={ID} width={300} height={300} />
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
import React from 'react';
import { ProteinType } from '../lib/definitions';

export default async function ProteinCard(protein: ProteinType){
    const ID = protein.ID;
    const Image_Url = protein.Image_Url;
    return (
        <div className="card bg-white shadow-lg rounded-lg w-80">
          <figure>
            <img src={Image_Url} alt={ID} className="rounded-t-lg w-full h-48 object-cover" />
          </figure>
          <div className="p-4 text-center">
            <div className="text-xl font-semibold mb-4">{ID}</div>
            <div className="flex justify-between space-x-2">
              <button className="btn btn-primary px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600">
                Action 1
              </button>
              <button className="btn btn-secondary px-4 py-2 text-lg bg-gray-500 text-white rounded hover:bg-gray-600">
                Action 2
              </button>
            </div>
          </div>
        </div>
      );
}
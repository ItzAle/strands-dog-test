"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";

// listado basico de razas, buscador con un useState y un filter
export default function BreedsList() {
  const breeds = useSelector((state: RootState) => state.breeds.breeds);
  const [search, setSearch] = useState("");

  const filteredBreeds = breeds.filter(
    (breed) => breed.toLowerCase().includes(search.toLowerCase()) // filtro de razas teniendo en cuenta que en la api las razas estan en minusculas
  );

  // renderizacion del componente
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBreeds.map((breed) => (
          <li
            key={breed}
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm text-white text-center"
          >
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

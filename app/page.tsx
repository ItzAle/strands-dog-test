"use client";

import BreedsList from "@/components/BreedsList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds, fetchImagesCount } from "@/store/breedsSlice";
import { RootState, AppDispatch } from "@/store/store";
import DogPieChart from "@/components/PieChart";

export default function BreedsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.breeds.loading);
  const [activeTab, setActiveTab] = useState("breeds");

  // fetch de las razas y las imágenes
  useEffect(() => {
    dispatch(fetchBreeds()).then((action) => {
      if (fetchBreeds.fulfilled.match(action)) {
        dispatch(fetchImagesCount(action.payload));
      }
    });
  }, [dispatch]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dogs Breeds Explorer</h1>

      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("breeds");
              }}
              className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === "breeds"
                  ? "text-white bg-blue-700 dark:bg-blue-600"
                  : "hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
            >
              Breeds List
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("distribution");
              }}
              className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === "distribution"
                  ? "text-white bg-blue-700 dark:bg-blue-600"
                  : "hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
            >
              Top 10 Breeds
            </a>
          </li>
        </ul>

        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          {activeTab === "breeds" && (
            <>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Breeds List
              </h3>
              {loading ? <p>Loading breeds...</p> : <BreedsList />}
            </>
          )}

          {activeTab === "distribution" && (
            <>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Top 10 Breeds by Image Count
              </h3>

              {loading ? (
                <p>Loading chart data...</p>
              ) : (
                <div className="mb-8">
                  <DogPieChart />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

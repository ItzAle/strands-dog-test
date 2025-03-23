"use client";

import BreedsList from "@/components/BreedsList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds, fetchImagesCount } from "@/store/breedsSlice";
import { RootState, AppDispatch } from "@/store/store";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps,
} from "recharts";

// colores para los gráficos
const COLORS = [
  "#0088FE", 
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF6384",
  "#36A2EB",
  "#9966FF",
  "#4BC0C0",
  "#F7464A",
  "#46BFBD",
];

// tooltip para el gráfico circular
const PieTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-md border border-gray-200 dark:border-gray-700">
        <p className="font-semibold">{data.name}</p>
        <p>Images: {data.value}</p>
        <p>Percentage: {data.percent.toFixed(2)}%</p>
      </div>
    );
  }
  return null;
};

export default function BreedsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.breeds.loading);
  const imagesCount = useSelector(
    (state: RootState) => state.breeds.imagesCount
  ); // imagenes de cada raza
  const [activeTab, setActiveTab] = useState("breeds");

  // fetch de las razas y las imágenes
  useEffect(() => {
    dispatch(fetchBreeds()).then((action) => {
      if (fetchBreeds.fulfilled.match(action)) {
        dispatch(fetchImagesCount(action.payload));
      }
    });
  }, [dispatch]);

  // preparación de datos para el gráfico de pie
  const preparePieData = () => {
    const totalImages = Object.values(imagesCount).reduce(
      (sum, count) => sum + count,
      0
    );
    const totalBreeds = Object.keys(imagesCount).length;

    // datos para el gráfico circular (top 10)
    const pieData = Object.entries(imagesCount)
      .map(([breed, count]) => ({
        name: breed.charAt(0).toUpperCase() + breed.slice(1),
        value: count,
        percent: (count / totalImages) * 100,
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    return { pieData, totalBreeds };
  };

  const { pieData, totalBreeds } = loading
    ? { pieData: [], totalBreeds: 0 }
    : preparePieData();

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
                  <p className="text-sm text-gray-500 mb-2">
                    Showing top 10 breeds out of {totalBreeds} total breeds
                  </p>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name} ${percent.toFixed(1)}%`
                          }
                        >
                          {pieData.map((_, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<PieTooltip />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

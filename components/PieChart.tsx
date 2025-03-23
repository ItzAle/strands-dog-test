"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

// paleta de colores para el gráfico
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

type ChartData = {
  name: string;
  value: number;
  percent: number;
};

// componente de tooltip personalizado
const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string> & {
  payload?: Array<{ payload: ChartData }>;
}) => {
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

export default function DogPieChart() {
  const imagesCount = useSelector(
    (state: RootState) => state.breeds.imagesCount
  );
  const totalImages = Object.values(imagesCount).reduce(
    (sum, count) => sum + count,
    0
  );
  const totalBreeds = Object.keys(imagesCount).length;

  // renderizacion de los datos de las 10 razas
  const chartData = Object.entries(imagesCount)
    .map(([breed, count]) => ({
      name: breed.charAt(0).toUpperCase() + breed.slice(1),
      value: count,
      percent: (count / totalImages) * 100,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10); // solo mostrar 10 razas

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {Object.keys(imagesCount).length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-2">
            Showing top 10 breeds out of {totalBreeds} total breeds
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Total of images analyzed: {totalImages}
          </p>

          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${percent.toFixed(1)}%`
                  }
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

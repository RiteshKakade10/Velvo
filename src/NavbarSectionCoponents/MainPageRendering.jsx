import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Mostro from './NEW/Mostro';
import FENTYxSMURFS from './NEW/FENTYxSMURFS';
import Nitro from './NEW/Nitro';
import Palermo from './NEW/Palermo';
import MensNewArrival from './NEW/MensNewArrival';
import Jersey from './NEW/Jersey';
import LaunchCalendar from './NEW/LaunchCalender';
import FormulaF1 from './NEW/Formula/FormulaF1';

const componentMap = {
  'mostro': <Mostro />,
  'palermo': <Palermo />,
  'fenty-x-smurfs': <FENTYxSMURFS />,
  'nitro': <Nitro />,
  'mens-new-arrivals':<MensNewArrival/>,
  'jersey-styling': <Jersey />,
  'launch-calendar': <LaunchCalendar />,
  'formula-f1':<FormulaF1/>
};

export default function MainPageRendering() {
  const { category } = useParams();

  // Normalize slug: lowercase, remove spaces and special characters
  const normalizedCategory = category
    ?.toLowerCase()
    .replace(/\s+/g, '')      // remove all spaces
    .replace(/[^a-z0-9-]/g, ''); // remove special characters

  const ComponentToRender = componentMap[normalizedCategory] || null;

  return (
   <div className="pt-18 min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200">
  <div className="absolute top-4 left-4 z-10">
    <Link
      to="/New"
      className="text-blue-600 underline hover:text-blue-800 transition"
    >
      ← Back to New Section
    </Link>
  </div>

  {ComponentToRender ? (
    <div className="w-full h-full">{ComponentToRender}</div>
  ) : (
    <div className="flex items-center justify-center h-full text-red-500 text-lg">
      Section not found
    </div>
  )}
</div>

  );
}

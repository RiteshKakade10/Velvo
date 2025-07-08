import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Mostro from '../NavbarSectionCoponents/NEW/Mostro';
import FENTYxSMURFS from '../NavbarSectionCoponents/NEW/FENTYxSMURFS';
import Nitro from '../NavbarSectionCoponents/NEW/Nitro';
import Palermo from '../NavbarSectionCoponents/NEW/Palermo';
// Import other components as needed...

// Map of slug to component (all keys in lowercase and hyphenated)
const componentMap = {
  'mostro': <Mostro />,
  'palermo': <Palermo />,
  'fentyxsmurfs': <FENTYxSMURFS />,
  'nitro': <Nitro />,
  // 'jerseystyling': <JerseyStyling />,
  // 'launchcalendar': <LaunchCalendar />,
};

export default function NewSectionMain() {
  const { category } = useParams();

  // Normalize slug: lowercase, remove spaces and special characters
  const normalizedCategory = category
    ?.toLowerCase()
    .replace(/\s+/g, '')      // remove all spaces
    .replace(/[^a-z0-9-]/g, ''); // remove special characters

  const ComponentToRender = componentMap[normalizedCategory] || null;

  return (
    <div className="p-4 min-h-screen bg-white">
      <div className="mb-4">
        <Link
          to="/New"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          ← Back to New Section
        </Link>
      </div>

      {ComponentToRender ? (
        ComponentToRender
      ) : (
        <div className="text-center text-red-500 text-lg p-6">
          Section not found
        </div>
      )}
    </div>
  );
}

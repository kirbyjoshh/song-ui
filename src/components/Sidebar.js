import React from 'react';
import { FaHome, FaFire, FaMusic } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-60 shrink-0 bg-black px-5 py-6 flex flex-col">
      <h1 className="mb-10 text-2xl font-bold tracking-wide">SONG UI</h1>
      <nav className="flex flex-col gap-5 text-base">
        <button type="button" className="flex items-center text-left text-white">
          <FaHome className="mr-4" /> Home
        </button>
        <button type="button" className="flex items-center text-left text-[#b3b3b3] hover:text-white">
          <FaFire className="mr-4" /> Trending
        </button>
        <button type="button" className="flex items-center text-left text-[#b3b3b3] hover:text-white">
          <FaMusic className="mr-4" /> Music
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

import React from 'react';

function Nav() {
  return (
    <div className='bg-nav_color flex justify-between items-center h-16 px-4 border-b-2 border-red-500 '>
      <span className='font-bold text-white ml-16'>EduMastery</span>
      <ul className='flex flex-row gap-3'>
        <li className="px-5 py-2 font-semibold text-gray-400 cursor-pointer hover:text-white"><a href="#home">HOME</a></li>
        <li className="px-5 py-2 font-semibold text-gray-400 cursor-pointer hover:text-white"><a href="#about">ABOUT</a></li>
        <li className="pr-28 pl-5 py-2 font-semibold text-gray-400 cursor-pointer hover:text-white"><a href="#courses">COURSES</a></li>
      </ul>
    </div>
  );
}

export default Nav;
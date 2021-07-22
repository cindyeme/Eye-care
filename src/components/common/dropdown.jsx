/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Transition from './transition';

function Dropdown({ children, title, align, padding }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li
      className=" list-none"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <div
        className={`focus:outline-none ${padding} flex items-center
          focus:transition duration-150 ease-in-out cursor-pointer`}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        <span className="text-grayish-900 font-semibold hover:text-grayish-800 pr-2">{title}</span>
        <svg
          className="w-2 h-2 fill-current text-primary-800 font-bold 
            cursor-pointer ml-1 flex-shrink-0"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 
        5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"
          />
        </svg>
      </div>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className={`origin-top-right absolute  ${align}  
          w-48  bg-white py-2 mt-3 rounded shadow lg:shadow-lg`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <li className="list-none" onChange={() => setDropdownOpen(false)}>
          <ul className="flex flex-col divide-y divide-primary-900">{children}</ul>
        </li>
      </Transition>
    </li>
  );
}

export default Dropdown;

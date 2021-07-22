import React, { useState, useEffect, useRef } from 'react';


import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import logo from '../../images/logo.png';
import Dropdown from '../common/dropdown';
import Transition from '../common/transition';

function Header () {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState(false);
  // const [doctor, setDoctor] = useState(false);
  const [service, setService] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAction = () => {
    setAction(!action);
  };

  // detect whether user has scrolled the page down by 5px
  useEffect(() => {
    const scrollHandler = () => (window.pageYOffset > 5 ? setTop(false) : setTop(true));
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  //
  const ref = useRef(null);
  return (
    <>
    <header className={`fixed w-full z-50 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && 'bg-primary-600 shadow-lg'
        }`}
      ref={ ref }
    >
      <div className="max-w-full mx-auto px-4 lg:px-16 xl:px-20 py-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="w-12 lg:w-20 object-fit" />
            <span className="text-primary-900 font-poppins font-semibold text-lg">Zinny Eyecare</span>
          </Link>

          <button type="button" onClick={handleClick} className="ipad:hidden">
            {open ? (
                <svg
                  className="w-6 h-6 text-primary-800 cursor-pointer bg-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 cursor-pointer text-primary-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
          </button>
        
          <nav className="ipad:flex items-center space-x-32 hidden">
            <ul className="ipad:flex ipad:space-y-0 ipad:flex-grow ipad:flex-row ipad:flex-wrap ipad:space-x-10 ipad:items-center ">
              <li>
                  <NavLink
                  exact
                  to="/"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Home 
                </NavLink>
                </li>
                {/* About */}
              <li>
                <NavLink
                  to="/about-us"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    About us 
                </NavLink>
              </li>
              {/* Doctor */ }
              <li>
                <NavLink
                  to="/doctors"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Doctors 
                </NavLink>
              </li>
              {/* Actions & costs */}
              <Dropdown title="Actions &amp; Costs">
                <li className="px-5 pb-3 pt-2">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Retina 
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Glaucoma 
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Cataract
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Lasik 
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Oculoplasty 
                  </NavLink>
                </li>
              </Dropdown>
                {/* Service */ }
              <Dropdown title="Services">
                <li className="px-5 pb-3 pt-2">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Retina
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                    to="/actions"
                    activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                    >
                    Cataract
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                    to="/actions"
                    activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                    >
                    Lasik 
                  </NavLink>
                </li>
              </Dropdown>
                
              {/* <Dropdown title="Doctors">
                <li className="px-5 pb-3 pt-2">
                  <NavLink
                  to="/doctors/dr-ngozi"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Dr. Ngozi E., PhD 
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                  to="/docotrs/dr-ezinne"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Dr. Ezinne A., PhD 
                  </NavLink>
                </li>
                <li className="px-5 py-3">
                  <NavLink
                  to="/doctors/dr-ikenna"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Dr. Ikenna M., PhD 
                  </NavLink>
                </li>
              </Dropdown> */}
              
              {/* Help */}
              <li>
                <NavLink
                  to="/help"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Help 
                </NavLink>
              </li>
            </ul>
            <ul className="flex items-center space-x-12">
              {/* Login */}
              <li>
                <NavLink
                  to="/login"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Login 
                </NavLink>
              </li>
              {/* Sign up */}
              <li>
                <NavLink
                  to="/sign-up"
                  activeClassName=""
                  className="text-white bg-primary-900 px-4 py-2 font-semibold rounded-full hover:bg-primary-800 transition duration-300 ease-in-out"
                  >
                    Sign up 
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div>
        <Transition
        id="modal"
        className="fixed inset-0 z-50  overflow-hidden flex items-center justify-center transform px-2 my-24 ipad:hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal"
        show={open}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
      >
      <div className={`${open ? 'opacity-100 transition-opacity duration-300 ease-in' : 'hidden'} bg-white px-4 py-5 pt-6 w-full  rounded h-full overflow-y-auto transition-all duration-300 ease-out z-50 ipad:hidden`} >
        <ul className="flex flex-col space-y-5 divide-y divide-primary-700">
          <li className="pt-4">
            <NavLink
              exact
              to="/"
              activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
              >
                Home 
            </NavLink>
          </li>
          {/* About */}
          <li className="pt-4">
            <NavLink
              to="/about-us"
              activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
              >
                About us 
            </NavLink>
          </li>
          {/* Doctor */}
          <li className="pt-4">
            <NavLink
              to="/doctors"
              activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
              >
                Doctors 
            </NavLink>
          </li>
          {/* Actions & cost */}
          <li>
            <span className="text-grayish-900 font-semibold hover:text-primary-900 flex items-center justify-between focus:outline-none cursor-pointer" onClick={handleAction}
              >
                Actions &amp; Costs
                <FontAwesomeIcon icon={action ? faAngleUp : faAngleDown} className="text-lg" />
            </span>
              <ul className={`${action ? '' : 'hidden'} h-full transition-all duration-300 ease-in-out flex flex-col space-y-4 pt-4 divide-y overflow-y-auto`}>
                <li className="px-5">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Retina 
                  </NavLink>
                </li>
                <li className="px-5 pt-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Glaucoma 
                  </NavLink>
                </li>
                <li className="px-5 pt-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Cataract
                  </NavLink>
                </li>

              </ul>
            </li>
              {/* Services */}
            <li className="pt-4">
              <span className="text-grayish-900 font-semibold hover:text-primary-900 flex items-center justify-between focus:outline-none cursor-pointer" onClick={()=>setService(!service)}
                >
                  Services
                  <FontAwesomeIcon icon={service ? faAngleUp : faAngleDown} className="text-lg" />
              </span>
              <ul className={`${service ? '' : 'hidden'} h-full transition-all duration-300 ease-in-out flex flex-col space-y-4 pt-4 divide-y `}>
                <li className="px-5">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Cataract 
                  </NavLink>
                </li>
                <li className="px-5 pt-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Lasik 
                  </NavLink>
                </li>
                <li className="px-5 pt-3">
                  <NavLink
                  to="/actions"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Oculoplasty
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* Doctor */}
          {/* <li className="pt-4">
            <span className="text-grayish-900 font-semibold hover:text-primary-900 flex items-center justify-between focus:outline-none cursor-pointer" onClick={()=>setDoctor(!doctor)}
              >
                Doctor
                <FontAwesomeIcon icon={doctor ? faAngleUp : faAngleDown} className="text-lg" />
            </span>
              <ul className={`${doctor ? '' : 'hidden'} h-full transition-all duration-300 ease-in-out flex flex-col space-y-4 pt-4 divide-y `}>
                <li className="px-5 ">
                  <NavLink
                  to="/doctors/dr-ngozi"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Dr. Ngozi E., PhD 
                  </NavLink>
                </li>
                <li className="px-5 pt-3">
                  <NavLink
                  to="/doctors/dr-ezinne"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Dr. Ezinne A., PhD 
                  </NavLink>
                </li>
                <li className="px-5 pt-3">
                  <NavLink
                  to="/doctors/dr-ikenna"
                  activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                  >
                    Dr. Ikenna M., PhD 
                  </NavLink>
                </li>
              </ul>
          </li> */}
            
            {/* Help */}
            <li className="pt-4">
              <NavLink
                to="/help"
                activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
                >
                  Help 
              </NavLink>
            </li>
            {/* Login */}
          <li className="pt-4">
            <NavLink
              to="/login"
              activeClassName="text-primary-900" className="text-grayish-900 font-semibold hover:text-primary-900"
              >
                Login 
            </NavLink>
          </li>
          {/* Sign up */}
          <li className="py-6 pt-7">
            <NavLink
              to="/sign-up"
              activeClassName=""
              className="text-white bg-primary-900 px-4 py-2 font-semibold rounded-full hover:bg-primary-800 transition duration-300 ease-in-out"
              >
                Sign up 
            </NavLink>
          </li>
        </ul>
      </div>
    </Transition>
        <Transition
        className="fixed inset-0 z-40 bg-black bg-opacity-75 transition-opacity w-full max-w-full ipad:hidden"
        show={open}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      </div>
    
    </>
  );
};

export default Header;
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import circles from '../../images/circles.png';
import logo from '../../images/logo.png';

export default function Footer () {
  return (
    <section className="relative footer">
      <img src={ circles } alt="" className="bg-opacity-50 opacity-50 absolute right-0 object-fit lg:block hidden" />
      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="pt-16 xl:mt-12">
          <div className="bg-primary-900 py-5 md:px-6 rounded-lg clearfix text-center md:text-left md:flex items-center justify-between">
            <h1 className="text-white font-poppins tracking-wide py-5 px-4 text-xl md:text-3xl font-bold">Do you wish to book appointments easily?</h1>
            <p>
              <Link to="/book-appointment" className=" px-5 py-2 bg-white rounded-full text-primary-900 font-semibold hover:bg-primary-700 transition-all duration-300 ease-out shadow-md " >Register</Link>
            </p>
          </div>
          <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-7">
            {/*  */}
            <div className="sm:col-span-2">
              <div className="mt-">
                <Link to="/" className="flex items-center space-x-3">
                  <img src={logo} alt="logo" className="w-12 lg:w-20 object-fit" />
                  <span className="text-primary-900 font-poppins font-semibold text-lg">Zinny Eyecare</span>
                </Link>
                <p className="text-gray-600 py-5">Struggles to get to the clinic? Trying to reduce your exposure to COVID-19, as well as other contagious illnesses, and still need to see your doctor? Zinny Eyecare is safe and easy — receive quality care from anywhere.</p>
                <p className=" pb-2 text-gray-600">Phone (appointments): <strong>+2340813-5570-186</strong></p>
                <p className="pb-2 text-gray-600">Phone (general inquiries): <strong>+2340903-2983-321</strong></p>
              </div>
            </div>
            {/*  */ }
            <div className="sm:col-span-1">
              <div>
                <h3 className="font-bold text-lg mb-7 text-primary-900">About</h3>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Doctors
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Sign in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */ }
            <div className="sm:col-span-1">
              <div>
                <h3 className="font-bold text-lg mb-7 text-primary-900">Treatment</h3>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Retina
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Cataract
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      LASIK
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Glaucoma
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Oculoplasty
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */ }
            <div className="sm:col-span-2">
              <div>
                <h3 className="font-bold text-lg mb-7 text-primary-900">Company</h3>
                <ul className="flex flex-col space-y-3">
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Appointment cancellation policy
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Terms &amp; conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Disclaimers
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Patient survey
                    </Link>
                  </li>
                  <li>
                    <Link to="about-us" className="text-gray-800 hover:text-primary-900">
                      Information practices
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*  */ }
          <div className="mt-10 border-t-2">
            <div className="pt-8 pb-5 mx-auto max-w-3xl">
              <p className="font-medium text-center">&copy; Copyright { new Date().getFullYear() } Zinny Eyecare, Inc. All rights reserved.</p>
              <p className="pt-3 text-sm text-center">Use of this website and any information contained herein is governed by <a href="https://" className="text-primary-900 underline hover:no-underline pr-2">MIT law.</a>The content on Zinny Eyecare does not provide medical advice. Always consult a medical provider for diagnosis and treatment.</p>
              {/* Socials */}
              <ul className="py-6 flex items-center justify-center flex-wrap space-x-6 divide">
                <li>
                  <a href="https://" className="text-lg bg-primary-700 py-2 px-3 text-gray-100 rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear" style={{borderRadius: '50%'}}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="https://" className="text-lg bg-primary-700 py-2 px-3 text-white rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear" style={{borderRadius: '50%'}}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href="https://" className="text-lg bg-primary-700 py-2 px-3  text-white rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear" style={{borderRadius: '50%'}}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://" className="text-lg bg-primary-700 py-2 px-3  text-white rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear" style={{borderRadius: '50%'}}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
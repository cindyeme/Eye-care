import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import doc from '../../images/doc.jpg';


const Testimonials = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-primary-600 pointer-events-none lg:block hidden" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 xl:mt-12 pb-3">

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col space-y-8 items-center justify-items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-primary-900 font-semibold text-lg">-Testimonials</p>
              <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center">What<span className="text-primary-900 pr-4"> They</span>Say About Us</h1>
            </div>
          </div>
        </div>

        <div className="pt-16 mb-16"> 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-y-0">
            { [0,1,2].map(() => (<div className="sm:col-span-1">
              <div className="rounded-lg shadow-md border  group bg-white hover:shadow-new transition-all duration-300 ease-in-out py-5 px-4">
                <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start space-y-5">
                  <div className="flex space-x-4 items-center">
                    <>
                      <img src={ doc } alt="testimonial-author" className="w-14 h-14 object-fit rounded-md" />
                    </>
                    <div>
                      <h3 className="text-primary-900 font-semibold md:text-base text-base">QueenEsther Adaugo</h3>
                      <p className="text-primary-800 font-medium py-1">Scientist</p>
                      { [0, 1, 2, 3, 4].map(() => (<FontAwesomeIcon icon={ faStar } className="text-primary-900 text-xs" />)) }
                    </div>
                  </div>
                  <p>
                    <strong>Zinny Eyecare</strong> nam ac eros non orci cursus mattis vitae viverra tortor. Suspendisse potenti. Ut consequat dolor nulla, eu tempus lacus blandit id. Etiam dignissim ligula consectetur, fermentum nisl quis, varius diam.
                  </p>
                </div>
              </div>
            </div> ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';


const Testimonials = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-primary-600 pointer-events-none" aria-hidden="true" />
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
            <div className="sm:col-span-1">
              <div className="rounded-lg shadow-md border  group bg-white hover:shadow-new transition-all duration-300 ease-in-out py-5 px-4">
                <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start space-y-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';

import { Link } from 'react-router-dom';

import Title from '../../../components/sectionTitle/title';
import circles from '../../../images/circles.png';
import retin from '../../../images/serviceImages/eye-var.jpg';
import inspect from '../../../images/serviceImages/inspect.jpg';
import facit from '../../../images/serviceImages/eye-facit.jpg';

const ServiceBrief = () => {
  return (
    <section className="relative">
      <img src={circles} alt="" className="bg-opacity-50 opacity-50 absolute object-fit lg:block hidden" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 xl:mt-12">
        <Title heading="-What we Serve" noted="Our" title="Services" />

        <div className="pt-16"> 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 lg:gap-y-0">
            {/* 1st item */}
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg shadow  group bg-white py-5 px-4 hover:shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={retin} alt="" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Retina</h4>
                  <p className="text-gray-500">Enjoy international standard services with highly dedicated retina specialists.</p>
                </div>
              </div>
            </div>
            {/* 2nd item */}
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg hover:shadow  group bg-white py-5 px-4 shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={inspect} alt="" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Cataract</h4>
                  <p className="text-gray-500">With the latest surgical technology facilities, restore your vision with our experienced Optometrists.</p>
                </div>
              </div>
            </div>
            {/* 3rd item */}
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg shadow  group bg-white py-5 px-4 hover:shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={facit} alt="" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Lasik</h4>
                  <p className="text-gray-500">Our latest LASIK technology allows each patient to get personalized vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link to="/services" className="px-5 py-2 bg-primary-900 text-white shadow-new focus:ring-2 focus:ring-offset-2 hover:bg-primary-800 transition-all duration-300 ease-linear mx-auto text-center rounded-full font-semibold">
            Services offered
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceBrief;
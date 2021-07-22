import React from 'react';

import { Link } from 'react-router-dom';

import Title from '../../../components/sectionTitle/title';
import { doctors } from '../../../mocks/doctors-mock';
import circles from '../../../images/circles.png';
import doc from '../../../images/doc.jpg';

const DoctorsBrief = () => {
  return (
    <section className="relative">
      <img src={ circles } alt="" className="bg-opacity-50 opacity-50 absolute object-fit lg:block hidden z-30" />
      <div className="absolute inset-0 bg-primary-600 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 xl:mt-12 pb-3">

        <Title heading="-Our Doctors" noted="Highly" title="Qualified Doctors" />

        <div className="pt-16"> 
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 lg:gap-y-0">
            {
              doctors.map((doctor, i) => {
                return (
                  <div key={i} className="sm:col-span-1">
                    <div className="rounded-lg shadow-md border  group bg-gray-50 hover:bg-white transition-all duration-300 ease-in-out py-5 px-4 hover:shadow-lg">
                      <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start space-y-3">
                        <img src={doc} alt="" className="rounded-md text-left w-20 h-20 object-fit" style={{width: 100, height: 100}} />
                        <h4 className="text-primary-900 text-lg font-bold pt-4 text-center sm:text-left">{ doctor.name }</h4>
                        <h4 className="text-gray-500 text-center sm:text-left"><p className="font-semibold pb-1 text-center sm:text-left">{ `${doctor.patients} patients` }</p> { doctor.field }</h4>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-10 mb-16">
          <Link to="/services" className="px-5 py-2 bg-primary-900 text-white shadow-new focus:ring-2 focus:ring-offset-2 hover:bg-primary-800 transition-all duration-300 ease-linear mx-auto text-center rounded-full font-semibold">
            See more doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsBrief;
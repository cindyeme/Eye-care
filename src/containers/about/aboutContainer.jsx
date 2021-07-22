import React from 'react';

import bgImage from '../../images/hero-bg.png';
import doc from '../../images/doc.svg';
import fDoc from '../../images/lady_doc.png';
import Testimonials from './testimonials';


const AboutContainer = () => (
  <section className="relative">
    <div className="bg-cover bg-no-repeat w-full h-full absolute inset-0" style={ { backgroundImage: `url(${bgImage})` } } />
    <div className="relative h-scree max-w-[1300px] mx-auto px-4 sm:px-6" >
      <div className="grid lg:grid-cols-2 gap-y-6 pt-28 lg:pt-20 z-20">
        <div className="lg:col-span-1 lg:pt-20 order-2 lg:order-1">
          <img src={doc} alt="doctor" className="z-0 w-full" style={{height: 500}} />
        </div>

        <div className="lg:col-span-1 lg:pt-20 order-1 lg:order-2">
          <div>
            <div className="flex flex-col item-center lg:items-start space-y-4 mb-5">
              <p className="text-primary-900 font-semibold text-lg text-center lg:text-left">-About us</p>
              <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}><span className="text-primary-900 pr-4">Zinny</span>EyeCare Vision &amp; Mission</h1>
            </div>
            <p className="text-gray-600 lg:text-lg">
              At <strong>Zinny EyeCare, </strong> our vision is to be a role model for international standarda healthcare. Our mission is to always strive to provide the best quality treatment and patient care by professionals who are competent in their fields with high ethics.
            </p>
            <p className="text-gray-600 lg:text-lg pt-3">
              At Zinny Eye Center, you will find yourself at home in the hands of caring doctors who all have the same goal; to give your eyes the best care possible. We understand how unique your eyes are and offer personalized care. Whether treating or diagnosing, our surgeons are here to take care of you. Come see why Zinny Eye Center has been the first choice for many in eye care.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-6 pt-8 mt-4 lg:pt-20 z-20">
        <div className="lg:col-span-1">
          <div>
            <div className="flex flex-col item-center lg:items-start space-y-4 mb-5">
              <p className="text-primary-900 font-semibold text-lg text-center lg:text-left">-Why Us</p>
              <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Find the right <span className="text-primary-900 pr-4"> Care</span>right at your fingertips</h1>
            </div>
            <p className="text-gray-600 lg:text-lg pb-4">
              Zinny Eyecare has delivered the best in state-of-the-art eye care to Zinny Inc, Nigeria, patients. The team of board-certified ophthalmologists and optometrists includes renowned experts, many of who are also fellowship-trained in surgical specialties. Patients always get a warm welcome at Zinny Eyecare, and they frequently praise the team’s highly personalized approach to eye care.
            </p>
            <p className="text-gray-600 lg:text-lg">
              Patients as young as age 9 count on Zinny Eyecare for general eye care, including exams, glasses, LASIK evaluations, and more. The Eye Treatment Center team treats all types of eye disease, including cataracts, glaucoma, dry eyes, pterygium etc. Additionally, Zinny Eyecare offers a variety of surgical and nonsurgical oculoplastic care, such as blepharoplasty, Botox®, and dermal fillers, which are rarely found in ophthalmology practices.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1">
          <img src={fDoc} alt="doctor" className="w-full object-fit" style={{ width: '100%'}} />
        </div>
      </div>

      <Testimonials />
    </div>
  </section>
);


export default AboutContainer;
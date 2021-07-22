import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

import bgImage from '../../../images/hero-bg.png';
import hero from '../../../images/hero-img.png';
import ConsultForm from '../appointment/consult-form';
import { ButtonPrimary, ButtonTrans } from '../../../components/button/button';
import { SingleDoc } from '../../../components/svg/svg';


const HeroHome = () => {
  return (
    <section className="relative w-full">
      <div className="bg-cover bg-no-repeat w-full h-full absolute inset-0" style={ { backgroundImage: `url(${bgImage})` } } />
      <div className="relative h-scree max-w-[1300px] mx-auto px-4 sm:px-6" style={{maxWidth: 1300}}>
        <div className="grid lg:grid-cols-2 gap-y-6 pt-8 lg:pt-20 z-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-6 pt-8">
              <div className="text-primary-900 text-lg lg:text-xl font-semibold mt-20 flex items-center">
                <p>-Optometrist and Ophthamologists</p>
                <SingleDoc />
              </div>
              <h1 className="h1 leading-loose font-extrabold font-poppins text-3xl lg:text-4xl xl:text-5xl" style={{lineHeight: 1.5}}>Take Care of Your <br /> <span className="text-primary-900 ">Eye</span> Health Here</h1>
                <p className="text-gray-700 leading-9 text-base sm:text-lg font-medium">The eye is one of the most used senses among the other five <br className="hidden lg:block" />  senses. The sense of sight is the primary mean of gathering visual information around us. </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 space-x-8">
              <ButtonPrimary type="button" padding="px-6 py-3">
                Outpatient
                <FontAwesomeIcon icon={faWheelchair} className="ml-3" />
              </ButtonPrimary>
              <ButtonTrans type="button" padding="px-6 py-3">
                Sur. Registration
                <FontAwesomeIcon icon={faIdBadge} className="ml-3" />
              </ButtonTrans>
            </div>
          </div>

          <div className="lg:col-span-1 lg:pt-20 z-0">
            <img src={hero} alt="hero" className="z-0" />
          </div>
        </div>
        <ConsultForm />
      </div>
    </section>
  );
};

export default HeroHome;
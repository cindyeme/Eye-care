import React from 'react';

import AboutBrief from './aboutBrief/aboutBrief';
import HeroHome from './banner/heroHome';
import DoctorsBrief from './doctors/doctors';
import ServiceBrief from './serviceBrief/serviceBrief';

function HomeContainer (){
  return (
    <main className="min-h-screen">
      <HeroHome />
      <AboutBrief />
      <ServiceBrief />
      <DoctorsBrief />
    </main>
  )
}

export default HomeContainer;
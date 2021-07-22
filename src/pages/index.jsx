import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import HomeContainer from '../containers/home/homeContainer';


function Home (){
  return  (
    <>
      <Header />
      <HomeContainer />
      <Footer />
    </>
  )
}

export default Home;
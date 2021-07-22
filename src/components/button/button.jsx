import React from 'react';


// Primary button
export const ButtonPrimary = ({ type, children, padding }) => (
  <button type={ type } className={ `${padding} rounded-full bg-primary-900 shadow-lg text-white font-semibold text-lg tranistion duration-300 ease-linear border border-primary-900 hover:bg-white hover:border-primary-900  hover:text-primary-900` }>
    { children }
  </button>
);

// Tranparent buttton
export const ButtonTrans = ({ type, children, padding }) => (
  <button type={ type } className={ `${padding} rounded-full border border-primary-900 text-primary-900 shadow-lg font-semibold text-lg tranistion duration-300 ease-linear bg-white hover:bg-primary-900 hover:text-white focus:ring-2 focus:ring-primary-800 focus:ring-offset-4` }>
    { children }
  </button>
);
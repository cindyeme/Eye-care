import React from 'react';

const Title = ({heading, noted, title, children}) => (
  <div className="max-w-3xl mx-auto">
    <div className="flex flex-col space-y-8 items-center justify-items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-primary-900 font-semibold text-lg">{ heading }</p>
        <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center"><span className="text-primary-900 pr-4">{ noted }</span>{ title }</h1>
      </div>
      {children}
    </div>
  </div>
);

export default Title;
import React from 'react';

// Select
export const Select = ({ choices, name, onChange, defaultValue, disabled, className, value }) => {
  const currentValue = value || defaultValue;
  return (
    <select className={ `${className} font-medium appearance-none pt-2 pr-10 pb-2 pl-3 leading-normal` } disabled={ disabled } onChange={ onChange } name={ name } id={ name } value={currentValue}>
      <option className="text-gray-400 placeholder-opacity-50" value={ defaultValue } disabled>
        { defaultValue }
      </option>
      { choices.map((choice, index) => (
        <option key={ index } value={ choice }>
          { choice }
        </option>
      )) }
    </select>
  );
};

// Input
export const Input = ({type, name, onChange, value, className, disabled}) => (
  <input type={type} id={name} name={name} value={value} className={`${className} font-medium`} disabled={disabled} onChange={onChange} />
);
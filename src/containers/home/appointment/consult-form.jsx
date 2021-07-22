import React, {useState} from 'react';

import './consult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { ButtonPrimary } from '../../../components/button/button';
import { Input, Select } from '../../../components/common/input';
import { STATES } from '../../../constants/appConstant';

const ConsultForm = () => {
  const [state, setState] = useState({
    data: {
      action: '',
      date: '',
      doctor: '',
      location: ''
    }
  });

  const handleChange=(e)=>{
        const data={...state.data}
        data[e.target.name]=e.target.value
        setState({data})
    }
  return (
    <div className="transform lg:-translate-y-4 xl:-translate-y-12 z-30">
      <div className="bg-opacity-90 bg-primary-600 rounded-lg px-5 py-6 shadow-new border sm:border-0 mt-">
        <div className="grid lg:grid-cols-12 gap-y-4">
          {/* Action */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-5">
              <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                <FontAwesomeIcon icon={ faEye } className=" text-primary-900" />
              </button>
              <p className="text-gray-500 font-semibold">Action</p>
            </div>
            <Select
              value={ state.data.action }
              name="action"
              choices={ ['Glaucoma',
                'Retina', 'Cataract', 'Lasik', 'Oculoplasty'] }
              onChange = {handleChange}
              defaultValue="Select action here--"
              className="border-0 bg-transparent pt-7 ml-5 cursor-pointer focus:outline-none" />
          </div>
          {/* Date */ }
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-5">
              <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                <FontAwesomeIcon icon={ faCalendarAlt } className=" text-primary-900" />
              </button>
              <p className="text-gray-500 font-semibold">Date</p>
            </div>
            <Input
              type="date"
              name="date"
              value={ state.data.date }
              onChange={handleChange}
              className="border-0 bg-transparent focus:outline-none outline-none appearance-none pt-7 ml-5 cursor-pointer" />
          </div>
          {/* Doctor */ }
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-5">
              <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                <FontAwesomeIcon icon={ faUserAlt } className=" text-primary-900" />
              </button>
              <p className="text-gray-500 font-semibold">Doctor</p>
            </div>
            <Select
              name="doctor"
              choices={ ['Dr. Ngozi E. PhD', 'Dr. Ezinne A. PhD', 'Dr. Ikenna M., PhD', 'Dr. Ben Carson', 'Dr. Emeka O.'] }
              value={ state.data.doctor }
              onChange={handleChange}
              defaultValue="Select doctor here--"
              className="border-0 bg-transparent pt-7 ml-5 cursor-pointer focus:outline-none" />
          </div>
          {/* Location */ }
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-5">
              <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                <FontAwesomeIcon icon={ faMapMarkerAlt } className=" text-primary-900" />
              </button>
              <p className="text-gray-500 font-semibold">Location</p>
            </div>
            <Select 
              name="location"
              choices={ [...STATES] }
              value={state.data.location}
              onChange={handleChange}
              defaultValue="Select your location here--"
              className="border-0 bg-transparent pt-7 ml-5 cursor-pointer focus:outline-none" />
          </div>
          {/* Submit */ }
          <div className="lg:col-span-1">
            <ButtonPrimary type="submit" padding="px-5 py-2 mt-4">
              Submit
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultForm;
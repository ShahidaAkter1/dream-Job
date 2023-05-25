import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({appliedJobDetails}) => {
    
    // console.log(appliedJobDetails);
    const {id,company_logo, salary, title, remote_or_onsite, location, company_name,fulltime_or_partTime,contact_information,educational_requirements,experiences,description,responsibilities}=appliedJobDetails;


    



    return (
        <div>
         
            <section>
           <li className='flex flex-col py-6 sm:flex-row sm:justify-between'>
      <div className='flex w-full  space-x-2 sm:space-x-4 border mx-72 p-4 rounded-lg'>
        <img
          className='flex-shrink-0 object-cover w-20 h-20 border-transparent rounded-lg outline-none sm:w-32 sm:h-32 bg-gray-500'
          src= {company_logo}
          alt='Polaroid camera'
        />
        <div className='flex flex-col justify-between pb-4'>

          <div className='flex justify-between w-full pb-2 space-x-2'>
            <div className='space-y-1'>
              <h3 className='text-lg font-semibold leading-snug sm:pr-8'> {title}</h3>
             
                <h3 className='my-2'> {company_name}</h3>
                <button  className='rounded hover:rounded-lg bg-slate-200 text-blue-600 font-bold p-2 m-2'> {remote_or_onsite}</button>
                <button className='rounded hover:rounded-lg bg-slate-200 text-blue-600 font-bold p-2 m-2'> {fulltime_or_partTime}</button>
            </div>
            <div className='text-right'>
                <Link
                  to={`/JobDetails/${id}`}
                >
                <button className='rounded hover:rounded-lg mt-16 bg-blue-600 text-white font-bold p-2 m-2'>View Details</button>
                </Link>


          
            </div>
          </div>

          <div className='flex text-sm divide-x'>
          <div className='flex justify-start gap-10 my-2'>
                    <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <p>Location: {location}</p>

                    </div>
                   
                    <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p>Salary:{salary}</p>
                    </div>
                </div>
          </div>

        </div>
      </div>
    </li>
           </section>


        </div>
    );
};

export default SingleAppliedJob;
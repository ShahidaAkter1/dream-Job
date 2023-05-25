import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCartFromLocalStorage } from '../../util/manageDb';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';

const AppliedJobs = () => {

  // const [display,setDisplay]=useState();

  // const {  features } =  useLoaderData()
  // //  console.log(features);

  //  const getAppliedJob=getShoppingCartFromLocalStorage();
  // //  console.log(getAppliedJob);

  //  let appliedJob=[];
  //  for(const singleJobId in getAppliedJob){
  //   // console.log(typeof singleJobId);
  //   // console.log(typeof features.id);
  //    const jobId=parseInt(singleJobId);
  //   //  console.log(typeof jobId);
  //   const findJob=features.find(job=>job.id===jobId);
  //   //  console.log(findJob);
  //    appliedJob.push(findJob);

  //  }
  // //  setDisplay(appliedJob);


  //  console.log(appliedJob);
  //////////////////////////////////////////////////////////////////////////////
 
  const { features } = useLoaderData()
  //  console.log(features);


  const getAppliedJob = getShoppingCartFromLocalStorage();
  //  console.log(getAppliedJob);

  let appliedJob = [];
  for (const singleJobId in getAppliedJob) {
    // console.log(typeof singleJobId);
    // console.log(typeof features.id);
    const jobId = parseInt(singleJobId);
    //  console.log(typeof jobId);
    const findJob = features.find(job => job.id === jobId);
    //  console.log(findJob);
    appliedJob.push(findJob);

  }
 

  const [display, setDisplay] = useState(appliedJob);
  //  console.log(appliedJob);

  const handleRemoteJob = (typeOfData) => {
    //  console.log('id');
    console.log(typeOfData);
    const findRemoteJob = appliedJob.filter(jb => jb.remote_or_onsite === typeOfData);
    // console.log(findRemoteJob);
    setDisplay(findRemoteJob);
  }



  return (
    <div>
      <div className='bg-slate-100  bg-[url("./banner.jpg")] h-36 mx-8  bg-cover'>
        <h1 className='font-extrabold text-5xl p-8 text-orange-600 text-center '>Applied Jobs</h1>
      </div>

      {/* <select className='ml-72 my-6'>
                <option >Filter By</option>
                <option onClick={()=>handleRemoteJob('Remote') }value="remote">Remote</option>
                <option value="on-site">On-site</option>
            </select>  */}

   <div className='mx-48'>
   <button className='rounded hover:rounded-lg bg-blue-600 text-white font-bold p-2 m-2' onClick={() => handleRemoteJob('Remote')}>Remote</button>
      <button className='rounded hover:rounded-lg bg-blue-600 text-white font-bold p-2 m-2' onClick={() => handleRemoteJob('Onsite')}>Onsite</button>
   </div>
     

      {
        display.map(appliedJobDetails => <SingleAppliedJob

          key={appliedJobDetails.id}
          appliedJobDetails={appliedJobDetails}


        ></SingleAppliedJob>)
      }







    </div>
  );
};

export default AppliedJobs;
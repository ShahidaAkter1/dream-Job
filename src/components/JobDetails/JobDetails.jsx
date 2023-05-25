import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToCart, getShoppingCartFromLocalStorage } from '../../util/manageDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = ({id}) => {
    const getCart=getShoppingCartFromLocalStorage();
    const [cart,setCart]=useState(getCart);

    //get job id
    const params=useParams();
    const jobId=params;
    //get all job details
    const {features} =  useLoaderData();
       // console.log(features);

    const jobIdDetails= JSON.parse(jobId['id']);
    // console.log(jobIdDetails);

    const singleJobDetails=features.find(job=> job.id===jobIdDetails);
    //  console.log(singleJobDetails);
     const {company_logo, salary, title, remote_or_onsite, location, company_name,fulltime_or_partTime,contact_information,educational_requirements,experiences,description,responsibilities}=singleJobDetails;


     //show toast
     let flag=0;
    const applyNow=(id)=>{
        // console.log(typeof id);
        //  console.log(getCart);
        for(const idInCart in cart){
            const cartId=parseInt(idInCart);
            if(cartId===id){
                 flag=1;
            }
        }

        if(flag===1){
            // alert('already added');
            toast('Already Added this Job!!!!!')
        }
        else{
            addToCart(id);

            toast('Added successfully!!!!')
        }
     }


    return (
        <div>
            <div className='bg-slate-100  bg-[url("./banner.jpg")] h-36 mx-8  bg-cover'>
              <h1 className='font-extrabold text-5xl p-8 text-orange-600 text-center '>Job Details</h1>
            </div>

             <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  m-24 '>
                  {/* details */}
               
            <div>
                <p className='font-bold'>Job Description : </p>
                <p>{description}</p> 
                <br />
       
                <p className='font-bold'>Job responsibility: </p>
                <p>{responsibilities}</p> 
                <br /> 

                <p className='font-bold'>Educational Requirements : </p>
                <p>{educational_requirements}</p> 
                <br /> 

                <p className='font-bold'>Experience: </p>
                <p>{experiences}</p> 
                <br /> 

            </div>

            {/* description */}
            <div className='ml-20 p-8 bg-slate-200 rounded-lg'>
                <h1 className='font-bold text-3xl my-2'>Job details</h1>
                <hr className='bg-black font-extrabold text-6xl mx-auto' />
                <div className='flex gap-2'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p className='font-semibold text-sm my-1'>Salary :{salary} (Per Month)</p>
                </div>

                <div className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>

                    <p className='font-semibold text-sm my-1'>Job title: {title}</p>

                </div>
               
                <h1 className='font-bold text-3xl my-2'>Contact Information</h1>
                <hr className='mx-auto' />

                <div className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 font-bold">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>

                <p className='font-semibold text-sm my-1'>Phone:  {contact_information.phone}</p>
                </div>

                <div className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p className='font-semibold text-sm my-1'>Email: {contact_information.email} </p>
                </div>

               <div className='flex gap-2'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

               <p className='font-semibold text-sm my-1'>Address: {contact_information?.address ? ' Address' : 'No address'} </p>
               </div>
              
               

                <button  className='rounded hover:rounded-lg bg-blue-400 text-white font-bold p-2 m-2' onClick={()=>applyNow(jobIdDetails)}>Apply Now</button>
            </div>
             </div>

             <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default JobDetails;
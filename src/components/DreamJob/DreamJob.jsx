import React from 'react';

const DreamJob = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center  p-2 mx-9 bg-slate-50'>
            <div >
                <h1 className='font-bold text-6xl mb-4 tracking-wide leading-tight'>One Step <br/> Closer To Your <br/> <span className='text-blue-900'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all <br/>your job application from start to finish.</p>
              {/* <Link to='/' className='px-8 py-3 font-semibold rounded bg-blue-800 text-white'>            Star Applying
              </Link> */}
              <button className='mt-4 px-8 py-3 mb-4 font-semibold rounded bg-blue-800 text-white'>Get Started</button>
            </div>
            <div className='h-96 w-96 object-cover'>
               <img src="/man.png" alt="" />
            </div>
        </div>
    );
};

export default DreamJob;
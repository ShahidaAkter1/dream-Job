import React, { useState } from 'react';
import Header from '../Header/Header';
import DreamJob from '../DreamJob/DreamJob';

import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const [showAll,setShowAll]=useState(false);
    const { categories, features } = useLoaderData()
    // console.log(categories);
    //  console.log(features)


    return (
        <div>

            <DreamJob></DreamJob>


            {/* category job */}
            <div>
                <h1 className='text-center text-3xl font-bold mt-12 mb-4'>Job Category List</h1>
                <p className='text-center text-sm mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-md mx-36 justify-center items-center '>
                    {
                        categories.map(category => <JobCategory
                            key={category.id}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </div>


            {/* feature job */}


      <div>
            <h1 className='text-center text-3xl font-bold mt-12 mb-4'>Featured Jobs</h1>
            <p className='text-center text-sm mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  justify-center items-center mr-14'>
        
              
                {
                features.slice(0, showAll ? 6 : 4).map(feature=><FeaturedJob
                key={feature.id}
                feature={feature}

                ></FeaturedJob>)
              }
              
                




            </div>
            <button onClick={()=>setShowAll(!showAll)}  className='rounded hover:rounded-lg bg-blue-600 text-white font-bold p-2 m-4 mt-8 ml-80'>See All Jobs</button>
        </div>




        </div>
    );
};

export default Home;
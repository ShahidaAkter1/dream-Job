import React from 'react';

const JobCategory = ({category}) => {
    // console.log(category);
    const {id,logo,description,availableJob,salary,title }=category;
    return (
        <div>
           <div className='  border border-indigo-200  bg-slate-100 w-48 h-48 '>
                <img className='object-cover  my-2 h-16  ml-12' src= {logo} alt="" />
                <h1 className='font-bold text-center text-lg '>{title}</h1>              
                <p className='text-sm text-center mb-4 p-4  '>{availableJob}</p>
            </div>       
        </div>
    );
};

export default JobCategory;
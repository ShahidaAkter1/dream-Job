import React from 'react';
import { useLoaderData } from 'react-router-dom';

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';


const Statistics = () => {
    const marks=useLoaderData();
    // console.log(marks)

      
    return (
        <div>
    
            <h2 className='font-bold text-5xl text-orange-700 text-center mt-12'>This is statistics page</h2>
            <p className='font-bold text-sm text-pink-700 text-center my-12'>The chart will be
              based on the assignment marks</p>
            {/* <div className='mx-64 mt-24'>
            <BarChart
          width={500}
          height={300}
          data={marks}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
            <Brush dataKey="name" height={30} stroke="#8884d8" ></Brush>
          <Bar dataKey="subject_number" fill="#8884d8" />
          
           <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip />
          </BarChart>
        </div> */}
        <div className='ml-80'>
          <AreaChart
             width={500}
             height={300}
             data={marks}
             >
            <Area dataKey="subject_number" fill="#8884d8"></Area>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip />
          </AreaChart>
        </div>
    
        </div>
    );
};

export default Statistics;
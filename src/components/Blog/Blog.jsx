import React from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';

const Blog = () => {
    return (
        <div>
           

            <div className='mx-16 my-8'>
                <h1 className='font-extrabold text-2xl text-orange-500 mb-4'>a. When should you use context API?</h1>
                <p className='p-4 m-4'>*** Context API is when you need to share data between components that are not directly related in the component hierarchy. Context API when you have data that needs to be accessed by multiple components throughout your application, but it's not feasible or practical to pass that data down through the component tree as props.<br/>
                Overall, the Context API is a powerful tool for managing global state in your React application, and should be used when you have data that needs to be accessed by multiple components, or when you need to share data between components that are not directly related in the component hierarchy.
                </p>

                <h1 className='font-extrabold text-2xl text-orange-500 mb-4'>b. What is a custom hook?</h1>
                <p className='p-4 m-4'>A custom Hook has following features:<br/>
                    --** As a function, it takes input and returns output.<br/>
                    --** Its name starts with use like useQuery, useMedia.<br/>
                    --** Unlike functional components, custom hooks return normal, non-jsx data.<br/>
                    --** Unlike normal functions, custom hooks can use other hooks such as useState, useRef… and other custom hooks.</p>
                <h1 className='font-extrabold text-2xl text-orange-500 mb-4 mt-4'>c. What is a useRef?</h1>
                <p className='p-4 m-4'>*** The useRef Hook returns a single mutable reference object that can be used to access or update the current value of the reference, without triggering a re-render of the component.<br/>We can use useRef to get a reference to a DOM element and manipulate its properties or methods. We can use useRef to store mutable values that need to persist between renders.We can use useRef to cache expensive computations that do not depend on the component state. </p>    
                <h1 className='font-extrabold text-2xl text-orange-500 mb-4 mt-4'>d. What is useMemo?</h1>
                <p className='p-4 m-4'>
                *** In React, useMemo is a Hook.It takes two arguments: a function that returns a value, and an array of dependencies. The Hook will only recompute the memoized value when one or more dependencies have changed. If none of the dependencies have changed since the last render, the Hook will return the previously memoized value, avoiding the need to recompute the value and potentially re-rendering the component.
                </p>
            </div>

         
        </div>
    );
};

export default Blog;
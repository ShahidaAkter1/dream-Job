import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>

            <div className='md:min-h-[calc(100vh-241px)]'>
                <Outlet></Outlet>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;
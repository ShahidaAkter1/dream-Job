import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
       {/* <Header></Header> */}
       <Home></Home>
      {/* <div className='md:min-h-[calc(100vh-241px)]'>
          <Outlet></Outlet>
      </div> */}
      <Outlet></Outlet>
       
       {/* Footer */}
       <Footer></Footer>
    </div>
  );
};

export default App;

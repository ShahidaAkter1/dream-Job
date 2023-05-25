import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row  justify-around bg-black text-white p-12 mx-10 mt-4'>
          <div>
            <h1 className='text-3xl'>DreamJob</h1>
            <p  className='text-xs text-slate-400 my-3'>  Your dream job should be something that <br/> brings you a sense of purpose and joy in <br/>your daily work.</p>
            <img src="/group_logo.png" alt="" />
          </div>
          <div>
             <h1 className='text-3xl'>Company</h1>
             <ul className='text-xs text-slate-400 my-3 leading-6'>
                <li>About Us</li>
                <li>Work</li>
                <li>Latest News</li>
                <li>Careers</li>
             </ul>
          </div>
          <div>
             <h1 className='text-3xl'>Product</h1>
             <ul className='text-xs text-slate-400 my-3 leading-6'>
                <li>Prototype</li>
                <li>Plans & Pricing</li>
                <li>Customers</li>
                <li>Integrations</li>
             </ul>
          </div>
          <div>
             <h1 className='text-3xl '>Support</h1>
             <ul className='text-xs text-slate-400 my-3 leading-6'>
                <li>Help Desk</li>
                <li>Sales</li>
                <li>Become a Partner</li>
                <li>Developers</li>
             </ul>
          </div>
          
          <div>
          <h1 className='text-3xl'>Contact</h1>
          <p  className='text-xs my-3  text-slate-400'>524 Broadway, N/C</p>
          <p  className='text-xs text-slate-400'>+1777-978-5570</p>
          </div>
        </div>
    );
};

export default Footer;

import { useState } from 'react';
import { FaFacebook, FaGooglePlus, FaInvision, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location =useLocation()

    return (
       <div>
         <div className='w-full bg-slate-900 text-center pt-10 text-white px-52'>
            <h1 className='text-5xl font-bold '>Krishiz Shop</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam delectus molestiae quod sit quam corporis, doloremque qui, praesentium aspernatur perspiciatis voluptates illum deserunt. Quo fugiat voluptate, optio officia cupiditate ratione?</p>
            <div className='flex justify-center items-center gap-4 mt-10 pb-10'>
            <FaFacebook />
            <FaTwitter />
            <FaGooglePlus />
            <FaYoutube />
            <FaInvision />
            </div>
        </div>
        <div className='w-full bg-black flex justify-between text-white'>
            <div>
                <h2>copyright 2021</h2>
            </div>
            <div>
            <ul className="flex gap-6 text-xl font-thin">
                    <li ><Link to="/">Home</Link>{location.pathname === "/" ? <hr className="border border-red-700" /> : <></>} </li>
                    <li ><Link to="/about">About</Link>{location.pathname === "/about" ? <hr className="border border-red-700" /> : <></>}</li>
                    <li ><Link to="/products">Products</Link>{location.pathname === "/products" ? <hr className="border border-red-700" /> : <></>}</li>
                   

                </ul>
            </div>
        </div>
       </div>
    );
};

export default Footer;
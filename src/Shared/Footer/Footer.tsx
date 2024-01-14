
import { useState } from 'react';
import { FaFacebook, FaGooglePlus, FaInvision, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isSelected,setIsSelected]=useState('home')
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
                    <li onClick={() => setIsSelected("home")}><Link to="/">Home</Link>{isSelected === "home" ? <hr className="border border-red-700" /> : <></>} </li>
                    <li onClick={() => setIsSelected("about")}><Link to="/about">About</Link>{isSelected === "about" ? <hr className="border border-red-700" /> : <></>}</li>
                    <li onClick={() => setIsSelected("products")}><Link to="/products">Products</Link>{isSelected === "products" ? <hr className="border border-red-700" /> : <></>}</li>
                   

                </ul>
            </div>
        </div>
       </div>
    );
};

export default Footer;
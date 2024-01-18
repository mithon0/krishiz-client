import { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navber = () => {
    const [isOpen, setIsOpen] = useState(false)
    
 const navigate =useNavigate()
    const location =useLocation();
    console.log(location.pathname)
 const navigateToHome =()=>{
    navigate("/")
    
 }

    return (
        <div className="py-4 md:bg-green-100 flex justify-between px-3">
            <div>
                <img onClick={navigateToHome} className="w-52" src={logo} alt="" />
            </div>
            <div className={`md:flex hidden gap-10 items-center`}>
                <ul className="flex gap-6 text-xl font-thin">
                    <li ><Link to="/">Home</Link>{location.pathname === "/" ? <hr className="border border-red-700" /> : <></>} </li>
                    <li ><Link to="/about">About</Link>{location.pathname === "/about" ? <hr className="border border-red-700" /> : <></>}</li>
                    <li ><Link to="/products">Products</Link>{location.pathname === "/products" ? <hr className="border border-red-700" /> : <></>}</li>
                    <li ><Link className="flex items-center" to="/carts"><FaShoppingCart className='text-4xl text-green-500' /><span className="px-1 font-bold bg-red-600 rounded-full text-white -mt-6">{"0"}</span></Link>{location.pathname === "/carts" ? <hr className="border border-red-700" /> : <></>}</li>

                </ul>
                <div className="flex items-center gap-2">
                    <button onClick={()=>{navigate("/login")}} className="px-4 py-3 bg-green-900 rounded-xl text-2xl font-bold text-white hover:bg-red-700 duration-500 active:bg-green-950 focus:bg-black">Login</button>
                    <button onClick={()=>{navigate("/signup")}} className="px-4 py-3 border-2 border-green-800 rounded-xl text-2xl font-bold text-green-900 hover:bg-red-600 hover:text-white active:bg-green-950 duration-500 focus:bg-black focus:text-white">Signup</button>
                </div>
            </div>
            <div className="md:hidden block ">
                {
                    isOpen === false ? <FaBars onClick={() => setIsOpen(true)} className="text-2xl" /> : <FaTimes onClick={() => setIsOpen(false)} className="text-2xl" />
                }
                {
                    isOpen ? <ul className="duration-1000 font-thin p-5 bg-slate-200">
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Carts</li>
                        <button className="px-4 py-3 bg-green-900 rounded-xl font-bold text-white hover:bg-red-700 duration-500 active:bg-green-950">Login</button><br />
                        <button className="px-4 py-3 border-2 border-green-800 rounded-xl  font-bold text-green-900 hover:bg-red-600 hover:text-white active:bg-green-950 duration-500 ">Signup</button>
                    </ul> : <></>
                }
            </div>
        </div>
    );
};

export default Navber;
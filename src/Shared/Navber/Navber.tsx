import { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navber = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSelected, setIsSelected] = useState("home")
 const navigate =useNavigate()

 const navigateToHome =()=>{
    navigate("/")
    setIsSelected("home")
 }

    return (
        <div className="py-4 md:bg-green-100 flex justify-between px-3">
            <div>
                <img onClick={navigateToHome} className="w-52" src={logo} alt="" />
            </div>
            <div className={`md:flex hidden gap-10 items-center`}>
                <ul className="flex gap-6 text-xl font-thin">
                    <li onClick={() => setIsSelected("home")}><Link to="/">Home</Link>{isSelected === "home" ? <hr className="border border-red-700" /> : <></>} </li>
                    <li onClick={() => setIsSelected("about")}><Link to="/about">About</Link>{isSelected === "about" ? <hr className="border border-red-700" /> : <></>}</li>
                    <li onClick={() => setIsSelected("products")}><Link to="/products">Products</Link>{isSelected === "products" ? <hr className="border border-red-700" /> : <></>}</li>
                    <li onClick={() => setIsSelected("carts")}><Link className="flex items-center" to="/carts"><FaShoppingCart className='text-4xl text-green-500' /><span className="px-1 font-bold bg-red-600 rounded-full text-white -mt-6">{"0"}</span></Link>{isSelected === "carts" ? <hr className="border border-red-700" /> : <></>}</li>

                </ul>
                <div className="flex items-center gap-2">
                    <button onClick={()=>{navigate("/login")}} className="px-4 py-3 bg-green-900 rounded-xl text-2xl font-bold text-white hover:bg-red-700 duration-500 active:bg-green-950">Login</button>
                    <button onClick={()=>{navigate("/signup")}} className="px-4 py-3 border-2 border-green-800 rounded-xl text-2xl font-bold text-green-900 hover:bg-red-600 hover:text-white active:bg-green-950 duration-500 focus:bg-purple-600 ">Signup</button>
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
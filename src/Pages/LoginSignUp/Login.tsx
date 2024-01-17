import { useState } from "react";


const Login = () => {
    const [showPass,setShowPass]=useState(false)
    console.log(showPass)
    return (
        <div className="my-32 w-[500px] mx-auto px-10 py-20 rounded-md bg-green-50">
            <h1 className="text-5xl text-center font-bold">Login Now</h1>
            <form className="">
                <div className="flex flex-col gap-2 justify-center mt-3">
                    <label htmlFor="email" className="text-xl font-bold">Email</label>
                    <input type="email" id="email" className="border-2 shadow-green-100 shadow-md  border-green-400 px-2 py-1 focus:shadow-xl hover:shadow-lg focus:shadow-green-100 font-bold" />
                </div>
                <div className="flex flex-col gap-2 justify-center mt-3" >
                    <label htmlFor="password" className="text-xl font-bold">Password</label>
                    <input type={showPass?"text":"password"} id="password" className="border-2 shadow-green-100 shadow-md  border-green-400 px-2 py-1 focus:shadow-xl hover:shadow-lg focus:shadow-green-100 font-bold" />
                </div>
                <div className="gap-2 mt-3 flex items-center">
                   <input onClick={()=>setShowPass(!showPass)} type="checkbox" className="border-2 border-green-500 text-green-500"  />
                   <label htmlFor="checkbox" className="ms-3 font-bold">Show Password</label>
                </div>
                <div className="flex flex-col gap-2 justify-center mt-5" >
                    <button className="py-1 bg-green-700 text-white font-bold w-full rounded-md text-xl">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
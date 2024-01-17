import  { useState } from 'react';

const SignUp = () => {
    const [showPass,setShowPass]=useState(false)
    console.log(showPass)
    return (
        <div className="my-20 w-[600px] mx-auto px-10 py-20 rounded-md bg-green-50">
            <h1 className="text-3xl text-center font-bold">Register A New Account</h1><hr className='border border-green-500 mt-2 mb-2' />
            <form className="">
                <div className='flex items-center gap-3'>
                <div className="w-full flex flex-col gap-2 justify-center mt-3">
                    <label htmlFor="firstName" className="text-xl font-bold">First Name</label>
                    <input type="text" id="firstName" className="border-2 shadow-green-100 shadow-md  border-green-400 px-2 py-1 focus:shadow-xl hover:shadow-lg focus:shadow-green-100 font-bold" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center mt-3" >
                    <label htmlFor="lastName" className="text-xl font-bold">Last Name</label>
                    <input type="text" id="lastName" className="border-2 shadow-green-100 shadow-md  border-green-400 px-2 py-1 focus:shadow-xl hover:shadow-lg focus:shadow-green-100 font-bold" />
                </div>
                </div>
                <div className="flex flex-col gap-2 justify-center mt-3">
                    <label htmlFor="email" className="text-xl font-bold">Email</label>
                    <input type="email" id="email" className="border-2 shadow-green-100 shadow-md  border-green-400 px-2 py-1 focus:shadow-xl hover:shadow-lg focus:shadow-green-100 font-bold" />
                </div>
              <div  className='flex items-center gap-3'>
              <div className="w-full flex flex-col gap-2 justify-center mt-3" >
                    <label htmlFor="password" className="text-xl font-bold">Password</label>
                    <input type={showPass?"text":"password"} id="password" className="border-2 shadow-green-100 shadow-md  border-green-400 px-2 py-1 focus:shadow-xl hover:shadow-lg focus:shadow-green-100 font-bold" />
                </div>
                <div className="w-full flex flex-col gap-2 justify-center mt-3" >
                    <label htmlFor="confirmPassword" className="text-xl font-bold">Confirm Password</label>
                    <input type={showPass?"text":"password"} id="confirmPassword" className="border-2 shadow-green-100 shadow-md  border-green-400 px-2 py-1 focus:shadow-xl hover:shadow-lg focus:shadow-green-100 font-bold" />
                </div>
              </div>
                <div className="gap-2 mt-3 flex items-center">
                   <input onClick={()=>setShowPass(!showPass)} type="checkbox" className="border-2 border-green-500 text-green-500"  />
                   <label htmlFor="checkbox" className="ms-3 font-bold">Show Password</label>
                </div>
                <div className="flex flex-col gap-2 justify-center mt-5" >
                    <button className="py-1 bg-green-700 text-white font-bold w-full rounded-md text-xl">Sign Up Now</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
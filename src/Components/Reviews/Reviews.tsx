import React, { useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaComment  } from "react-icons/fa";
import SectionTitle from '../../Shared/SectionTitle';
import { RotatingLines } from 'react-loader-spinner';


const Reviews = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: {
          perView: 3,
          spacing: 15,
        },
      })
const [reviews,setReviews]=useState([]);
const [isLoading,setIsLoading]=useState(false)
      useEffect(()=>{
        setIsLoading(true)
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
            setIsLoading(false)
        })
      },[])

      if (isLoading === true) {
        return (
           <div className="mx-auto my-20 flex justify-center">
             <RotatingLines
  visible={true}
 
  
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  
 
  />
           </div>
        )
    }

    return (
       <div>
        <SectionTitle header='Reviews From Our Client'/>
         <div ref={ref} className="keen-slider my-10">
            {
                reviews.map((r:any,i)=> <div className={`keen-slider__slide number-slide${i+1} border border-green-500 px-2`}>
                        <img className='w-[300px] h-[400px] mx-auto' src={r?.picture} alt="" />
                        <h1 className='text-xl font-bold'>{r?.user}</h1>
                        <p className='flex gap-2 items-center text-slate-600'><FaComment className="text-2xl" />:{r?.comment}</p>
                       <div>
                       <h3 className='font-bold'>Date: <span className='text-slate-600'>{r?.date}</span></h3>
                       <h1>ratings:{r?.rating}</h1>
                       </div>
                </div>)
            }
       
      </div>
       </div>
    );
};

export default Reviews;
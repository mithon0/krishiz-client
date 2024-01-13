
import bannerIMG from "../../assets/img/banner.png";
import farmer_Icon from "../../assets/farmer/farmer.png";
const Banner = () => {
    return (
        <div className='mx-auto relative'>
            <img className='mt-0 w-full' src={bannerIMG} alt="" />
            <div className='absolute md:top-10 top-5 md:left-10 left-0 grid md:grid-cols-2 grid-cols-1 '>
                <div className='  flex flex-col mt-28 ml-10 md:gap-8 gap-2 '>
                    <h1 className='px-2 md:text-5xl text-xl font-bold text-red-600  shadow-red-400'>K<span className='text-white'>RISHIZ</span></h1>
                    <p className='px-2 text-white md:font-bold font-thin md:text-xl text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa culpa alias sint facere quod provident hic optio soluta quo voluptatem ut, laboriosam, libero delectus explicabo autem ab pariatur saepe. Quod magni aliquam maiores doloremque odit eligendi ipsum, in beatae.</p>
                    <button className='px-4 py-2 bg-slate-950 hover:bg-red-500 text-white text-2xl font-bold rounded transform-none duration-500'>Get Started</button>
                </div>
                <div className=' flex justify-center  '>
                    <img src={farmer_Icon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
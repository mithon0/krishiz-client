import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import Cards from "./Cards";
import { RotatingLines } from "react-loader-spinner";


type TProducts = {
    id: number
    category: string
    name: string
    price: number
    ratings: number
    shortDetails: string
    image: string
}
const Medicineproducts = () => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsloading] = useState(false);
   const [lenghtNum,setLengthNum]=useState(3)
    useEffect(() => {
        setIsloading(true)
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProductsData(data)
                setIsloading(false)
                
            })
            
                
            
            
    }, [])

  
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
            <SectionTitle header="agricultural_medicine_products"></SectionTitle>
            <div className="grid grid-cols-3 ">
                {
                    productsData.slice(0,lenghtNum).map((product: TProducts, i) => <Cards key={i} product={product}  />)
                }
            </div>
            <div className="flex gap-5 justify-center items-center mt-10">
                <button onClick={()=>setLengthNum(lenghtNum+3)} className="px-4 py-2 rounded-lg bg-green-800 active:bg-black hover:bg-green-900 text-white text-3xl font-bold ">See More</button>
             {
                lenghtNum>3?   <button onClick={()=>setLengthNum(lenghtNum-3)} className="px-4 py-2 rounded-lg bg-red-800 active:bg-black hover:bg-green-900 text-white text-3xl font-bold ">See less</button>:<></>
             }
            </div>
        </div>
    );
};

export default Medicineproducts;
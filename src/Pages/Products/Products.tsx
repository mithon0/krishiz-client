import { useState } from "react";
import Medicine from "./Products/Medicine";
import Seeds from "./Products/Seeds";

const Products = () => {
  const [productName,setProductName]=useState('medicine')
    return (
        <div>
            <div className="w-full flex gap-10 font-bold bg-green-800 text-white px-10 py-2">
                    <div>
                    <button onClick={()=>setProductName("medicine")} className="" >Medicine</button> {productName==="medicine"?<hr className="border-2 border-red-600"/>:<></>}
                    </div>
                   <div>
                   <button onClick={()=>setProductName("seed") } className="">Seeds</button>{productName==="seed"?<hr className="border-2 border-red-600"/>:<></>}
                   </div>
            </div>
            {
                productName==="medicine"? <Medicine/>:<Seeds/>
            }
         
          
        </div>
    );
};

export default Products;
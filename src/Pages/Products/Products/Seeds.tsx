import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import Cards from "../../../Components/MedicineProducts/Cards";

const Seeds = () => {
    const [product,setProduct]=useState([]);
    const[productNum,setProductNum]=useState(8);
    const [categoryName,setCategoryName]=useState("")
    useEffect(()=>{
        fetch("seeds.json")
        .then(res=>res.json())
        .then(data=>{
            if(categoryName){
                const filterData =data.filter((d:any)=>d.category===categoryName);
                setProduct(filterData)
            }
            else{
                setProduct(data)
                setProductNum(8)
            }
        })
    },[categoryName]);

    console.log(categoryName);
    return (
        <div>
           <SectionTitle header="sEEDS"></SectionTitle>
           <div className="flex flex-col w-96 mx-20">
            <label htmlFor="category" className="ms-2 font-bold">Filter By category</label>
            <select onChange={(e)=>setCategoryName(e.target.value)} name="category" id="caegory" className="px-2 py-1 border bg-green-50">
                <option value="">select Category</option>
                <option value="Flowers">Flowers</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Herbs">Herbs</option>
            </select>

           </div>
           <div className="grid grid-cols-4">
            {
                product.slice(0,productNum).map((p,i)=><Cards key={i} product={p}></Cards>)
            }
           </div>
           <div className="flex justify-center my-10">
            {
                productNum===product.length?<></>:<button onClick={()=>setProductNum(product.length)} className="px-4 py-2 rounded-lg bg-green-800 active:bg-black hover:bg-green-900 text-white text-3xl font-bold ">See All</button>
            }
           </div>
        </div>
    );
};

export default Seeds;
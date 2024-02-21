import Swal from "sweetalert2";
import StarRatings from "../StarRatings/StarRatings";


const Cards = ({product}:any) => {
            const {name,image,category,shortDetails,price,ratings,id}=product
            const addtocartHandler=(id:number) =>{
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your Product has been saved on Your Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  console.log(id)
            }
    return (
        <div className="w-1/2 mx-auto my-10 h-[500px]" >
            <div>
                <img className="w-[200px] h-[300px]" src={image} alt="" />
            </div>
            <div>
            <h1 className="text-2xl font-semibold ">{name}</h1>
            <h2 className="text-xl font-bold">Category: <span className="text-stone-600 font-semibold">{category}</span></h2>
            <p>{shortDetails}</p>
            <div className="flex items-center gap-2">
       
        <StarRatings ratings={ratings}></StarRatings>
        <p>{ratings}</p>
       </div>
            <h1 className="text-3xl font-bold">Price:${price}</h1>
                <button onClick={()=>addtocartHandler(id)} className="w-full py-1 bg-green-700 rounded-md text-white font-bold active:bg-black focus:bg-red-700 hover:bg-yellow-600 duration-500">Add To cart</button>
            </div>
            
        </div>
    );
};

export default Cards;
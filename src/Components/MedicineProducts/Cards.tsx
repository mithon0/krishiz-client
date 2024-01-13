
const Cards = ({product}:any) => {
            const {name,image,category,shortDetails,price,ratings}=product
    return (
        <div className="w-1/2 mx-auto h-[500px]" >
            <div>
                <img className="w-[200px] h-[300px]" src={image} alt="" />
            </div>
            <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <h2 className="text-xl font-bold">Category: <span className="text-stone-600 font-semibold">{category}</span></h2>
            <p>{shortDetails}</p>
            <h1 className="text-3xl font-bold">Price:${price}</h1>
        <p>{ratings}</p>
            </div>
            
        </div>
    );
};

export default Cards;
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import SectionTitle from "../../../Shared/SectionTitle";
import Cards from "../Cards";

type TSeeds = {
    id: number
    name: string
    category: string
    price: string
    ratings: string
    description: string
    image: string
}

const SeedProduct = () => {
    const [seedsData, setSeedsData] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [lenghtNum, setLengthNum] = useState(3)
    useEffect(() => {
        setIsloading(true)
        fetch('seeds.json')
            .then(res => res.json())
            .then(data => {
                setSeedsData(data)
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
        )}; 
 return (
        <div>
            <SectionTitle header="Seeds"></SectionTitle>
            <div className="grid grid-cols-3 ">
                {
                    seedsData.slice(0, lenghtNum).map((product: TSeeds, i) => <Cards key={i} product={product} />)
                }
            </div>
            <div className="flex gap-5 justify-center items-center mt-10">
                <button onClick={() => setLengthNum(lenghtNum + 3)} className="px-4 py-2 rounded-lg bg-green-800 active:bg-black hover:bg-green-900 text-white text-3xl font-bold ">See More</button>
                {
                    lenghtNum > 3 ? <button onClick={() => setLengthNum(lenghtNum - 3)} className="px-4 py-2 rounded-lg bg-red-800 active:bg-black hover:bg-red-900 text-white text-3xl font-bold ">See less</button> : <></>
                }
            </div>
        </div>
    );
};

export default SeedProduct;
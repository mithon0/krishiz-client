import { FaStar, FaStarHalf } from "react-icons/fa";

type TRatings ={
    ratings:number
}
const StarRatings = ({ ratings }:TRatings) => {
    if (ratings <= 1) {
        return (
            <div className="flex">

                <div className="flex text-yellow-600">
                    <FaStar className="" />
                </div>
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
            </div>
        );
    }
   else if (ratings >= 2 && ratings <2.5) {
        return (
            <div className="flex">

                <div className="flex text-yellow-600">
                    <FaStar className="" />
                    <FaStar className="" />
                </div>
                
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
            </div>
        );
    }
   else if (ratings >= 2.5 && ratings <3) {
        return (
            <div className="flex">

                <div className="flex text-yellow-600">
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                
                
                <FaStar/>
                <FaStar/>
            </div>
        );
    }
   else if (ratings >= 3 && ratings <3.5) {
        return (
            <div className="flex">

                <div className="flex text-yellow-600">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    
                </div>
                <FaStar/>
                <FaStar/>
            </div>
        );
    }
   else if (ratings >=3.5 && ratings<4) {
        return (
            <div className="flex">

                <div className="flex text-yellow-600">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                <FaStar/>
            </div>
        );
    }
   else if (ratings >=4 && ratings<4.5) {
        return (
            <div className="flex">

                <div className="flex text-yellow-600">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <FaStar/>
            </div>
        );
    }
   else if (ratings >=4.5 && ratings<5) {
        return (
            <div className="flex">

                <div className="flex text-yellow-600">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
            </div>
        );
    }
    return (
        <div className="flex text-yellow-600">

            <div className="flex text-yellow-600">
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
            </div>

        </div>
    );
};

export default StarRatings;
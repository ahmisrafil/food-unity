import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import RequestDetails from "./RequestDetails";


const FoodRequest = () => {
    const foods = useLoaderData();
    const {user} = useContext(AuthContext); 
    console.log(foods);
    return (
        <div className="mt-10 mb-80 ">
            <h3 className="text-2xl text-center font-semibold">Here is your requested foods </h3>
            <div>
            {
                    foods?.map(food=>food.email === user.email && <RequestDetails key={FoodRequest._id} food={food} ></RequestDetails>)
                }
            </div>
        </div>
    );
};

export default FoodRequest;
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const FoodRequest = () => {
    const foods = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(foods);
    return (
        <div>
            
        </div>
    );
};

export default FoodRequest;
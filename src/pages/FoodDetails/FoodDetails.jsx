import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const foodDetails = useLoaderData();
    console.log(foodDetails);
    return (
        <div>
            <h3>welcome to food details</h3>
        </div>
    );
};

export default FoodDetails;
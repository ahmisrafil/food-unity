import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";


const AvailableFoods = () => {
    const foods = useLoaderData();
    console.log(foods);
    return (
        <div className="my-10">
            <h3 className="text-2xl font-bold text-center">Available Foods</h3>
            <div className="grid  grid-cols-2 lg:grid-cols-3">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;
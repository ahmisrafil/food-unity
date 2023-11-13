import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import { AiOutlineSearch } from "react-icons/ai";

const AvailableFoods = () => {
    const foods = useLoaderData();
    console.log(foods);
    return (
        <div className="my-10">
            <div className="text-center flex flex-col lg:flex-row justify-center gap-14 my-10">
                <div>
                <input type="text" placeholder="Search" className="input  input-accent w-full max-w-xs " />
                <button><AiOutlineSearch className="text-2xl  relative -mt-14 ml-72 p-1 rounded-full border-2"></AiOutlineSearch></button>
                </div>
                <button className="btn btn-ghost">Sort By Validity</button>
            </div>
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
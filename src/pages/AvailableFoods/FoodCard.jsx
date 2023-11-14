/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {
    // console.log(food);
    const {_id, donarImage, donarName, image, location, name, note, quantity, validity } = food;

    return (
        <div className="card card-compact  mx-5  md:mx-10  mt-10 bg-base-200 shadow-xl ">
            <figure><img src={image} className=" lg:h-[40vh] rounded-lg" alt="card-image" /></figure>
            <div className="card-body">
                <h2 className="card card-title  bg-[#57b76a] text-white ">Food Name: {name}</h2>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full">Quantity: {quantity}</h2>
                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full">Exp. Date: {validity} </h2>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full text-center">Pickup Location: {location}</h2>

                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full text-center">Additional Note: {note}</h2>
                </div>
                <div className="mt-4">
                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full text-center">Donar Details</h2>
                    <div className="flex flex-row items-center gap-4">
                        <img src={donarImage} className="rounded-full mt-4" alt="donar-img" />
                        <p><span className="font-bold">Donar Name:</span> {donarName}</p>
                    </div>
                </div>
            </div>
            <div className="text-center mb-10">
                <Link to={`/food/${_id}`}><button className="btn btn-primary bg-[#57b76a] border-none">View Details</button></Link>
            </div>
        </div>
    );
};

export default FoodCard;
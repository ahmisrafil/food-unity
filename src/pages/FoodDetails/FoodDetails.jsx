import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const FoodDetails = () => {
    const foodDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user.email);
    console.log(foodDetails);
    const { _id, donarImage, donarEmail, donarName, image, location, name, note, quantity, validity } = foodDetails;


    const handleRequest =(e)=>{
        e.preventDefault();
    }








    return (
        <div className="card card-compact  mx-5  md:mx-10  mt-10 bg-base-200 shadow-xl ">
            <div className="mt-4 ">
                <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full text-center">Donar Details</h2>
                <div className="flex flex-row mx-auto items-center justify-center my-6 gap-4">
                    <img src={donarImage} className="rounded-full mt-4" alt="donar-img" />
                    <p><span className="font-bold">Donar Name:</span> {donarName}</p>
                </div>
                <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full text-center">Pickup Location: {location}</h2>
            </div>
            <hr className="bg-[#57b76a] border-2 "></hr>

            <figure><img src={image} className=" lg:h-[40vh] rounded-lg mt-6" alt="card-image" /></figure>
            <div className="card-body">
                <h2 className="card card-title  bg-[#57b76a] text-white ">Food Name: {name}</h2>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full">Quantity: {quantity}</h2>
                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full">Exp. Date: {validity} </h2>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold bg-[#57b76a] text-white p-2 rounded-full text-center">Additional Note: {note}</h2>
                </div>

            </div>
            <div className="text-center mb-10">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-primary bg-[#57b76a] border-none" onClick={() => document.getElementById('my_modal_5').showModal()}>Request Food</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">


                        {/* form to show input */}
                        <div>
                            <form className="card-body" onSubmit={handleRequest}>
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Name</span>
                                        </label>
                                        <input type="text" placeholder={name} name="name" className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Image</span>
                                        </label>
                                        <input type="text" placeholder={image} name="image" className="input input-bordered" disabled />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food ID</span>
                                        </label>
                                        <input type="text" placeholder={_id} name="id" className="input input-bordered " disabled />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Pickup Location</span>
                                        </label>
                                        <input type="text" placeholder={location} name="location" className="input input-bordered " disabled />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Request Date/Time</span>
                                        </label>
                                        <input type="date" name="reqDate" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Expired Date/Time</span>
                                        </label>
                                        <input type="text" placeholder={validity} name="validity" className="input input-bordered" disabled />
                                    </div>
                                </div>
                                <div className="form-control my-6">
                                    <h3 className="font-bold">Donar Name:{donarName}</h3>
                                    <h3 className="font-bold">Donar Email:{donarEmail}</h3>
                                    <h3 className="font-bold">User Email:  {user.email}</h3>
                                </div>
                                <div className="flex flex-col md:flex-row gap-8">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Additional Notes</span>
                                        </label>
                                        <input type="text" placeholder="add a note" name="reqNote" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Donation Money</span>
                                        </label>
                                        <input type="text" placeholder="amount to donate" name="donation" className="input input-bordered"  />
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-secondary" type="submit" value="Request Food" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-action">
                            <form method="dialog ">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default FoodDetails; 
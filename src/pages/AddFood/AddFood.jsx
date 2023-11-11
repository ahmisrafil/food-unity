import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const AddFood = () => {
    const { user } = useContext(AuthContext);





    const handleAdd = () => {

    }
    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <h3 className="text-center font-bold text-3xl mt-8">Add Food</h3>
                    <form className="card-body" onSubmit={handleAdd}>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" placeholder="food name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="text" placeholder="image url" name="image" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="text" placeholder="no. of person to be served" name="quantity" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <input type="text" placeholder="location" name="location" className="input input-bordered " required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Expired Date/Time</span>
                                </label>
                                <input type="text" placeholder="expired date/time" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input type="text" placeholder="note about food" name="note" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <h3>Donar Information:</h3>

                            <div className=" flex flex-row gap-2 items-center">
                                <img className="h-[40px] w-[40px] rounded-full " src={user.photoURL} alt="" />
                                <div>
                                    <p>{user.displayName}</p>
                                    <span className="text-xs mr-2">{user.email}</span>
                                </div>
                            </div>



                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-secondary" type="submit" value="Add Food" />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddFood;
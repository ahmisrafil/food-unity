import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const AddFood = () => {
    const { user } = useContext(AuthContext);





    const handleAdd = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const validity = form.validity.value;
        const note = form.note.value;
        const status = form.status.value;
        const donarName = user.displayName;
        const donarEmail = user.email;
        const donarImage = user.photoURL; 
        const food = {name, image, quantity, location, validity, note,status, donarName,donarEmail, donarImage}
        console.log(food);
        form.reset();
        fetch('http://localhost:5000/food', {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(food)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
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
                                <input type="date" placeholder="expired date/time" name="validity" className="input input-bordered" required />
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Status: </span>
                            </label>
                            <select className="select select-info w-[100%] " name="status" defaultValue={`Available`} >
                                <option>Available</option>
                            </select>
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
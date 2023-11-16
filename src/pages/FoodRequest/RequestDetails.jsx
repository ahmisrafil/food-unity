/* eslint-disable react/prop-types */


const RequestDetails = ({ food }) => {

    console.log(food);
    const { _id, donarName, location, validity, reqDate, donation, status } = food;
    console.log(_id, donarName, location, validity, reqDate, donation, status);


    const handleCancle = (_id) => {

    }





    return (
        <div className="card card-side w-[90vw] my-4 mx-auto bg-base-100 shadow-xl p-6">

            <div className="card-body flex-row justify-between">
                <div className="flex flex-col font-bold">
                    <p>Donar:{donarName}</p>
                    <p>Location:{location}</p>
                </div>
                <div className="flex flex-col font-bold">
                    <p>Expire Date:{validity}</p>
                    <p>Request Date:{reqDate}</p>
                </div>
                <div className="flex flex-col font-bold">
                    <p>Donation : ${donation}</p>
                    <p>Status:{status}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleCancle(_id)} className="btn btn-primary">Cancel Request</button>
                </div>
            </div>
        </div>
    );
};

export default RequestDetails;
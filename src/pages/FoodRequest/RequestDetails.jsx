/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'

const RequestDetails = ({ food }) => {

    console.log(food);
    const { _id, donarName, location, validity, reqDate, donation, status } = food;
    console.log(_id, donarName, location, validity, reqDate, donation, status);


    const handleCancle = (_id) => {
        console.log('deleted');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/request/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Cancelled!',
                                'Your request has been cancelled.',
                                'success'
                            )
                        }
                    })

            }
        })
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
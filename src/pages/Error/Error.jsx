import { useNavigate, useRouteError } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";

const Error = () => {
    const error = useRouteError();
    const goHome = useNavigate();

    const handleHome = () =>{
        goHome(`/`);
    }
    return (
        <div className="text-center my-10 rounded-lg shadow-lg w-3/5 mx-auto">
            <h2 className="text-4xl font-semibold text-red-600 mt-10 mb-10">Oops!!! </h2>
            
                <BsFillXCircleFill className="text-center mx-auto my-4 text-orange-600 text-6xl"></BsFillXCircleFill>
            
            <p className="my-4"><i>{error.error.message}</i></p>

            {
                error.status === 404 &&
                <div>
                    <h3>Page Not Found !</h3>
                    <button className="btn btn-secondary mt-4 mb-10"  onClick={handleHome}>Go Home</button>
                </div>
            }
        </div>
    );
};

export default Error;
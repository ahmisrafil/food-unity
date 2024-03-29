import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className="text-center h-[50vh]"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes ={
    children: PropTypes.node
}
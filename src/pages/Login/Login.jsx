import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);

const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    signInUser(email,password)
    .then(result=>{
        console.log(result.user);
        e.target.reset();
        toast.success("Login Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    })
    .catch(()=>{
        toast.error("Invalid Email or Password", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    });
}




const handleGoogleLogIn = ()=>{
    googleSignIn()
    .then(result => {
        console.log(result);
        toast.success('Registration Successful!!!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate('/');
    })
    .catch(error => {
        console.log(error.message);
    })
}
    return (
        <div>
        <div className="hero min-h-screen bg-[#ca571469]">
            <div className="hero-content  flex-col lg:flex-row-reverse lg:gap-0">
                <div className="text-center lg:text-left lg:bg-[url('https://i.ibb.co/q16dWvh/back.png')] lg:h-[472px] lg: lg:rounded-r-lg lg:p-10 lg:text-white lg:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login to explore the world of Electro.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 lg:rounded-r-none ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="password"
                                name="password"
                                className="input input-bordered" required />
                            <span onClick={() => { setShowPass(!showPass) }} className="absolute ml-72 mt-12 text-xl">
                                {showPass ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <div onClick={handleGoogleLogIn} className="mb-8 btn mx-8 rounded-3xl">

                        <div className="flex flex-row gap-4 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <p>Continue with google</p>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <p>Don't Have an Account..! <NavLink className="text-blue-600" to='/register'>Register Now</NavLink> </p>
                    </div>
                </div>
            </div>
            
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Login;
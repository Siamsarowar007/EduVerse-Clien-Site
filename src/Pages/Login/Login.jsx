import React, { use, useState} from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
// import loginLottie from '../../assets/Lottie-Animation/Login-Animation - 1748612619349.json';
import registerLottie from "../../assets/Lottie-Animation/Register-Animation.json";
import Lottie from 'lottie-react';
import SocialLogin from '../../Shared/SocialLogin';
import { useNavigate, useLocation, Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signInUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.name.value;
        const password = form.password.value;
        setError("");
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message || "Error signing in");
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-8">
            <title>Login || EduVerse</title>
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full rounded-3xl overflow-hidden ">

                {/* Lottie */}
                <div className="w-full lg:w-1/2 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center justify-center p-10">
                    <Lottie className="w-full max-w-md" animationData={registerLottie} loop={true}></Lottie>
                </div>

                {/* Login Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <div className="card w-full max-w-md mx-auto bg-white border border-blue-300 shadow-lg rounded-xl">
                        <div className="card-body">
                            <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-4">Login Now!</h1>
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset flex flex-col gap-2">
                                    <label className="label text-blue-700 font-semibold">Email</label>
                                    <input type="email" name="name" className="input input-bordered border-blue-400 w-full" placeholder="Email" />
                                    
                                    <label className="label text-blue-700 font-semibold">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            className="input input-bordered border-blue-400 w-full pr-10"
                                            placeholder="Password"
                                        />
                                        <span
                                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            tabIndex={0}
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash className="w-5 h-5 text-blue-700" />
                                            ) : (
                                                <FaEye className="w-5 h-5 text-blue-700" />
                                            )}
                                        </span>
                                    </div>

                                    {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}

                                    <div className="text-sm text-blue-500 hover:underline cursor-pointer">
                                        Forgot password?
                                    </div>

                                    <button className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold mt-4">
                                        Login
                                    </button>
                                </fieldset>
                            </form>

                            <SocialLogin></SocialLogin>

                            <p className='font-semibold text-center text-md pt-2'>
                                Don't have an account? 
                                <Link to='/register' className='text-purple-700 font-bold ml-1 hover:underline'>Register</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;

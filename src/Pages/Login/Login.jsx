import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import loginLottie from '../../assets/Lottie-Animation/Login-Animation - 1748612619349.json'
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
        <div className="hero bg-base-200 min-h-screen">
            <title>Login || EduVerse</title>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='ml-4' style={{ width: "260px" }} animationData={loginLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="name" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="input w-full pr-10"
                                        placeholder="Password"
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        tabIndex={0}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="w-5 h-5" />
                                        ) : (
                                            <FaEye className="w-5 h-5" />
                                        )}
                                    </span>
                                    
                                </div>
                                {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                {/* <p className='text-accent font-semibold text-center text-md pt-2'>Don't Have An Account ? <Link to='/register' className=' text-secondary font-bold hover:text-primary'>Register...</Link></p> */}
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className=' font-semibold text-center text-md pt-2'>Allready Have An Account ? <Link to='/register' className='text-red-600 font-bold hover:text-primary'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
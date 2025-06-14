import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import registerLottie from "../../assets/Lottie-Animation/Register-Animation.json";
import Lottie from "lottie-react";
import SocialLogin from '../../Shared/SocialLogin';
import { useNavigate, Link } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const { createUser } = use(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validatePassword = (password, email) => {
        const minLength = /.{8,}/;
        const upper = /[A-Z]/;
        const lower = /[a-z]/;
        const special = /[!@#$%^&*(),.?":{}|<>]/;
        const number = /[0-9]/;
        if (!minLength.test(password)) return "Password must be at least 8 characters long.";
        if (!upper.test(password)) return "Password must have at least one uppercase letter.";
        if (!lower.test(password)) return "Password must have at least one lowercase letter.";
        if (!special.test(password)) return "Password must have at least one special character.";
        if (!number.test(password)) return "Password must have at least one number.";
        if (email && password.toLowerCase().includes(email.toLowerCase())) return "Password cannot contain the email address.";
        return null;
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const errorMsg = validatePassword(password, email);
        if (errorMsg) {
            alert(errorMsg);
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const result = await createUser(email, password);
            await updateProfile(result.user, {
                displayName: name,
                photoURL: photoURL
            });
            navigate("/");
        } catch (error) {
            alert(error.message || "Error registering user");
        }
    };

    return (
        <div className="hero bg-gradient-to-r from-blue-100 via-white to-purple-100 min-h-screen">
            <title>Register || EduVerse</title>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='ml-4' style={{ width: "260px" }} animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl border border-blue-300 rounded-xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-4">Register Now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset flex flex-col gap-2">
                                <label className="label text-blue-700 font-semibold">Name</label>
                                <input type="text" name="name" className="input input-bordered border-blue-400" placeholder="Name" required />
                                
                                <label className="label text-blue-700 font-semibold">Photo URL</label>
                                <input type="text" name="photoURL" className="input input-bordered border-blue-400" placeholder="Photo URL" required />
                                
                                <label className="label text-blue-700 font-semibold">Email</label>
                                <input type="email" name="email" className="input input-bordered border-blue-400" placeholder="Email" required />
                                
                                <label className="label text-blue-700 font-semibold">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="input input-bordered border-blue-400 w-full pr-10"
                                        placeholder="Password"
                                        required
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        tabIndex={0}
                                    >
                                        {showPassword ? <FaEyeSlash className="w-5 h-5 text-blue-700" /> : <FaEye className="w-5 h-5 text-blue-700" />}
                                    </span>
                                </div>

                                <label className="label text-blue-700 font-semibold">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        className="input input-bordered border-blue-400 w-full pr-10"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        tabIndex={0}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash className="w-5 h-5 text-blue-700" /> : <FaEye className="w-5 h-5 text-blue-700" />}
                                    </span>
                                </div>

                                <div className='text-xl font-bold text-blue-700 mt-3'>Create a password that:</div>
                                <ul className="text-sm text-gray-500 mb-2 ml-1">
                                    <li>✔ At least 8 characters</li>
                                    <li>✔ Lower & Uppercase letters</li>
                                    <li>✔ At least one number/symbol</li>
                                    <li>✔ Not include email</li>
                                </ul>

                                <button className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold mt-4">
                                    Register
                                </button>
                            </fieldset>
                        </form>

                        <SocialLogin />

                        <p className='font-semibold text-center text-md pt-2'>
                            Already have an account? 
                            <Link to='/login' className='text-purple-700 font-bold ml-1 hover:underline'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

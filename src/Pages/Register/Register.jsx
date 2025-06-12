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
    const navigate = useNavigate(); // for redirection
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

        // Password validation
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
            // Update user profile
            await updateProfile(result.user, {
                displayName: name,
                photoURL: photoURL
            });
            // Redirect to homepage
            navigate("/");
        } catch (error) {
            alert(error.message || "Error registering user");
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <title>Register || EduVerse</title>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='ml-4' style={{ width: "260px" }} animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" required />
                                <label className="label">Photo URL</label>
                                <input type="text" name="photoURL" className="input" placeholder="Photo URL" required />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="input w-full pr-10"
                                        placeholder="Password"
                                        required
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
                                <label className="label">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        className="input w-full pr-10"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        tabIndex={0}
                                    >
                                        {showConfirmPassword ? (
                                            <FaEyeSlash className="w-5 h-5" />
                                        ) : (
                                            <FaEye className="w-5 h-5" />
                                        )}
                                    </span>
                                </div>
                                <div className='text-xl font-bold'>Create a password that:</div>
                                <ul className="text-xs text-gray-500 mb-2 ml-1">
                                    <li><span className="text-green-600 font-bold">&#10005;</span> contains at least 6 characters</li>
                                    <li><span className="text-green-600 font-bold">&#10005;</span> contains both lower (a-z) and upper case letters (A-Z)</li>
                                    <li><span className="text-green-600 font-bold">&#10005;</span> contains at least one number (0-9) or a symbol</li>
                                    <li><span className="text-green-600 font-bold">&#10005;</span> does not contain your email address</li>
                                </ul>
                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                <button className="btn btn-neutral mt-4">Register</button>
                                {/* <p className='text-accent font-semibold text-center text-md pt-2'>Allready Have An Account ? <Link to='/login' className='text-red-600 font-bold hover:text-primary'>Login...</Link></p> */}
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>

                        <p className=' font-semibold text-center text-md pt-2'>Allready Have An Account ? <Link to='/login' className='text-red-600 font-bold hover:text-primary'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
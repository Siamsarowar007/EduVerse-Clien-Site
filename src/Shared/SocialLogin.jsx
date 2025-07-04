import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { FaGithub } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGithub } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log("User signed in with Google:", user);
                   Swal.fire({ 
                    icon: 'success',
                    title: 'Logged in!',
                    text: `Welcome, ${user.displayName || 'User'} 😊`,
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Error signing in with Google:", error);
                  Swal.fire({ 
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log("User signed in with Github:", user);
                 Swal.fire({
                    icon: 'success',
                    title: 'Logged in!',
                    text: `Welcome, ${user.displayName || 'User'} 😊`,
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Error signing in with Github:", error);
                 Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    };

    return (
        <div className="flex w-full flex-col">
            
            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mb-2">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
            <div className="divider my-1">OR</div>
            <button onClick={handleGithubSignIn} className="btn bg-black text-white border-[#e5e5e5] flex items-center justify-center">
                <FaGithub className="mr-2" size={18} />
                Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;
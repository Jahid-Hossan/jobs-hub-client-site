import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc"
import { GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const { logIn, googlePopUp } = useAuth()
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googlePopUp(provider)
            .then(res => {
                toast.success('Log in successful', {
                    duration: 2000,
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(`${err}`, {
                    duration: 2000,
                })
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        // e.target.email.value = '';
        const password = event.target.password.value;
        // e.target.password.value = '';

        if (password.length < 6) {
            return toast.error('Your password should have at least 6 characters or longer')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should have at least one capital letter')
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            return toast.error('Your password should have at least one special character')
        }

        logIn(email, password)
            .then(res => {
                toast.success('Login Successful')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(`${err.code}`)
            })

    }



    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-400">Don't have account?
                    <NavLink to={'/register'} className="focus:underline text-prim hover:underline"> Register here</NavLink>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
                        <FcGoogle className='text-2xl' />
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form onSubmit={handleLogin} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm">Password</label>
                                {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a> */}
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                    </div>
                    <button type="submit" className="btn bg-prim w-full ">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
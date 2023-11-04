import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pic, setPic] = useState('');

    const { passwordSignUp, handleUpdateUser } = useAuth()

    console.log(email, password, pic)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            return toast.error('Your password should have at least 6 characters or longer', {
                duration: 1000,
            });
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should have at least one capital letter', {
                duration: 1000,
            });
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            return toast.error('Your password should have at least one special character', {
                duration: 1000,
            });
        }
        passwordSignUp(email, password)
            .then(res => {
                console.log(res)
                handleUpdateUser(name, pic)
                    .then(() => {
                        toast.success('Register Successful', {
                            duration: 1000,
                        });
                    })
            })
            .catch(err => {
                console.log(err.code)
                if (err.code == "auth/email-already-in-use") {
                    toast.error("The email address is already in use", {
                        duration: 4000,
                    });
                }

            })
    }

    return (
        <div className='flex justify-center'>
            <div className="w-full  max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>
                <p className="text-sm mb-5 text-center dark:text-gray-400">Already have an account?
                    <NavLink to={'/login'} className="focus:underline text-prim hover:underline"> Sign in here</NavLink>
                </p>
                {/* <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div> */}

                {/*  */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">

                        {/* Name */}
                        <div className="space-y-2">
                            <label className="block text-sm">Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} name="Name" id="Name" placeholder="Jahid Hossan" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        {/* email */}
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="something@mail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        {/* password */}
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        {/* profile pic */}
                        < div className="space-y-2">
                            <label className="block text-sm">Image</label>
                            <input type="text" onChange={(e) => setPic(e.target.value)} name="pic" id="pic" placeholder="https://something.co" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                    </div>
                    <button type="submit" className="btn bg-prim w-full ">Sign up</button>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pic, setPic] = useState('');
    const navigate = useNavigate()

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
                        // navigate(location?.state ? location.state : '/home')
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
                    <NavLink to={'/login'} className="focus:underline text-prim hover:underline"> Log in here</NavLink>
                </p>

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
                                {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a> */}
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
        </div>
    );
};

export default Register;
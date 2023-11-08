
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './../Component/Navbar';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from '../Component/Footer';

const Root = () => {

    const location = useLocation()

    console.log(location.pathname)

    useEffect(() => {

        if (location.pathname === "/") {
            document.title = `Jobs Hub-home`;
        } else {
            document.title = `Jobs Hub ${location.pathname.replace("/", " | ")}`;
        }

        if (location.state) {
            document.title = ` ${location.state}`;
        }

    }, [location.pathname])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './../Component/Navbar';
import { useEffect } from 'react';

const Root = () => {

    const location = useLocation()

    console.log(location.pathname)

    useEffect(() => {

        if (location.pathname === "/") {
            document.title = `Jobs Hub-home`;
        } else {
            document.title = `Jobs Hub ${location.pathname.replace("/", "-")}`;
        }

        if (location.state) {
            document.title = ` ${location.state}`;
        }

    }, [location.pathname])

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;
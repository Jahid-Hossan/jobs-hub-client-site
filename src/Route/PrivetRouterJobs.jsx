import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

const PrivetRouterJobs = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div className="container mx-auto py-[20vh]">
            <Oval
                height={80}
                width={1536}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    }

    if (!user) {
        toast.error("You need to login first to view details")
        return < Navigate state={location.pathname} to='/login' />
    }

    return children;
};

export default PrivetRouterJobs;
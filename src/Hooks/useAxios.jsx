import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const instance = axios.create({
    baseURL: 'https://jobs-hub-server.vercel.app',
    withCredentials: true
})

const useAxios = () => {

    const { logOut } = useAuth()
    const navigate = useNavigate();



    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log(error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [])



    return instance

};

export default useAxios;
import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import useAuth from '../Hooks/useAuth';
import MyJob from '../Component/MyJob';

const MyJobs = () => {
    const [myJobs, setMyJobs] = useState();

    const axios = useAxios();
    const { user } = useAuth();

    const url = `/myJobs?email=${user.email}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMyJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [axios, url])

    return (
        <div className='container mx-auto space-y-3 rounded-lg'>
            {
                myJobs?.map(myJob => <MyJob key={myJob._id} myJob={myJob}></MyJob>)
            }
        </div>
    );
};

export default MyJobs;
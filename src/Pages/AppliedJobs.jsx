import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import AppliedJob from '../Component/AppliedJob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [category, setCategory] = useState(null)

    const { user } = useAuth();
    const axios = useAxios()

    console.log(user?.email)

    const url = `/appliedJobs?applicantEmail=${user?.email}&category${category}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setAppliedJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [url, axios])

    console.log(appliedJobs)

    return (
        <div className='container mx-auto space-y-3'>
            {
                appliedJobs?.map(appliedJob => <AppliedJob
                    key={appliedJob._id}
                    appliedJob={appliedJob}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;
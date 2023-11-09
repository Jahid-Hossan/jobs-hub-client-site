import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import AppliedJob from '../Component/AppliedJob';
import { usePDF } from 'react-to-pdf';
import { FaDownload } from 'react-icons/fa';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [category, setCategory] = useState('')

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const { user } = useAuth();
    const axios = useAxios()

    console.log(user?.email)

    let url = `/appliedJobs?applicantEmail=${user?.email}`;
    if (category) {
        url = `/appliedJobs?applicantEmail=${user?.email}&category=${category}`

    }

    // const url = `/appliedJobs?applicantEmail=${user?.email}&category=${category}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setAppliedJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [url, axios])

    console.log(appliedJobs)

    return (

        <div className='container mx-auto px-5 my-10'>
            <div>
                <div className='flex justify-between items-center'>
                    <div className="w-8/12 lg:w-2/12">
                        <label className="text-sm">Filter</label>
                        <select onChange={(e) => setCategory(e.target.value)} name="category" id="" className='w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900' required>
                            <option disabled selected value='' >Select Category</option>
                            <option value='' >Show All</option>
                            <option value="On Site">On Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <p className='flex gap-1.5 items-center' ><span>Download PDF</span><button className='btn btn-circle btn-ghost btn-sm hover:bg-prim'><FaDownload onClick={() => toPDF()}></FaDownload></button></p>
                </div>
                <div ref={targetRef}>

                    <div className=' my-10 space-y-3'>
                        {
                            appliedJobs?.map(appliedJob => <AppliedJob
                                key={appliedJob._id}
                                appliedJob={appliedJob}
                            ></AppliedJob>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppliedJobs;


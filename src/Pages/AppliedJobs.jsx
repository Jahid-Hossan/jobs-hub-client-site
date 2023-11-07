import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import AppliedJob from '../Component/AppliedJob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [category, setCategory] = useState('')

    const { user } = useAuth();
    const axios = useAxios()

    console.log(user?.email)

    let url = `/appliedJobs?applicantEmail=${user?.email}`;
    if (category) {
        url = `/appliedJobs?applicantEmail=${user?.email}&category=${category}`
    }

    // const url = `/appliedJobs?applicantEmail=${user?.email}&category=${category}`

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
        <div className='container mx-auto px-5 my-10'>
            <div>
                {/* <fieldset className='flex gap-4 items-center'>
                    <div className=''>
                        <input className='' type="radio" name="category" id="" />
                        <label htmlFor="">On Site</label>
                    </div>
                    <div>
                        <input type="radio" name="category" id="" />
                        <label htmlFor="">Remote</label>
                    </div>
                    <div>
                        <input type="radio" name="category" id="" />
                        <label htmlFor="">Part-Time</label>
                    </div>
                    <div>
                        <input type="radio" name="category" id="" />
                        <label htmlFor="">Hybrid</label>
                    </div>
                </fieldset> */}

                <div className="w-full lg:w-2/12">
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

            </div>
            <div className=' my-10 space-y-3'>
                {
                    // appliedJobs.length !== 0 ?

                    appliedJobs?.map(appliedJob => <AppliedJob
                        key={appliedJob._id}
                        appliedJob={appliedJob}
                    ></AppliedJob>)
                    // :
                    // <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
                    //     <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
                    //             <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                    //             <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                    //             <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                    //             <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
                    //         </svg>
                    //         <p className="text-3xl">Looks like You </p>
                    //         <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a>
                    //     </div>
                    // </section>
                }
            </div>
        </div>
    );
};

export default AppliedJobs;


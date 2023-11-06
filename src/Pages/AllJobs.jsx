import { useEffect, useState } from 'react';
import BannerAllJobs from '../Component/BannerAllJobs/BannerAllJobs';
import JobDetails from '../Component/JobDetails';
import useAxios from '../Hooks/useAxios';

const AllJobs = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [jobs, setJobs] = useState([]);

    const axios = useAxios();

    console.log({ jobs })
    // console.log(allJobs)

    const url = `/listedJobs`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const data = res.data;
                setAllJobs(data)
                setJobs(data)

            })
    }, [axios, url])

    const handleSearch = (e) => {

        e.preventDefault();
        console.log(e.target.name.value)
        const getValue = e.target.name.value;
        e.target.name.value = ''

        let items = []
        const value = getValue.toLowerCase()
        allJobs.map(job => {
            const jobTitle = job.title.toLowerCase();
            console.log(jobTitle.includes(value))
            const filtered = jobTitle.includes(value)
            if (filtered) {
                items.push(job)
            }
        })
        // job.title.toLowerCase() === e.toLowerCase()
        console.log(items)
        if (items.length > 0) {
            setJobs(items)
        } else {
            setJobs(allJobs)
        }

    }

    return (
        <div>
            <BannerAllJobs handleSearch={handleSearch} ></BannerAllJobs>
            <div className=" container mx-auto my-10">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        jobs.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllJobs;
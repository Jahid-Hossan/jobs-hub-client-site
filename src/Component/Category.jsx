import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAddedJobs from '../Hooks/useAddedJobs';
import { useEffect, useState } from 'react';
import useAxios from './../Hooks/useAxios';
import JobDetails from './JobDetails';

const Category = () => {
    const [category, setCategory] = useState('')
    const [jobs, setJobs] = useState([]);

    const axios = useAxios();

    console.log(jobs)
    console.log(category)

    const url = `/listedJobs?category=${category}`

    useEffect(() => {
        axios.get(url)
            .then(res => setJobs(res.data))
    }, [axios, url])

    // const handleCategory = (e) => {
    //     console.log(e)
    //     const url = `/listedJobs?jobCategory=${e}`


    // }


    return (
        <div className='my-14'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => setCategory("")}>All Jobs</Tab>
                    <Tab onClick={() => setCategory("On Site")}>On Site</Tab>
                    <Tab onClick={() => setCategory("Remote")}>Remote</Tab>
                    <Tab onClick={() => setCategory("Part-Time")}>Part-Time</Tab>
                    <Tab onClick={() => setCategory("Hybrid")}>Hybrid</Tab>
                </TabList>

                {/* all job tab */}
                <TabPanel className="my-10">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            jobs.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                        }
                    </div>
                </TabPanel>
                {/* 2nd tab */}
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            jobs.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                        }
                    </div>
                </TabPanel>
                {/* 3rd tab */}
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            jobs.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                        }
                    </div>
                </TabPanel>
                {/* 4th tab */}
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            jobs.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                        }
                    </div>
                </TabPanel>
                {/* 5th tab */}
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            jobs.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;
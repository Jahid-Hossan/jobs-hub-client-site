import '../Component/Banner/banner.css'
import Banner from '../Component/Banner/Banner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import useAxios from './../Hooks/useAxios';
import JobDetails from './../Component/JobDetails';
import HrExpert from '../Component/HrExpert';
import Contact from '../Component/Contact';


const Home = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [category, setCategory] = useState('')
    const [jobs, setJobs] = useState([]);

    const axios = useAxios();

    // console.log(category)

    const url = `/listedJobs?category=${category}`

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
        const searched = e.target.name.value;
        e.target.name.value = ''

        // let items = [];
        // allJobs?.map(job => {
        //     const jobTitle = job.title.toLowerCase();
        //     console.log(jobTitle.includes(searched))
        // })

        let items = []
        allJobs?.map(job => {
            const jobTitle = job.title.toLowerCase();
            console.log(jobTitle.includes(searched))
            const filtered = jobTitle.includes(searched)
            if (filtered) {
                items.push(job)
                // console.log('gotted', job)
            }
        })
        if (items.length > 0) {
            setJobs(items)
        } else {
            setJobs()
        }
    }


    return (
        <div>
            <div className=' banner lg:h-[70vh]'>
                <Banner handleSearch={handleSearch}></Banner>
            </div>
            <div className='container mx-auto'>
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
                                    jobs?.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                                }
                            </div>
                        </TabPanel>
                        {/* 2nd tab */}
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                {
                                    jobs?.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                                }
                            </div>
                        </TabPanel>
                        {/* 3rd tab */}
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                {
                                    jobs?.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                                }
                            </div>
                        </TabPanel>
                        {/* 4th tab */}
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                {
                                    jobs?.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                                }
                            </div>
                        </TabPanel>
                        {/* 5th tab */}
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                {
                                    jobs?.map(job => <JobDetails key={job._id} job={job}></JobDetails>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <div>
                <HrExpert></HrExpert>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;
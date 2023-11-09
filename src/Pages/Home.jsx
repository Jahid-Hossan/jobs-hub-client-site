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

            {/* <div className='container mx-auto text-center my-5 lg:my-10'>
                <h1 className="text-xl lg:text-5xl font-bold">Find the right job for you</h1>
            </div> */}

            <div className='container mx-auto'>
                <div className='my-8'>
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
                <section className="py-10  sm:py-16 lg:py-24">
                    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                            <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-prim  to-blue-600"> 6000+ </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium text-gray-900">Register Freelancers</p>
                                <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-prim  to-blue-600"> 1670 </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium text-gray-900">Employees</p>
                                <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-prim to-blue-600"> 160+ </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium text-gray-900">Jobs</p>
                                <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;
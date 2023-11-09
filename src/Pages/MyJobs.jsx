import { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import useAuth from '../Hooks/useAuth';
import MyJob from '../Component/MyJob';
import BannerMyJobs from '../Component/BannerMyJobs';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

const MyJobs = () => {
    const [myJobs, setMyJobs] = useState();

    const axios = useAxios();
    const { user } = useAuth();

    const url = `/myJobs?email=${user.email}`
    console.log(user.email)

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMyJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [axios, url])

    return (
        <div className='container mx-auto space-y-3 rounded-lg'>
            <div className='flex flex-col-reverse lg:flex-row items-center'>
                <div className='space-y-10 lg:w-1/2'>
                    <p className=' text-2xl lg:text-5xl font-bold'>Find thousands of professional workers by your job post</p>
                    <Link to={'/add-a-job'} className='btn btn-ghost w-1/2 bg-prim rounded-full'>Add A Job <BsArrowRight></BsArrowRight></Link>
                </div>
                <div className='lg:w-1/2'><BannerMyJobs></BannerMyJobs></div>
            </div>
            <div className='space-y-5 my-5 md:my-10'>
                {
                    myJobs?.length !== 0 ?
                        <div>
                            {
                                myJobs?.map(myJob => <MyJob
                                    key={myJob._id}
                                    myJob={myJob}
                                    myJobs={myJobs}
                                    setMyJobs={setMyJobs}
                                ></MyJob>)
                            }
                        </div>
                        :
                        <div className='text-center mb-10'>
                            <Player
                                src='https://lottie.host/f81f86a2-6995-467d-86f0-b308f58dabcf/6GBm6nHMaI.json'
                                className="player"
                                loop
                                autoplay
                                style={{ height: '300px', width: '300px' }}
                            />
                            <h2 className='text-5xl font-bold'>You didn't post any job yet</h2>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyJobs;
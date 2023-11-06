import { useState } from 'react';
import './BannerAllJobs.css'

const BannerAllJobs = ({ handleSearch }) => {



    return (
        <div className='container mx-auto h-[70vh] banner rounded-lg'>
            <div className='py-[25vh]  text-center mx-auto space-y-3 lg:space-y-7'>
                <h2 className=' text-2xl lg:text-6xl font-bold text-white'>Find Your Dream Job</h2>
                {/* <h2 className=' text-2xl lg:text-4xl font-bold text-white'>One million success stories. <br /><span className='text-prim'>Start yours today.</span></h2> */}
                <p className='text-white'>Find 40,000+ Jobs, Employment & Career Opportunities</p>
                <div className=''>
                    <form onSubmit={handleSearch} action="">
                        <input className="w-2/3 rounded-l-full  py-3" type="text" name='name' placeholder='Enter job title...' />
                        <button type='submit' className=' py-3 px-6 rounded-r-full bg-prim'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BannerAllJobs;
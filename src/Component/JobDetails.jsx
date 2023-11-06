import React from 'react';
import { Link } from 'react-router-dom';

const JobDetails = ({ job }) => {
    // console.log(Object.keys(job).join())
    // console.log(job)
    const {
        _id,
        name,
        email,
        title,
        category,
        salaryFrom,
        salaryTo,
        startDate,
        deadline,
        description,
        applicantNo,
        image,
    } = job;
    return (
        <div className=' p-4 shadow-md flex items-center justify-between rounded-lg'>
            {/* <div>
                <img className='w-48 rounded-lg' src={image} alt="" />
            </div> */}
            <div className='space-y-1'>
                <h2 className=' text-xl lg:text-2xl font-bold'>{title}</h2>
                <p className='text-sm text-gray-500 lg:inline  lg:mr-3'>Publisher: <span className='text-black'>{name}</span></p>
                <p className='text-sm text-gray-500 font-semibold inline'>Date: {startDate}</p>
                <p className='text-lg pb-2 font-semibold'>Deadline: {deadline}</p>
                {/* <h2 className='text-xl pb-2 font-bold'>Salary: <span className='text-2xl'>{salaryFrom}$ - {salaryTo}$</span></h2> */}
                <p className='bg-prim inline  px-2 py-1 text-white font-semibold rounded'>{category}</p>
                <p className='inline ml-3'>{applicantNo} People Applied</p>
            </div>
            <div className='space-y-2'>
                <h2 className=' text-base lg:text-2xl pb-2 font-semibold lg:font-bold'>{salaryFrom}$ - {salaryTo}$</h2>
                <button className='btn-sm   lg:btn-lg btn btn-ghost  w-full bg-prim'><Link to={`/details/${_id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default JobDetails;
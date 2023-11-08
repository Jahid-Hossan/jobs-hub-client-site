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

                <p className='bg-prim inline  px-2 py-1 text-white font-semibold rounded'>{category}</p>
                <p className='inline ml-3'>{applicantNo} People Applied</p>
            </div>
            <div className='space-y-2 text-right'>
                <h2 className=' text-base lg:text-2xl pb-2 font-semibold lg:font-bold'>{salaryFrom}$ - {salaryTo}$</h2>
                <button className='btn-sm   lg:btn-lg  btn btn-ghost   bg-prim'><Link to={`/details/${_id}`}>View Details</Link></button>
            </div>

            {/* <div>
                <div className='grid grid-cols-12 gap-3 items-center  shadow-sm bg-slate-50'>

                    <div className="col-span-2">
                        <div className="">
                            <a href=""><img src={image} alt="" className="" /></a>
                        </div>
                    </div>

                    <div className="col-span-5">
                        <div className="text-base font-bold px-4 py-1 bg-prim inline rounded-md">{category}</div>
                        <h3 className='text-2xl font-bold my-3'><a href="" title="">{title}</a></h3>
                        <small className='space-x-3'>
                            <span className='text-lg font-medium'>Publisher : {name}</span>
                            <span className='text-lg font-medium'>Published Date: {startDate}</span>

                        </small>
                    </div>


                    <div className="col-span-3">
                        <div className=" ">
                            <h2 className="text-base font-bold  inline rounded-md">Applicant Details:</h2>
                            <p className='text-lg my-3 font-medium'>Name: {applicantName}</p>
                            <small className='text-lg font-medium'>Email: {applicantEmail}</small>
                        </div>
                    </div>

                    <div className="col-span-2 ">
                        <div className="">
                            <h4 className='text-2xl font-bold my-3'>${salaryFrom} - ${salaryTo}</h4>
                            <p className='text-lg font-medium'>Deadline: {deadline}</p>

                        </div>
                    </div>

                </div >
            </div> */}

        </div>
    );
};

export default JobDetails;
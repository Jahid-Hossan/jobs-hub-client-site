import React from 'react';

const AppliedJob = ({ appliedJob }) => {

    // console.log(Object.keys(appliedJob).join())

    const {
        _id, name, email, applicantName, applicantEmail, title, category, salaryFrom, salaryTo, startDate, deadline, description, applicantNo, image, cv } = appliedJob;

    return (
        <div className='grid grid-cols-12  gap-3 items-center  shadow-sm bg-slate-50'>

            <div className=" col-span-1 lg:col-span-2">
                <div className="">
                    <a href=""><img src={image} alt="" className="" /></a>
                </div>
            </div>

            <div className=" col-span-1 lg:col-span-5">
                <div className="text-base font-bold px-4 py-1 bg-prim inline rounded-md">{category}</div>
                <h3 className='text-2xl font-bold my-3'><a href="" title="">{title}</a></h3>
                <small className='space-x-3'>
                    <span className='text-lg font-medium'>Publisher : {name}</span>
                    <span className='text-lg font-medium'>Published Date: {startDate}</span>

                </small>
            </div>


            <div className=" col-span-1 lg:col-span-3">
                <div className=" ">
                    <h2 className="text-base font-bold  inline rounded-md">Applicant Details:</h2>
                    <p className='text-lg my-3 font-medium'>Name: {applicantName}</p>
                    <small className='text-lg font-medium'>Email: {applicantEmail}</small>
                </div>
            </div>

            <div className=" col-span-1 lg:col-span-2 ">
                <div className="">
                    <h4 className='text-2xl font-bold my-3'>${salaryFrom} - ${salaryTo}</h4>
                    <p className='text-lg font-medium'>Deadline: {deadline}</p>

                </div>
            </div>

        </div >
    );
};

export default AppliedJob;
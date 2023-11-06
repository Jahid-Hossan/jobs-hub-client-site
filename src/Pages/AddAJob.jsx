import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from './../Hooks/useAuth';

const AddAJob = () => {

    const { user } = useAuth()

    const [startDate, setStartDate] = useState(new Date())
    const [applicationDeadline, setApplicationDeadline] = useState(new Date())

    console.log(user.displayName)

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const salaryFrom = form.salaryFrom.value;
        const salaryTo = form.salaryTo.value;
        const description = form.description.value;
        const applicantNo = form.applicantNo.value;
        const image = form.image.value;
        const deadline = applicationDeadline.toLocaleDateString();
        const postDate = startDate.toLocaleDateString();
        // const date = form.date.value;

        // console.log(date)
        console.log(
            name,
            email,
            category,
            salaryFrom,
            salaryTo,
            startDate,
            deadline,
            description,
            applicantNo,
            image,
        )
    }

    return (
        <div>
            this is add a job section
            <div>
                <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={handleAddJob} action="" className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                            {/* <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Personal Inormation</p>
                                <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                            </div> */}
                            <div className="grid grid-cols-6 gap-4 col-span-full ">
                                {/* name */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Name</label>
                                    <input defaultValue={user.displayName} name='name' type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* email */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Email</label>
                                    <input defaultValue={user.email} type="text" name='email' placeholder="email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job category */}
                                <div className="col-span-full sm:col-span-4">
                                    <label className="text-sm">Job Category</label>
                                    {/* <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                                    <select name="category" id="" className='w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900' required>
                                        <option value="">Select Category</option>
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>
                                {/* salary range */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm">Salary Range From</label>
                                    <input name='salaryFrom' id="address" type="text" placeholder="From 0$" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm">To</label>
                                    <input name='salaryTo' id="address" type="text" placeholder="To 0$" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job description */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Job Description</label>
                                    <input name='description' id="city" type="text" placeholder="Job Description" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job posting date */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm block">Job Posting Date</label>
                                    <DatePicker className="w-full rounded-md focus:ring focus:ri focus:ri mt-1 dark:border-gray-700 dark:text-gray-900" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    {/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                                </div>
                                {/* application deadline */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm block">Application Deadline</label>
                                    {/* <input name="date" type="date" /> */}
                                    <DatePicker className="w-full rounded-md focus:ring focus:ri focus:ri mt-1 dark:border-gray-700 dark:text-gray-900" selected={startDate} onChange={(date) => setApplicationDeadline(date)} />
                                </div>
                                {/* job applicants number */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm">Job Applicants number</label>
                                    <input name="applicantNo" id="username" type="number" placeholder="0" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                {/* photo url */}
                                <div className="col-span-full ">
                                    <label className="text-sm">Photo Url</label>
                                    <input name="image" id="username" type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* photo url */}
                                {/* <div className="col-span-full">
                                    <label className="text-sm">Photo Url</label>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                        <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                                    </div>
                                </div> */}
                                <button className="btn w-full bg-prim" type="submit">Submit</button>

                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddAJob;
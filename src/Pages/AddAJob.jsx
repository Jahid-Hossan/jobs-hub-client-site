import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from './../Hooks/useAuth';
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import PostAJobBanner from "../Component/PostJob/PostAJobBanner";

const AddAJob = () => {

    const { user } = useAuth()
    const axios = useAxios();
    const [postedDate, setPostedDate] = useState(new Date())
    const [applicationDeadline, setApplicationDeadline] = useState(new Date())

    // console.log(user.displayName)

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const category = form.category.value;
        const salaryFrom = form.salaryFrom.value;
        const salaryTo = form.salaryTo.value;
        const description = form.description.value;
        const applicantNo = form.applicantNo.value;
        const image = form.image.value;
        const deadline = applicationDeadline.toLocaleDateString();
        const startDate = postedDate.toLocaleDateString();

        const newJob = {
            name,
            email,
            title,
            category,
            salaryFrom,
            salaryTo,
            description,
            applicantNo,
            image,
            deadline,
            startDate
        }

        axios.post('/listedJobs', newJob)
            .then(res => {
                console.log(res.data.insertedId)
                if (res.data.insertedId) {
                    toast.success('Job posted successfully')
                    form.reset()
                }
            })
            .catch(err => {
                console.log(err)
            })

        // console.log(
        // name,
        // email,
        // category,
        // salaryFrom,
        // salaryTo,
        // startDate,
        // deadline,
        // description,
        // applicantNo,
        // image,
        // )
    }

    return (
        <div className="container  mx-auto">
            <div>
                <PostAJobBanner></PostAJobBanner>
            </div>
            <div>
                <section className="p-6  dark:bg-gray-800 dark:text-gray-50">
                    <div className="my-5 lg:my-10 text-center space-y-3">
                        <h2 className=' text-3xl  lg:text-6xl  font-bold '>Job Information</h2>
                        <p className="text-xl">Start your awesome project! Complete all fileds and submit to post a job</p>
                    </div>
                    <form onSubmit={handleAddJob} action="" className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">

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
                                {/* job title */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-sm">Job Title</label>
                                    <input type="text" name='title' placeholder="Job Title" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job category */}
                                <div className="col-span-full sm:col-span-2">
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
                                    <input name='salaryFrom' id="address" type="number" placeholder="From 0$" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm">To</label>
                                    <input name='salaryTo' id="address" type="number" placeholder="To 0$" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job description */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Job Description</label>
                                    <input name='description' id="city" type="text" placeholder="Job Description" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job posting date */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm block">Job Posting Date</label>
                                    <DatePicker className="w-full rounded-md focus:ring focus:ri focus:ri mt-1 dark:border-gray-700 dark:text-gray-900" selected={postedDate} onChange={(date) => setPostedDate(date)} />

                                </div>
                                {/* application deadline */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm block">Application Deadline</label>
                                    {/* <input name="date" type="date" /> */}
                                    <DatePicker className="w-full rounded-md focus:ring focus:ri focus:ri mt-1 dark:border-gray-700 dark:text-gray-900" selected={applicationDeadline} onChange={(date) => setApplicationDeadline(date)} />
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

                                <button className="btn w-full col-span-3 bg-prim" type="submit">Submit</button>

                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddAJob;
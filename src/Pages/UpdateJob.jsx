import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from './../Hooks/useAuth';
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateJob = () => {

    const { user } = useAuth()
    const axios = useAxios();
    // const params = useParams();
    const job = useLoaderData();
    const navigate = useNavigate()



    const [postedDate, setPostedDate] = useState(new Date())
    const [applicationDeadline, setApplicationDeadline] = useState(new Date())

    // console.log(user.displayName)

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target
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



        axios.put(`/myJobs/${job._id}`, newJob)
            .then(res => {
                console.log(res.data.modifiedCount)
                if (res.data.modifiedCount > 0) {
                    toast.success('Job updated successfully')
                    navigate('/my-jobs')


                }
            })
            .catch(err => {
                console.log(err)
            })

        console.log(
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
                                    <input name='name' defaultValue={job.name} type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* email */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Email</label>
                                    <input defaultValue={job.email} type="text" name='email' placeholder="email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job title */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-sm">Job Title</label>
                                    <input type="text" defaultValue={job.title} name='title' placeholder="Job Title" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job category */}
                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-sm">Job Category</label>
                                    {/* <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                                    <select name="category" defaultValue={job.category} id="" className='w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900' required>
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
                                    <input name='salaryFrom' defaultValue={job.salaryFrom} id="address" type="text" inputMode="numeric" placeholder="From 0$" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm">To</label>
                                    <input name='salaryTo' defaultValue={job.salaryTo} id="address" type="text" inputMode="numeric" placeholder="To 0$" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job description */}
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm">Job Description</label>
                                    <input name='description' defaultValue={job.description} id="city" type="text" placeholder="Job Description" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* job posting date */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm block">Job Posting Date</label>
                                    <DatePicker defaultValue={job.startDate} className="w-full rounded-md focus:ring focus:ri focus:ri mt-1 dark:border-gray-700 dark:text-gray-900" selected={postedDate} onChange={(date) => setPostedDate(date)} />
                                    {/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                                </div>
                                {/* application deadline */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm block">Application Deadline</label>
                                    {/* <input name="date" type="date" /> */}
                                    <DatePicker defaultValue={job.deadline} className="w-full rounded-md focus:ring focus:ri focus:ri mt-1 dark:border-gray-700 dark:text-gray-900" selected={applicationDeadline} onChange={(date) => setApplicationDeadline(date)} />
                                </div>
                                {/* job applicants number */}
                                <div className="col-span-full sm:col-span-1">
                                    <label className="text-sm">Job Applicants number</label>
                                    <input name="applicantNo" id="username" type="number" placeholder="0" defaultValue={0} className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                {/* photo url */}
                                <div className="col-span-full ">
                                    <label className="text-sm">Photo Url</label>
                                    <input name="image" defaultValue={job.image} id="username" type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                </div>
                                {/* photo url */}
                                {/* <div className="col-span-full">
                                    <label className="text-sm">Photo Url</label>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                        <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                                    </div>
                                </div> */}
                                <button className="btn w-full bg-prim" type="submit">Update</button>

                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateJob;
import { AiFillGooglePlusCircle, AiFillLinkedin, AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';
import Banner from '../Component/BannerDetails/BannerDetails';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import toast from 'react-hot-toast';

const Details = () => {

    const axios = useAxios();
    const { user } = useAuth()
    const job = useLoaderData()
    console.log(user)

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


    const handleApply = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        const form = e.target;
        const applicantName = form.name.value;
        const applicantEmail = form.email.value;
        const cv = form.cv.value;

        const data = {
            name,
            email,
            applicantName,
            applicantEmail,
            title,
            category,
            salaryFrom,
            salaryTo,
            startDate,
            deadline,
            description,
            applicantNo,
            image,
            cv
        }

        const updateApplicantNo = {
            applicantNo: 1
        }

        const deadlineTime = new Date(deadline).getTime();
        const timestamp = Date.now();

        const remainingDeadline = deadlineTime - timestamp;
        console.log(remainingDeadline)

        // const days = remainingDeadline / (24 * 60 * 60 * 1000);


        if (email === applicantEmail) {
            return toast.error('You can not apply your won posted job')
        } else if (remainingDeadline <= 0) {
            return toast.error('Deadline is over')
        } else {
            const url = '/applied';
            axios.post(url, data)
                .then(res => {
                    console.log(res.data.insertedId)
                    if (res.data.insertedId) {
                        axios.patch(`/listedJobs/${_id}`, updateApplicantNo)
                            .then(res => {
                                console.log(res.data.modifiedCount)
                                if (res.data.modifiedCount) {
                                    toast.success('Application Successful')
                                    // return <Navigate to={`/listedJobs`} />;

                                }
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            console.log(data)
        }
    }

    // const deadlineTime = new Date(deadline).getTime();
    // const timestamp = Date.now();

    // const remainingDeadline = deadlineTime - timestamp;
    // console.log(remainingDeadline)

    // // const milliseconds = 100000000; // Replace this with your desired number of milliseconds
    // const days = remainingDeadline / (24 * 60 * 60 * 1000);

    // console.log("Days:", days);

    // const currentDateFromTimestamp = new Date(timestamp);
    // console.log(currentDateFromTimestamp.toLocaleDateString())

    // // const milisecond = deadline.getTime()
    // // console.log(milisecond)




    // console.log(milliseconds);


    return (
        <div className='container mx-auto'>
            <Banner title={title}></Banner>
            <div className='my-14 p-4 shadow-md gap-5 grid grid-cols-1 lg:grid-cols-12  justify-between rounded-lg'>
                <div className='grid-cols-1 lg:col-span-4'>
                    <img className=' rounded-lg' src={image} alt="" />
                </div>
                <div className='space-y-1 grid-cols-1 lg:col-span-6 lg:mt-1'>
                    <p className='bg-prim inline text-lg  px-2 py-1 text-white font-bold rounded'>{category}</p>
                    <h2 className=' py-2 text-xl lg:text-2xl font-bold'>{title}</h2>
                    <p className='text-base text-gray-500 lg:inline  lg:mr-3'>Publisher: <span className='text-black'>{name}</span></p>

                    <p className='text-sm text-gray-500 font-semibold inline'>Date: {startDate}</p>
                    <p>{description}</p>
                    <p className='text-lg pb-1 font-semibold'>Deadline: {deadline}</p>
                    {/* <h2 className='text-xl pb-2 font-bold'>Salary: <span className='text-2xl'>{salaryFrom}$ - {salaryTo}$</span></h2> */}
                    {/* <p className='bg-prim inline  px-2 py-1 text-white font-semibold rounded'>{category}</p> */}
                    <p className=' w-5 h-5 inline mr-1.5'>{applicantNo} People Applied</p>
                    <h2 className=' text-base lg:text-2xl pb-1 font-semibold lg:font-bold'>{salaryFrom}$ - {salaryTo}$</h2>
                    <button className='btn-sm   lg:btn-lg btn btn-ghost   bg-prim' onClick={() => document.getElementById('my_modal_5').showModal()}>Apply Now</button>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Application for <span className='text-prim'>{title}</span></h3>
                            {/* <h3 className="font-bold text-lg">{user.displayName}</h3>
                            <p>{user.email}</p> */}

                            <form onSubmit={handleApply} action="">
                                <div className='space-y-2'>
                                    <div className="col-span-full ">
                                        <label className="text-sm">Name</label>
                                        <input defaultValue={user.displayName} name='name' type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                    </div>
                                    {/* email */}
                                    <div className="col-span-full">
                                        <label className="text-sm">Email</label>
                                        <input defaultValue={user.email} type="text" name='email' placeholder="email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                    </div>
                                    <div className="col-span-full ">
                                        <label className="text-sm">CV Url</label>
                                        <input name="cv" id="username" type="text" placeholder="CV Url" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" required />
                                    </div>

                                </div>
                                <button type='submit' className='btn btn-sm bg-prim  mt-2'>Apply</button>
                            </form>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
                <div className='space-y-2 grid-cols-1 lg:col-span-2'>
                    <div className=" ">
                        <div className='mb-3'>
                            <p className='text-2xl font-normal'>Employer</p>
                            <small className='text-gray-500'>{name}</small>
                        </div>

                        <ul className="">
                            <li className='text-xl  text-gray-500 border-t border-1 p-2.5'>
                                <a href="#">
                                    <AiOutlineLink className=' inline mr-1.5' ></AiOutlineLink>
                                    Website
                                </a>
                            </li>
                            <li className='text-xl  text-gray-500 border-t border-1 p-2.5'>
                                <a href="#"><AiFillGooglePlusCircle className='  inline mr-1.5' ></AiFillGooglePlusCircle>Google+</a></li>
                            <li className='text-xl  text-gray-500 border-t border-1 p-2.5'><a href="#"><AiFillTwitterCircle className='inline mr-1.5' ></AiFillTwitterCircle>Twitter</a></li>
                            <li className='text-xl  text-gray-500 border-t border-1 p-2.5'><a href="#"><FaFacebook className='inline mr-1.5' ></FaFacebook>Facebook</a></li>
                            <li className='text-xl  text-gray-500 border-y border-1 p-2.5'><a href="#"><AiFillLinkedin className=' inline mr-1.5' ></AiFillLinkedin>Linkedin</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
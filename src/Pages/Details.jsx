import { AiFillGooglePlusCircle, AiFillLinkedin, AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Component/BannerDetails/BannerDetails';

const Details = () => {

    const job = useLoaderData()
    console.log(job)

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
                    <button className='btn-sm   lg:btn-lg btn btn-ghost   bg-prim'>Apply Now</button>
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
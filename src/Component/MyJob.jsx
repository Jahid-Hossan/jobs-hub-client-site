import React, { useState } from 'react';
import useAxios from '../Hooks/useAxios';
import toast from 'react-hot-toast';

const MyJob = ({ myJob }) => {
    const [remove, setRemove] = useState(false)
    const [removeId, setRemoveId] = useState('')
    // console.log(Object.keys(myJob).join())
    const axios = useAxios()

    const { _id, name, title, email, category, salaryFrom, salaryTo, startDate, deadline, description, applicantNo, image } = myJob;


    const handleUpdate = (_id) => {
        console.log(_id)
    }


    const handleDelete = (_id) => {
        toast((t) => (
            <span>
                <p>Are You Sure?</p>
                <button className='btn btn-circle hover:bg-prim ' onClick={() => {
                    setRemoveId(_id)
                    toast.dismiss(setRemove(true))


                }}>
                    Yes
                </button>
                <button className='btn btn-circle hover:bg-prim  ' onClick={() => toast.dismiss(setRemove(false))}>
                    No
                </button>
            </span>
        ));



    }

    const url = `/listedJobs/${removeId}`

    if (remove) {
        console.log(true)
        axios.delete(url)
            .then(res => {
                console.log(res.data.deletedCount)
                if (res.data.deletedCount > 0) {
                    toast.success('Job deleted successfully')
                }
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        console.log(false)
    }

    return (
        <div>
            <div className='grid grid-cols-12 gap-3 items-center  shadow-sm bg-slate-50'>

                <div className="col-span-2">
                    <div className="">
                        <a href=""><img src={image} alt="" className=" rounded-lg" /></a>
                    </div>
                </div>

                <div className="col-span-5">
                    <div className="text-base font-bold px-4 py-1 bg-prim inline rounded-md">{category}</div>
                    <h3 className='text-2xl font-bold my-3'><a href="" title="">{title}</a></h3>
                    <small className=''>
                        <span className='text-lg font-medium'>Publisher : {name}</span><br />
                        <span className='text-lg font-medium'>Email : {email}</span>
                    </small>
                </div>

                <div className="col-span-2 ">
                    <div className="">
                        <h4 className='text-2xl font-bold my-3'>${salaryFrom} - ${salaryTo}</h4>
                        <p className='text-lg font-medium'>Start Date: {startDate}</p>
                        <p className='text-lg font-medium'>Deadline: {deadline}</p>

                    </div>
                </div>

                <div className='col-span-3  space-y-3'>
                    <button onClick={() => handleUpdate(_id)} className='btn btn- hover:bg-prim border-prim border-2 text-black  w-full'>Update</button><br />
                    <button onClick={() => handleDelete(_id)} className='btn btn- hover:bg-prim border-prim border-2 text-black  w-full'>Delete</button>
                </div>

            </div >
        </div>
    );
};

export default MyJob;
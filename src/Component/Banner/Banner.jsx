import './banner.css'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className=' py-10 lg:py-[20vh] text-center mx-auto space-y-3'>
                <h2 className=' text-2xl lg:text-4xl font-bold text-white'>One million success stories. <br /><span className='text-prim'>Start yours today.</span></h2>
                <p className='text-white'>Find 40,000+ Jobs, Employment & Career Opportunities</p>
                <div className=''>

                    <input className="w-2/3 rounded-l-full  py-3" type="text" placeholder='Enter job title...' />
                    <button className=' py-3 px-6 rounded-r-full bg-prim'>Search</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;
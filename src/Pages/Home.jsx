import '../Component/Banner/banner.css'
import Banner from '../Component/Banner/Banner';
import Category from '../Component/Category';

const Home = () => {
    return (
        <div>
            <div className=' banner lg:h-[70vh]'>
                <Banner />
            </div>
            <div className='container mx-auto'>
                <Category />
            </div>
        </div>
    );
};

export default Home;
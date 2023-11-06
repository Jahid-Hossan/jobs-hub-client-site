

const Category = ({ searched }) => {
    const [category, setCategory] = useState('')
    const [jobs, setJobs] = useState([]);

    const axios = useAxios();

    console.log(searched)
    // console.log(category)

    const url = `/listedJobs?category=${category}`

    useEffect(() => {
        axios.get(url)
            .then(res => setJobs(res.data))
    }, [axios, url])



    return (
        
    );
};

export default Category;
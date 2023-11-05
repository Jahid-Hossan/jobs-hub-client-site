import { useEffect, useState } from "react";


const useAddedJobs = () => {

    const [addedJobs, setAddedJobs] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/listedJobs")
            .then(res => res.json())
            .then(data => setAddedJobs(data))
    }, [])

    return addedJobs;
};

export default useAddedJobs;
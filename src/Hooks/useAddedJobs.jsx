import { useEffect, useState } from "react";


const useAddedJobs = () => {

    const [addedJobs, setAddedJobs] = useState([])

    useEffect(() => {
        fetch("https://jobs-hub-server.vercel.app/listedJobs")
            .then(res => res.json())
            .then(data => setAddedJobs(data))
    }, [])

    return addedJobs;
};

export default useAddedJobs;
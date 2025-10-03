import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue) {
    const [ isFetching, setIsFetching ] = useState();
    const [ data, setData ] = useState(initialValue);
    const [ error, setError ] = useState();

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const fetchedData = await fetchFn();
                setData(fetchedData);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return { isFetching, data, setData, error }
}
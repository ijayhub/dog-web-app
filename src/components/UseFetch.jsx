import React, { useEffect, useState } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
     const [ispending, setIsPending] = useState(true)
    useEffect(()=> {
		fetch(url)
            .then(res => {
                
                return res.json()
            })
            .then((data) => {
                setData(data)
                setError(false)
                setIsPending(false)
                
                console.log(data)
            
            })
                .catch(err => {
                    setError(err.message);
                
            })
        },[url]);

  return { data, error, ispending };
}

export default UseFetch

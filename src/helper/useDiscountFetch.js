import {useEffect, useState} from "react";

const useDiscountFetch = (url) =>{

    const [data,setData] = useState()

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                // console.log(result.data)
                setData(prevState => [...result.data])
                // currentFetch(url)
            })
            .catch(error => console.log('error', error));
    },[])

    return [data,setData]
}

export default useDiscountFetch
import {useEffect, useState} from "react";

const useDiscountFetchAdd = (url) =>{

    const [newData,setNewData] = useState([])

    const addMethod = (data) =>{
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();
        formdata.append("discount", data);

        var requestOptions = {
            method: 'POST',
            mode: 'no-cors',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                var requestOptions = {
                    method: 'GET',
                };
                fetch("http://127.0.0.1:8000/api/discount", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        setNewData(prevState => [...result.data])
                    })
                    .catch(error => console.log('error', error));



            })
            .catch(error => console.log('error', error));
    }

    return [newData,addMethod]
}

export default useDiscountFetchAdd
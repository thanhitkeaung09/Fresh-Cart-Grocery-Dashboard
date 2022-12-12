import {useEffect, useState} from "react";

const useDiscountDeleteFetch = (id) =>{
    const [del,setDel] = useState([]);
    const [data,setData] = useState()

    const run = () =>{
        console.log("hello run discount delete")
    }

      const handleDeleteSingle = (id) =>{
          var myHeaders = new Headers();
          myHeaders.append("Accept", "application/json");

          var requestOptions = {
              method: 'DELETE',
              mode: 'no-cors',
              headers: myHeaders,
              redirect: 'follow'
          };

          fetch("https://laraapi.mmeducare.com/api/discount/"+id, requestOptions)
              .then(response => response.json())
              .then(value => {
                  var requestOptions = {
                      method: 'GET',
                      mode: 'no-cors',
                  };
                  fetch("https://laraapi.mmeducare.com/api/discount/", requestOptions)
                      .then(response => response.json())
                      .then(result => {
                          setDel(prevState => [...result.data])

                      })
                      .catch(error => console.log('error', error));

              })
              .catch(error => console.log('error', error));
      }


    return [del,handleDeleteSingle,run]
}

export default  useDiscountDeleteFetch
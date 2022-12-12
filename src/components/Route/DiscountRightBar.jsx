import React, {useEffect, useState} from 'react';
import {BsCart3} from "react-icons/bs";
import {BsThreeDotsVertical} from 'react-icons/bs'
import useDiscountFetch from "../../helper/useDiscountFetch";
import useDiscountFetchAdd from "../../helper/useDiscountFetchAdd";
import useDiscountDeleteFetch from "../../helper/useDiscountDeleteFetch";


function DiscountRightBar() {
    const [del,handleDeleteSingle,run] = useDiscountDeleteFetch();
    const [data,setData] = useDiscountFetch("https://laraapi.mmeducare.com/api/discount");
    const [newData,addMethod] = useDiscountFetchAdd("https://laraapi.mmeducare.com/api/discount")


    const [show,setShow] = useState(false);
    const [inputData,setInputData] = useState();
    const [discount,setDiscount] = useState();
    const [isDelete,setIsDelete] = useState(false)

    useEffect(()=>{

        if(del.length > 0){
            setData(del)
        }
        else{
            setData(undefined)
        }
    },[del])

    useEffect(()=>{
        if(newData.length > 0){
            setData(newData)
        }

        else{
        }
    },[newData])


    const handleShow = (id,index,e) =>{
        const block = document.querySelectorAll('.showBlock')
        const dot = document.querySelectorAll(".dotActive")
        block.forEach(item => {
            if(item.getAttribute('id')==id){
                item.classList.toggle("!block")
                dot.forEach(el=>{
                    if(id == el.getAttribute('id')){
                        el.classList.toggle('!text-black')
                    }
                })
            }
            else{
                item.classList.remove("!block")
            }
        })
    }

    const handleInput = (e) =>{
        setInputData(e.currentTarget.value)
    }

    const handleCreateDiscount = (e) =>{
        e.preventDefault();
        addMethod(inputData)
        setInputData("")
    }


    const handleClick = () =>{
        // e.preventDefault();
        console.log(del)
        setData(del)
    }

    const handleDelete = (id) =>{
        handleDeleteSingle(id)
        setIsDelete(prevState => !prevState)
    }
    return (
        <div className={'grid grid-cols-8'}>
            <div className="col-span-4">
                      <div className="flex h-[100vh] items-center justify-center">
                          <div
                              className=" p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                              <form className="space-y-6" action="#">
                                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Input your discount rate</h5>
                                  <div>
                                      <input value={inputData} type="number" onChange={handleInput} name="email" id="email"
                                             className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                             placeholder="Input Your Discount" required=""/>
                                  </div>

                                  <button type="submit" onClick={handleCreateDiscount}
                                          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Your Discount Rate
                                  </button>
                              </form>
                          </div>
                      </div>
                </div>

                <div className="col-span-3">
                    <div className="flex items-center h-[100vh] justify-center">
                        <div className="  w-[80%]   shadow-lg p-3 rounded-lg" >
                            {

                                data &&  data.length ? data.map((item,index) =>{
                                 return (
                                     <div id={item.id} className={'multipleId flex items-center justify-between space-y-5'} key={item.id}>
                                         <p>{item.discount}<span>%</span></p>
                                         <div className={`relative cursor-pointer `}  onClick={handleShow.bind(null,item.id,index)}>
                                             <BsThreeDotsVertical id={item.id} className={'text-gray-400 dotActive'}/>
                                             <div id={item.id} className={`showBlock absolute hidden  top-[1px] left-[30px] `}>
                                                 <ul className={'shadow-2xl p-3 rounded space-y-1' }>
                                                     <li className={'hover:bg-gray-100 py-1 px-2 rounded'} onClick={handleDelete.bind(null,item.id)}>
                                                         <a href="#">Delete</a>
                                                     </li>
                                                     <hr/>
                                                     <li className={'hover:bg-gray-100 py-1 px-2 rounded'}>
                                                         <a href="#">Update</a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                     </div>
                                 )
                             }) : <h1><p className={'text-center'}><span className="loader"></span></p></h1>
                            }

                        </div>
                    </div>
                </div>



        </div>
    );
}

export default DiscountRightBar;
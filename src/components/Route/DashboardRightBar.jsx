import React from 'react';
import {BsCart3} from "react-icons/bs"
import useDiscountFetch from "../../helper/useDiscountFetch";


function DashboardRightBar(props) {

    const [data,setData] = useDiscountFetch("https://laraapi.mmeducare.com/api/discount")

    return (
        <div >
            <div className="">
                <div
                   className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow   hover:bg-gray-100 flex justify-between relative">
                    <div className="">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Discount</h5>
                        <p className="font-normal text-gray-700">{
                            data ? data.map(item =>{
                            return (
                                <span key={item.id}>{item.discount} %</span>
                            )
                            }) : <p className={'text-center'}><span className="loader"></span></p>
                        }
                            </p>
                    </div>

                    <div className=" shadow-2xl bg-green-500 w-[100px] h-[100px] flex justify-center items-center h-full rounded absolute right-[15px] -top-[15px]">
                        <BsCart3 className={'text-white '} size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardRightBar;
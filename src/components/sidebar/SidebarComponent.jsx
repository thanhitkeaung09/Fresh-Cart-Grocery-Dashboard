import React from 'react';
import Logo from "../../assets/images/freshcart-logo.svg"
import {BsFillGrid1X2Fill} from "react-icons/bs"
import {BsCart3} from "react-icons/bs"
import {useNavigate} from "react-router-dom";

function SidebarComponent(props) {
    const navigate = useNavigate();

    const active = (e) =>{
        const li = document.getElementsByTagName("li");
        for(const item of li){
            // console.log(item)
            item.classList.remove('bg-gray-400')
        }
        e.currentTarget.classList.add("bg-gray-400")
    }

    const handleDashboard = (e) =>{
        active(e)
        navigate("/")
        console.log("hello")
    }

    const handleDiscount = (e) =>{
        active(e)
        navigate("/discount")
    }

    return (
            <div className="col-span-2">
                <div className="px-5 space-y-3 bg-gray-200 h-full">
                    <div className="border-b border-b-gray-300 py-3">
                        <img src={Logo} alt=""/>
                    </div>
                    <ul className={'space-y-3'}>
                        <li className={'border-b border-b-black bg-gray-400 cursor-pointer'} onClick={handleDashboard}>
                            <a  className={'flex items-center space-x-3 py-3 hover:bg-gray-400 duration-500 p-2 rounded'}>
                                <BsFillGrid1X2Fill/>
                                <p>Dashboard</p>
                            </a>
                        </li>

                        <li className={'border-b border-b-black cursor-pointer'} onClick={handleDiscount}>
                            <a  className={'flex items-center space-x-3 py-3 hover:bg-gray-400 duration-500 p-2 rounded'}>
                                <BsCart3/>
                                <p>Discount</p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
    );
}

export default SidebarComponent;
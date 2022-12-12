import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardRightBar from "../Route/DashboardRightBar";
import DiscountRightBar from "../Route/DiscountRightBar";

function RightBar(props) {
    return (
        <div className="col-span-10">
            <div className="p-5 h-[100vh]">
                <Routes>
                    <Route path={"/"} element={<DashboardRightBar/>} ></Route>
                    <Route path={"/discount"} element={<DiscountRightBar/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default RightBar;
import React from 'react';
import SidebarComponent from "./components/sidebar/SidebarComponent";
import RightBar from "./components/RightBar/RightBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(props) {
    return (
        <div className={''}>
            <div className="grid grid-cols-12">
                <SidebarComponent/>
                <RightBar/>
            </div>
        </div>
    );
}

export default App;
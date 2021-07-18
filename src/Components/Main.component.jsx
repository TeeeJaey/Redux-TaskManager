
import { React, useState, useEffect } from "react";
import { IconName , FaPlus } from "react-icons/fa";
import Constants from "../Utils/Constants";
import TaskList from "./TaskList.component";
import ShownTask from "./ShownTask.component";
import MobileUI from "./MobileUI.component";
import store from "../Store/Store";
import { connect } from "react-redux";
import Actions from "../Store/Actions";


function MainComponent(props)
{
    const {width , height} = useWindowSize();
    
    if(width < 786)
    {
        return  <div className="main">
                    <div className="header">
                        <h3>Task Manager</h3> 
                    </div>
                    <div className="row data">
                        <div className="col-12">
                            <MobileUI width={width} />
                        </div>
                    </div>
                </div>;
        
    }
    else {
        return  <div className="main">
                    <div className="header">
                        <h3>Task Manager</h3> 
                    </div>
                    <div className="row data">
                        <div className="col-4">
                            <TaskList/>
                        </div>
                        <div className="col-8">
                            <ShownTask/>
                        </div>
                    </div>
                </div>;

    }
}

// Custom Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        
    useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}


export default MainComponent; 


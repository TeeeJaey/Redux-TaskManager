
import { Component, React } from "react";
import { IconName , FaPlus } from "react-icons/fa";
import Constants from "../Utils/Constants";
import TaskList from "./TaskList.component";
import ShownTask from "./ShownTask.component";
import store from "../Store/Store";
import { connect } from "react-redux";
import Actions from "../Store/Actions";


class MainComponent extends Component
{
    render() {
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


export default MainComponent; 


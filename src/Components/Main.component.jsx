
import { Component, React } from "react";
import { IconName , FaPlus } from "react-icons/fa";
import Constants from "../Utils/Constants";
import TaskList from "./TaskList.component";
import Task from "./Task.component";
import store from "../Store/Store";
import { connect } from "react-redux";
import Actions from "../Store/Actions";


class MainComponent extends Component
{
    componentDidMount() {
       // this.getTasks();
    }

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
                            <Task/>
                        </div>
                    </div>
                </div>;
        }
}


// const mapStateToProps = state => {
//     return {
//         tasks: state.tasks
//     }
// };

// const mapDispatchToProps = dispatch => {
//     const action = {
//         type : Constants.TaskAction.ToggleForm,
//         payload : {
//             taskForm : true
//         }
//     }

//     return {
//         getTasks: () => dispatch(Actions.GetState())
//     }
// };

export default MainComponent; // connect(mapStateToProps, mapDispatchToProps)(MainComponent)

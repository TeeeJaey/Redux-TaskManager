
import { Component, React } from "react";
import { IconName , FaPlus, FaBug } from "react-icons/fa";
import Constants from "../Utils/Constants";
import store from "../Store/Store";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Actions from "../Store/Actions";


const OpenTask = (props) => {

    const taskStyle = {
        height:"80vh",
        backgroundColor:"white",
        color:"black",
        overflowY:"auto",
        overflowX:"hidden",
        border: "2px solid black"
    };

    const noTaskStyle = {
        textAlign:"center", 
        marginTop:"20%",
        fontSize: "22px"
    }

    const dispatch = useDispatch();
    const task = useSelector(state => state.tasks.find(x =>x.id == state.shownTask));

    useEffect(() => {
        let state = dispatch(Actions.GetState());
    },[]);
    
    if(task) {
        
        return  <div style={taskStyle}>

                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                            <div key="modal-header" className="modal-header">
                                <h3 className="modal-title" style={{margin:"auto"}}> {task.title} </h3> 
                            </div>
                            <div key="modal-body" className="modal-body" style={{height: "320px", overflowY:"auto"}}>
                                {task.desc}
                            </div>
                                <li className="list-group-item list-group-item-success">
                                    <b>Status: </b> {task.status}
                                </li>
                            <div key="modal-footer" className="modal-footer">
                                <button
                                    type="button" className="btn btn-danger" style={{width: "48%"}}  > 
                                    Edit Task
                                </button>
                                {
                                    task.status==Constants.TaskStatus.TODO &&
                                    <button
                                        type="button" className="btn btn-success" style={{width: "48%"}} 
                                        onClick={() => dispatch(Actions.Update_Status(task.id, Constants.TaskStatus.ONGOING))} > 
                                        Start Task
                                    </button>
                                }
                                {
                                    task.status==Constants.TaskStatus.ONGOING &&
                                    <button
                                        type="button" className="btn btn-success" style={{width: "48%"}} 
                                        onClick={() => dispatch(Actions.Update_Status(task.id, Constants.TaskStatus.DONE))}  > 
                                        Mark as Done
                                    </button>
                                }
                            </div>
                        </div>
                    </div>

                </div>;
    }
    else {
        return  <div style={taskStyle}>
                    <div style={noTaskStyle} >Open up a Task from the List</div>
                </div>
    }

}

export default OpenTask;
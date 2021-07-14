
import { Component, React } from "react";
import { IconName , FaPlus, FaBug } from "react-icons/fa";
import Constants from "../Utils/Constants";
import store from "../Store/Store";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Actions from "../Store/Actions";


const TaskList = function(props) {
    const taskListStyle = {
        height:"80vh",
        backgroundColor:"white",
        overflowY:"auto",
        overflowX:"hidden",
        border: "2px solid black",
        borderRadius:0
    };

    const taskStyle = {
        color:"black",
        fontSize:"20px"
    }
    const addBtnStyle = {
        fontSize: "20px",
        width:"100%"
    };
    

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        const action = {
            type : Constants.TaskAction.ToggleForm,
            payload : {
                taskForm : true
            }
        };
        dispatch(action);
    }, []);

    return  <div style={taskListStyle}>
                <button className="btn btn-primary" 
                    style={{...addBtnStyle, borderRadius:0}} 
                    onClick={()=> dispatch(Actions.ToggleForm(true))} > 
                        Add new task  
                        <span style={{float:"right"}}> <FaPlus/> </span> 
                </button>

                <ul className="list-group" style={taskStyle}>
                    {tasks.map((task) => (
                        <li key={task.id} className="list-group-item" >
                            { task.title.substring(0,10) } 
                            <button 
                                className = "btn btn-success"
                                style={{float:"right"}}
                                onClick = {() => dispatch(Actions.Update_Status(task.id, Constants.TaskStatus.DONE)) } > 
                                Done 
                            </button>
                        </li>
                    ))}
                </ul>
            </div>;
}

export default TaskList;
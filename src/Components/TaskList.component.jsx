
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
    const taskList = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(Actions.GetState());
    }, []);

    return  <div style={taskListStyle}>
                <button className="btn btn-primary" 
                    style={{...addBtnStyle, borderRadius:0}} 
                    onClick={()=> dispatch(Actions.ToggleForm(true))} > 
                        Add new task  
                    <span style={{float:"right"}}> <FaPlus/> </span> 
                </button>

                <ul className="list-group" style={taskStyle}>
                    {taskList.map((task) => (
                        <li key={task.id} className="list-group-item" >
                            { task.title.substring(0,16) } 
                            <button 
                                className = "btn btn-info"
                                style={{float:"right"}}
                                onClick = {() => dispatch(Actions.SetDisplayTask(task.id)) } >
                                Open 
                            </button>
                        </li>
                    ))}
                </ul>
            </div>;
}

export default TaskList;
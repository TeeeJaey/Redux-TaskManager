
import { React } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../Store/Actions";
import Constants from "../Utils/Constants";


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
        fontSize:"20px",
        cursor:"pointer"
    }
    const addBtnStyle = {
        fontSize: "20px",
        width:"100%"
    };
    

    let yelloBG = {backgroundColor:"yellow"}

    const dispatch = useDispatch();
    const shownTaskId = useSelector(state => state.shownTaskId);
    const taskList = useSelector(state => state.tasks);

    const editTaskToggle = useSelector(state => state.editTaskToggle);
    const createTaskToggle = useSelector(state => state.createTaskToggle);

    return  <div style={taskListStyle}>
                <button className="btn btn-primary" 
                    style={{...addBtnStyle, borderRadius:0}}  disabled={editTaskToggle || createTaskToggle }
                    onClick={()=> dispatch(Actions.Create_Task_Toggle(true))} > 
                        Add new task  
                    <span style={{float:"right"}}> <FaPlus/> </span> 
                </button>

                <ul className="list-group" style={taskStyle}>
                    {taskList.map((task) => (

                        <li key={task.id} 
                            className={task.status === Constants.TaskStatus.DONE? "list-group-item list-group-item-success":"list-group-item "} 
                            style={task.id==shownTaskId ? yelloBG : {}} 
                            disabled={editTaskToggle || createTaskToggle }
                            onClick = {() => {
                                if(!editTaskToggle && !createTaskToggle)
                                    dispatch(Actions.SetDisplayTask(task.id))}
                             } >
                            { task.title.substring(0,16) } 
                            {   task.status === Constants.TaskStatus.DONE &&
                                <span style={{float:"right"}}> <FaCheck/> </span>
                            } 
                        </li>
                    ))}
                </ul>
            </div>;
}

export default TaskList;
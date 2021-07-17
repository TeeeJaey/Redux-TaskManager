
import { React } from "react";
import { FaPlus} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
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
        fontSize:"20px",
        cursor:"pointer"
    }
    const addBtnStyle = {
        fontSize: "20px",
        width:"100%"
    };
    

    let yelloBG = {backgroundColor:"yellow"}

    const dispatch = useDispatch();
    const showntaskId = useSelector(state => state.shownTask);
    const taskList = useSelector(state => state.tasks);


    return  <div style={taskListStyle}>
                <button className="btn btn-primary" 
                    style={{...addBtnStyle, borderRadius:0}} 
                    onClick={()=> dispatch(Actions.ToggleForm(true))} > 
                        Add new task  
                    <span style={{float:"right"}}> <FaPlus/> </span> 
                </button>

                <ul className="list-group" style={taskStyle}>
                    {taskList.map((task) => (

                        <li key={task.id} className="list-group-item" style={task.id==showntaskId ? yelloBG : {}} 
                            onClick = {() => dispatch(Actions.SetDisplayTask(task.id))} >
                            { task.title.substring(0,16) } 
                        </li>
                    ))}
                </ul>
            </div>;
}

export default TaskList;
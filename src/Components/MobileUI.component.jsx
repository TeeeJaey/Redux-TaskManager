
import { React } from "react";
import Constants from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaCheck, FaList } from "react-icons/fa";
import Actions from "../Store/Actions";
import { useState } from "react";
import MobileTaskList from "./MobileTaskList.component";


const MobileUI = (props) => {
    const [taskListToggle, setTaskListToggle] = useState(false);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const task = useSelector(state => state.tasks.find(x =>x.id == state.shownTaskId));

    const editTaskToggle = useSelector(state => state.editTaskToggle);
    const createTaskToggle = useSelector(state => state.createTaskToggle);
    useSelector(state => {
        const shownTask = state.tasks.find(x =>x.id == state.shownTaskId);
        if (shownTask) return shownTask.status;
        else return "";
    });
    
    const dispatch = useDispatch();

    const taskStyle = {
        height:"82vh",
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
    };

    const taskListStyle = {
        height:"80vh",
        backgroundColor:"white",
        overflowY:"auto",
        overflowX:"hidden",
        border: "2px solid black",
        borderRadius:0
    };

    const addBtnStyle = {
        fontSize:"18px",
        width:"100%"
    };

    let headbtnList = {
        padding:"0",
        width:"49%"
    };
    let footbtnList = {
        width:"48%"
    };
    if(props.width < 576) {    
        headbtnList.width = "98%";
        footbtnList.width = "98%";
    }
    if(taskListToggle) {
        return <MobileTaskList onClose={()=> setTaskListToggle(false)}  />
    }
    if(createTaskToggle) {
        return  <div style={taskStyle}>

                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                            <div key="modal-header" className="modal-header row">
                                <h5 className="modal-title col-2" style={{margin:"auto"}}> Title: </h5>
                                <input className="col-10" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div key="modal-body" className="modal-body" style={{height: "320px", overflowY:"auto"}}>
                                <h5 className="modal-title" style={{margin:"auto"}}> Description: </h5>
                             
                                <textarea value={desc} style={{height: "250px", width:"100%",overflowY:"auto"}} onChange={e => setDesc(e.target.value)} />
                            </div>
                            <li className="list-group-item list-group-item-success">
                                <b>Status: </b> Not Created
                            </li>
                            <div key="modal-footer" className="modal-footer">
                                <button
                                    type="button" className="btn btn-danger" style={footbtnList}
                                    onClick={() => {
                                        dispatch(Actions.Create_Task_Toggle(false));
                                        setTitle("");
                                        setDesc("");
                                    }} > 
                                    Cancel new task 
                                </button>
                                <button
                                    type="button" className="btn btn-success" style={footbtnList}
                                    onClick={() => {
                                        dispatch(Actions.Create_Task_Submit(title, desc));
                                        dispatch(Actions.Create_Task_Toggle(false));
                                        setTitle("");
                                        setDesc("");
                                    }} > 
                                    Confirm new task
                                </button>
                            </div>
                        </div>
                    </div>

                </div>;
    }
    if(task) {
        if(editTaskToggle) {
            return  <div style={taskStyle}>

                        <div className="modal-dialog " role="document">
                            <div className="modal-content">
                                <div key="modal-header" className="modal-header row">
                                    <h5 className="modal-title col-2" style={{margin:"auto"}}> Title: </h5>
                                    <input className="col-10" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div key="modal-body" className="modal-body" style={{height: "320px", overflowY:"auto"}}>
                                    <h5 className="modal-title" style={{margin:"auto"}}> Description: </h5>
                                 
                                    <textarea value={desc} style={{height: "250px", width:"100%",overflowY:"auto"}} onChange={e => setDesc(e.target.value)} />
                                </div>
                                    <li className="list-group-item list-group-item-success">
                                        <b>Status: </b> {task.status}
                                    </li>
                                <div key="modal-footer" className="modal-footer">
                                    <button
                                        type="button" className="btn btn-danger" style={footbtnList}
                                        onClick={() => {
                                            dispatch(Actions.Edit_Task_Toggle(task.id, false));
                                            setTitle("");
                                            setDesc("");
                                        }} > 
                                        Cancel edit
                                    </button>
                                    <button
                                        type="button" className="btn btn-success" style={footbtnList}
                                        onClick={() => {
                                            dispatch(Actions.Edit_Task_Submit(task.id, title, desc));
                                            dispatch(Actions.Edit_Task_Toggle(task.id, false));
                                            setTitle("");
                                            setDesc("");
                                        }} > 
                                        Confirm edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>;
        }
        else
        {
            return  <div style={{...taskStyle, padding:"10px"}}>

                        <div  style={{marginTop:"20px"}}>
                            <div className="row" style={{ marginLeft:"0px"}}>

                                <li className="list-group-item" style={headbtnList} >
                                    <button className="btn btn-info" 
                                            style={{...addBtnStyle, borderRadius:0}} 
                                            onClick={()=> setTaskListToggle(true)} > 
                                                 Task List 
                                            <span style={{float:"right"}}> <FaList/> </span> 
                                    </button>
                                   
                                </li>
                                <li className="list-group-item " style={headbtnList}  >
                                    
                                    <button className="btn btn-primary" 
                                            style={{...addBtnStyle, borderRadius:0}} 
                                            onClick={()=> dispatch(Actions.Create_Task_Toggle(true))} > 
                                                Add new task  
                                            <span style={{float:"right"}}> <FaPlus/> </span> 
                                    </button>
                                </li>
                            </div>
                            
                            <div className="modal-content">
                                <div key="modal-header" className="modal-header">
                                    <h3 className="modal-title" style={{margin:"auto"}}> {task.title} </h3> 
                                </div>
                                <div key="modal-body" className="modal-body" style={{height: "320px", overflowY:"auto"}}>
                                    {
                                        task.desc.split("\n").map(function(item, idx) {
                                            return (
                                                <span key={idx}>
                                                    {item}
                                                    <br/>
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                                <li className="list-group-item list-group-item-success">
                                    <b>Status: </b> {task.status}
                                </li>
                                <div key="modal-footer" className="modal-footer" style={{padding:"0"}} >
                                    <button
                                        type="button" className="btn btn-danger " style={footbtnList}
                                        onClick={() => {
                                            setTitle(task.title);
                                            setDesc(task.desc);
                                            dispatch(Actions.Edit_Task_Toggle(task.id, true));
                                        }} > 
                                        Edit Task
                                    </button>
                                    {
                                        task.status==Constants.TaskStatus.TODO &&
                                        <button
                                            type="button" className="btn btn-success" style={footbtnList}
                                            onClick={() => dispatch(Actions.Update_Status(task.id, Constants.TaskStatus.ONGOING))} > 
                                            Start Task
                                        </button>
                                    }
                                    {
                                        task.status==Constants.TaskStatus.ONGOING &&
                                        <button
                                            type="button" className="btn btn-success" style={footbtnList}
                                            onClick={() => dispatch(Actions.Update_Status(task.id, Constants.TaskStatus.DONE))}  > 
                                            Mark as Done
                                        </button>
                                    }
                                    {
                                        task.status==Constants.TaskStatus.DONE &&
                                        <button
                                            type="button" className="btn btn-success" style={headbtnList}
                                            onClick={() => dispatch(Actions.Update_Status(task.id, Constants.TaskStatus.TODO))}  > 
                                            Re Open
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>;
        }
    }
    else {
        return  <div style={{...taskStyle, padding:"10px"}}>
                    <div  style={{marginTop:"20px"}}>
                        <div className="row" style={{ marginLeft:"0px"}}>

                            <li className="list-group-item" style={headbtnList} >
                                <button className="btn btn-info" 
                                        style={{...addBtnStyle, borderRadius:0}} 
                                        onClick={()=> setTaskListToggle(true)} > 
                                            Task List 
                                        <span style={{float:"right"}}> <FaList/> </span> 
                                </button>
                            
                            </li>
                            <li className="list-group-item " style={headbtnList}  >
                                
                                <button className="btn btn-primary" 
                                        style={{...addBtnStyle, borderRadius:0}} 
                                        onClick={()=> dispatch(Actions.Create_Task_Toggle(true))} > 
                                            Add new task  
                                        <span style={{float:"right"}}> <FaPlus/> </span> 
                                </button>
                            </li>
                        </div>
                        </div>
                    <div style={noTaskStyle} >Open up a Task from the task List</div>
                </div>
    }

}

export default MobileUI;
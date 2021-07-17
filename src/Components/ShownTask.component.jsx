
import { React } from "react";
import Constants from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../Store/Actions";
import { useState } from "react";


const ShownTask = (props) => {
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
                                    type="button" className="btn btn-danger" style={{width: "48%"}} 
                                    onClick={() => {
                                        dispatch(Actions.Create_Task_Toggle(false));
                                        setTitle("");
                                        setDesc("");
                                    }} > 
                                    Cancel new task 
                                </button>
                                <button
                                    type="button" className="btn btn-success" style={{width: "48%"}} 
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
                                        type="button" className="btn btn-danger" style={{width: "48%"}} 
                                        onClick={() => {
                                            dispatch(Actions.Edit_Task_Toggle(task.id, false));
                                            setTitle("");
                                            setDesc("");
                                        }} > 
                                        Cancel edit
                                    </button>
                                    <button
                                        type="button" className="btn btn-success" style={{width: "48%"}} 
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
            return  <div style={taskStyle}>

                        <div className="modal-dialog " role="document">
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
                                <div key="modal-footer" className="modal-footer">
                                    <button
                                        type="button" className="btn btn-danger" style={{width: "48%"}} 
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
                                    {
                                        task.status==Constants.TaskStatus.DONE &&
                                        <button
                                            type="button" className="btn btn-success" style={{width: "48%"}} 
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
        return  <div style={taskStyle}>
                    <div style={noTaskStyle} >Open up a Task from the List</div>
                </div>
    }

}

export default ShownTask;
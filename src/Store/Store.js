import { createStore } from "redux";
import Constants from "../Utils/Constants";
import Utilities from "../Utils/Utilities";

function Task(id, title, desc="")
{
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.status = Constants.TaskStatus.TODO;
    this.createDate = Utilities.DateToString(new Date());
}

let lastId = 0;
lastId += 1;
lastId += 1;
const defaultState = {tasks:[new Task(1, "Play football","Call Steve for football match. Set a time to play. Go and play the match and then win it!"),
                                new Task(2, "Task 2")],
                        openTasks:[], shownTask:-1, taskForm:false};

function reducer(state = defaultState, action) 
{
    switch(action.type) 
    {
        case Constants.TaskAction.ToggleForm: {
            let newState = {...state};
            newState.taskForm = action.payload.taskForm;
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            return newState;
        }

        case Constants.TaskAction.SetDisplayTask: {
            let newState = {...state};
            newState.shownTask = action.payload.shownTask;
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            return newState;
        }

        case Constants.TaskAction.GetState: {
            let newState = {...state};
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            return newState;
        }

        case Constants.TaskAction.Create: {
            let newState = {...state};
            lastId += 1;
            let task =  new Task(lastId, action.payload.title, action.payload.desc)
            newState.tasks.push(task);
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);

            return newState;
        }
        
        case Constants.TaskAction.Edit_Task_Toggle : {
            let newState = {...state};
            newState.shownTask = action.payload.shownTask;
            newState.editTaskToggle = action.payload.editTaskToggle;
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            
            return newState;
        }
        case Constants.TaskAction.Edit_Task : {
            let newState = {...state};
            let task =  newState.tasks.find(x => x.id == action.payload.id);
            task.title = action.payload.title;
            task.desc = action.payload.desc;
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            
            return newState;
        }
        
        case Constants.TaskAction.Update_Status : {
            let newState = {...state};
            let task =  newState.tasks.find(x => x.id == action.payload.id);
            task.status = action.payload.status;

            if(task.status == Constants.TaskStatus.ONGOING) {
                task.startDate = Utilities.DateToString(new Date());
                task.completeDate = "";
            }
            else if(task.status == Constants.TaskStatus.DONE) {
                task.completeDate = Utilities.DateToString(new Date());
            }
    
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            
            return newState;
        }

        case Constants.TaskAction.Delete : {
            let newState = {...state};
            newState.tasks =  newState.tasks.filter(x => x.id != action.payload.id);
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            
            return newState;
        }

        default: {
            return state;
        }
    }
}

const store  = createStore(reducer);
export default store;

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
            let updState = {...state};
            updState.taskForm = action.payload.taskForm;
            updState.openTasks = updState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            return updState;
        }

        case Constants.TaskAction.SetDisplayTask: {
            let updState = {...state};
            updState.shownTask = action.payload.shownTask;
            updState.openTasks = updState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            return updState;
        }

        case Constants.TaskAction.GetState: {
            let updState = {...state};
            updState.openTasks = updState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            return updState;
        }

        case Constants.TaskAction.Create: {
            let updState = {...state};
            lastId += 1;
            let task =  new Task(lastId, action.payload.title, action.payload.desc)
            updState.tasks.push(task);
            updState.openTasks = updState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);

            return updState;
        }

        case Constants.TaskAction.Update_Desc : {
            let updState = {...state};
            let task =  updState.tasks.find(x => x.id == action.payload.id);
            task.desc = action.payload.desc;
            updState.openTasks = updState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            
            return updState;
        }
        
        case Constants.TaskAction.Update_Status : {
            let updState = {...state};
            let task =  updState.tasks.find(x => x.id == action.payload.id);
            task.status = action.payload.status;

            if(task.status == Constants.TaskStatus.ONGOING) {
                task.startDate = Utilities.DateToString(new Date());
                task.completeDate = "";
            }
            else if(task.status == Constants.TaskStatus.DONE) {
                task.completeDate = Utilities.DateToString(new Date());
            }
    
            updState.openTasks = updState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            
            return updState;
        }

        case Constants.TaskAction.Delete : {
            let updState = {...state};
            updState.tasks =  updState.tasks.filter(x => x.id != action.payload.id);
            updState.openTasks = updState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            
            return updState;
        }

        default: {
            return state;
        }
    }
}

const store  = createStore(reducer);
export default store;


import Constants from "../Utils/Constants";

class Actions
{
    static ToggleForm(toggle) {

        const action = {
            type : Constants.TaskAction.ToggleForm,
            payload : {
                taskForm: toggle
            }
        };
        return action;
    }
    
    static SetDisplayTask(id) {

        const action = {
            type : Constants.TaskAction.SetDisplayTask,
            payload : {
                shownTask: id
            }
        };
        return action;
    }

    static GetState() {

        const action = {
            type : Constants.TaskAction.GetState,
            payload : {}
        };
        return action;
    }

    static CreateTask(title, desc) {

        const action = {
            type : Constants.TaskAction.Create,
            payload : {
                title: title,
                desc : desc
            }
        };
        return action;
    }

    static Edit_Task_Toggle(id,editTaskToggle){

        const action = {
            type : Constants.TaskAction.Edit_Task_Toggle,
            payload : {
                shownTask: id,
                editTaskToggle: editTaskToggle
            }
        };
        return action;
    }

    static Edit_Task(id,title,desc){

        const action = {
            type : Constants.TaskAction.Edit_Task,
            payload : {
                id: id,
                title : title,
                desc : desc
            }
        };
        return action;
    }
    
    static Update_Status(id,status){

        const action = {
            type : Constants.TaskAction.Update_Status,
            payload : {
                id: id,
                status : status
            }
        };
        return action;
    }
    
}

export default Actions;
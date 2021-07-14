
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
    
    static SetDisplayTask(shownTask) {

        const action = {
            type : Constants.TaskAction.SetDisplayTask,
            payload : {
                shownTask: shownTask
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

    static Update_Desc(id,desc){

        const action = {
            type : Constants.TaskAction.Update_Desc,
            payload : {
                id: id,
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
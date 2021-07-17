
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
                shownTaskId: id
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

    static Create_Task_Toggle(createTaskToggle) {

        const action = {
            type : Constants.TaskAction.Create_Task_Toggle,
            payload : {
                createTaskToggle: createTaskToggle
            }
        };
        return action;
    }

    static Create_Task_Submit(title, desc) {

        const action = {
            type : Constants.TaskAction.Create_Task_Submit,
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
                shownTaskId: id,
                editTaskToggle: editTaskToggle
            }
        };
        return action;
    }

    static Edit_Task_Submit(id,title,desc){

        const action = {
            type : Constants.TaskAction.Edit_Task_Submit,
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
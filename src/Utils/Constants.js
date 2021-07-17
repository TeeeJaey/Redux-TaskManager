
class Constants
{   
    static get TaskAction()
    {
        const TaskAction = {
            ToggleForm: "ToggleForm",
            SetDisplayTask: "SetDisplayTask",
            GetState: "GetState",
            Create_Task_Toggle: "Create_Task_Toggle",
            Create_Task_Submit: "Create_Task_Submit",
            Edit_Task_Toggle : "Edit_Task_Toggle",
            Edit_Task_Submit: "Edit_Task_Submit",
            Update_Status: "Update_Status",
            Delete: "Delete"
        };
        return TaskAction;
    }

    static get TaskStatus()
    {
        const TaskStatus = {
            TODO: "TODO",
            ONGOING: "ONGOING",
            DONE: "DONE"
        };
        return TaskStatus;
    }

    static get TaskType()
    {
        const TaskType = {
            FEATURE: "FEATURE",
            BUG: "BUG"
        };
        return TaskType;
    }
}

export default Constants;
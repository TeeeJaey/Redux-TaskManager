
class Constants
{   
    static get TaskAction()
    {
        const TaskAction = {
            ToggleForm: "ToggleForm",
            SetOpenTask: "SetDisplayTask",
            GetSTATE: "GetState",
            Create: "Create",
            Update_Desc: "Update_Desc",
            Update_Status: "date_Status",
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
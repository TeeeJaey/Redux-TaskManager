

const TaskForm = function(props) {

    return (
            <div className="modal-dialog " role="document">
                <div className="modal-content">
                    
                    <div key="modal-body" className="modal-body">
                    </div>
                    <div key="modal-footer" className="modal-footer">
                        <button
                            type="button" className="btn btn-danger" 
                            id="signIn_FormSubmit" style={{width: "48%"}} 
                            onClick={() => this.props.doClose()}  > 
                            Cancel
                        </button>
                        <button
                            type="button" className="btn btn-success" 
                            id="signIn_FormSubmit" style={{width: "48%",backgroundColor:"#f16b52"}} 
                            onClick={() => this.handleFormSubmit()} > 
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default TaskForm;
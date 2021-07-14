

const TaskForm = function(props) {
    let render = [];
    render.push(   
        <div key="modal-header" className="modal-header">
            <h3 className="modal-title" style={{margin:"auto"}}> Enter the Quantity</h3> 
        </div>
    );

    render.push(
        <div key="modal-body" className="modal-body">
            <form>
                <Input name="itemQty" type="text" value={formData.itemQty} onChange={this.handleInputChange}  />
            </form>
        </div>
    );
    
    render.push(
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
    );

    if(formError && formError !== "")
    {
        render.push(
            <div key="modal-error" className="list-group-item list-group-item-danger" > { formError } </div>
        );
    }

    return ( 
    
        <div>
            <div className="modal-dialog " role="document">
                <div className="modal-content">
                    {render}
                </div>
            </div>
            { this.state.isLoading &&  <Loading/> }
        </div>
     );


}

export default TaskForm;
import React, {Fragment, useState} from "react";

const EditTodo = ({ todoItems, setTodosChange}) => {


    //edit decription function

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };

            const myHeader = new Headers();
            myHeader.append("Content-Type", "application/json");
            myHeader.append("token", localStorage.token);


            await fetch(`http://localhost:5000/dashboard/todos/${todoItems.todo_id}`, {
                method: "PUT",
                headers: myHeader,
                body: JSON.stringify(body)
            });

            setTodosChange(true);

            // window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    const [description, setDescription] = useState(todoItems.description);

    return (
    <Fragment>
       <button type="button" 
       className="btn btn-warning" 
       data-toggle="modal" 
       data-target={`#id${todoItems.todo_id}`}
       >
        Edit
    </button>


    <div 
        className="modal" 
        id={`id${todoItems.todo_id}`} 
        onClick={() => setDescription(todoItems.description)}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button type="button" className="close" data-dismiss="modal" 
                    onClick={()=> setDescription(todoItems.description)}
                    >&times;</button>
                </div>

                
                <div className="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}
                    />
                </div>

                
                <div className="modal-footer">
                    <button 
                    type="button" 
                    className="btn btn-warning" 
                    data-dismiss="modal"
                    onClick = {() => updateDescription(todoItems,description)}
                    >Edit
                    </button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal"
                    onClick={()=> setDescription(todoItems.description)}>
                    Close</button>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    );
};

export default EditTodo;
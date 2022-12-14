import React from "react";

function NewListItem(props) {
    return(
        <div>
            <input type="text" placeholder="enter your new task" 
                onChange={props.handleUpdateNewItem}
            ></input>
            <input type="text" placeholder="how long do you think it will take?"
                onChange={props.handleUpdateNewTime}
            ></input>
            <button
                onClick={props.handleAddItem}
            >post new task</button>
        </div>
    );
}

export default NewListItem;
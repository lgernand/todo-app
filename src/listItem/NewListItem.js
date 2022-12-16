import React from "react";
import "./NewListItem.css"

function NewListItem(props) {
    return(
        <div className="NewListItemContainer">
            <div className="NewListItem">
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
        </div>
    );
}

export default NewListItem;
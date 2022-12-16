import React from "react";
import './ListItem.css'

function ListItem(props) {
    const items = props.items;

    return (
        <div>
            {items.map(item =>  
                <div
                 className="listItemContent"
                 key={item.id}>
                    <p>{item.task}</p> 
                    <p>{item.estimatedTime}</p>
                    <div className="deleteButton"
                        onClick={props.handleDeleteItem}
                    >X</div>
                </div>  
            )}
        </div>
    );
}

export default ListItem;
import React from "react";

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
                </div>  
            )}
        </div>
    );
}

export default ListItem;
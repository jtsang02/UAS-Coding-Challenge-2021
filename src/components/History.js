import React from "react";

const History = (props) => {

    //console.log(props);

    return (
        <div className="history" >
            <h2>History</h2>
            <div className="history-content">
                {props.x} x {props.y} = {props.x * props.y}
            </div>
        </div>
    );

};

export default History;

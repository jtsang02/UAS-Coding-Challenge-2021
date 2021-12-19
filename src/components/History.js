import React from "react";

const History = (props) => {

    //console.log(props);
    var x = 3;
    var y = 2;

    return (
        <div className="history" >
            <h2>History</h2>
            <div className="history-content">
                {x} x {y} = {x * y}
            </div>
        </div>
    );

};

export default History;

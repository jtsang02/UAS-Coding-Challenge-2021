import { useState } from "react";
import updateHistory from "./updateHistory";

const History = () => {
    
    const [history, setHistory] = useState(updateHistory());

    return (
        <div className="history" >
            <h2>History</h2>
            <div className="history-content">
                {history}
            </div>
        </div>
    );

};

export default History;

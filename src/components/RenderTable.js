import { useState } from "react";
import createArray from "./createArray";
import updateHistory from "./updateHistory";

const RenderTable = () => {

  const [table, setTable] = useState(createArray());
  const [historyList, setHistory] = useState(updateHistory());

  function handleClick(x, y) {
    
    setTable(createArray(x, y));
    setHistory(updateHistory(x, y)); // wish for a new function to update history
  }

  return (
    <>
      <div className="table">
        <table>
          {table.map((arrayRow, index_y) => (
            <tbody key={index_y}>
              <tr>
                {arrayRow.map((arrayItem, index_x) => (
                  <td
                    className={`${
                      index_x === 0 || index_y === 0
                        ? "table-heading"
                        : "table-data"
                    }`}
                    onClick={() => handleClick(index_x, index_y)}
                    key={index_x}
                  >
                    {arrayItem}
                  </td>
                ))}
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className="history">
        <h2>History</h2>
        <div className="history-content">
          {historyList.map((item) => (
            <div key={item.length}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RenderTable;

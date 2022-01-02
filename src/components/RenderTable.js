import { useState } from "react";
import createArray from "./createArray";
import updateHistory from "./updateHistory";

const RenderTable = () => {
  const [tableSize, setTableSize] = useState(13);
  const [table, setTable] = useState(
    createArray(undefined, undefined, tableSize)
  );
  const [historyList, setHistory] = useState(updateHistory());

  const handleIncrement = () => {
    setTableSize(tableSize + 1);
    setTable(createArray(0, 0, tableSize + 1));
  };

  const handleDecrement = () => {
    if (tableSize > 1) {
      setTableSize(tableSize - 1);
      setTable(createArray(undefined, undefined, tableSize - 1));
    }
  };

  const handleClick = (x, y) => {
    setTable(createArray(x, y, tableSize)); // temp use setTable to see increment in tableSize
    setHistory(updateHistory(x, y));
  };

  const handleReset = () => {
    setTableSize(13);
    setTable(createArray(undefined, undefined, 13));
  };

  return (
    <>
      <div>
        <div className="btn">
          <button onClick={() => handleIncrement()}>+</button>
          <button onClick={() => handleDecrement()}>-</button>
          <button onClick={() => handleReset()}>Reset</button>
          <button
            onClick={() =>
              setHistory(updateHistory(undefined, undefined, true))
            }
          >
            Clear History
          </button>
        </div>

        <div className="hero">
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
        </div>
      </div>
    </>
  );
};

export default RenderTable;

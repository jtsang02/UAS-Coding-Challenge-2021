import { useState } from "react";
import createArray from "./createArray";
import History from "./History";
import propTypes from "prop-types";

const RenderTable = () => {
  
  const [table, setTable] = useState(createArray());
  const [history, setHistory] = useState(History());

  const handleClick = (x, y) => {
    setTable(createArray(x, y));
    setHistory(History(x, y));    // wish for a new function to display history
    // pass down props to history

  };

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
      
    </>
  );
};

export default RenderTable;

import { useState } from "react";
import createArray from "./createArray";

const RenderTable = () => {

  const [table, setTable] = useState(createArray());

  return (
    <div className="table">
      <table>
        {table.map((arrayRow, index_y) => (
          <tbody 
            key={index_y}
          >
            <tr>
              {arrayRow.map((arrayItem, index_x) => (
                <td
                  className={`${(index_x === 0 || index_y === 0) ? 'table-heading' : 'table-data'}`}
                  onClick={() => setTable(createArray(index_x, index_y))}
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
  );
};

export default RenderTable;

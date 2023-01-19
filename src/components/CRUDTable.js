import React from "react";
import CRUDTableRow from "./CRUDTableRow";

const CRUDTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          ) : (
            data.map((el) => <CRUDTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CRUDTable;

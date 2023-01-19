import React from "react";

const CRUDTableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default CRUDTableRow;

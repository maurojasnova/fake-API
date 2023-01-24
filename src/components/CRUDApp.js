import React, { useState } from "react";
import CRUDForm from "./CRUDForm";
import CRUDTable from "./CRUDTable";

const initialDb = [
  { id: 1, name: "Seiya", constellation: "Pegaso" },
  { id: 2, name: "Shiryu", constellation: "Dragon" },
];

const CRUDApp = () => {
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure deleting '${id}'?`);

    if(isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData)
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <CRUDForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CRUDTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CRUDApp;

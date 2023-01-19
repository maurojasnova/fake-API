import React, { useState } from "react";
import CRUDForm from "./CRUDForm";
import CRUDTable from "./CRUDTable";

const initialDb = [
  { id: 1, name: "Seiya", constellation: "Pegaso" },
  { id: 2, name: "Shiryu", constellation: "Dragon" },
];

const CRUDApp = () => {
  const [db, setDb] = useState(initialDb);
  return (
    <div>
      <h2>CRUD App</h2>
      <CRUDForm />
      <CRUDTable data={db} />
    </div>
  );
};

export default CRUDApp;

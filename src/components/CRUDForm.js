import React, { useState, useEffect } from "react";

const initialForm = {
    name: "",
    constellation: "",
    id: "",
};

const CRUDForm = () => {
    const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};
  return (
    <div>
      <h3>Agregar</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constellation"
          onChange={handleChange}
          value={form.constellation}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Clear" onClick={handleReset}/>
      </form>
    </div>
  );
};

export default CRUDForm;

import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  constellation: "",
  id: null,
};

const CRUDForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  // useEffect(() => {
  //   if (dataToEdit) {
  //     setForm(dataToEdit);
  //   } else {
  //     setForm(initailForm);
  //   }
  // }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>Add</h3>
      <form onSubmit={handleSubmit}>
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
        <input type="reset" value="Clear" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CRUDForm;
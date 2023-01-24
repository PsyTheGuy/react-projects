import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getList = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getList());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "All items removed from the list", "danger");
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "Item removed from the list", "danger");
  };

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(item.id);
    setName(item.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Item Name Is Empty", "danger");
      return;
    }

    if (isEditing) {
      setList(
        list.map((item) =>
          item.id === editID ? { ...item, title: name } : item
        )
      );
      setName("");
      setIsEditing(false);
      setEditID(null);
      setAlert({ show: true, message: "Item Changed", type: "success" });
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "Item added to the list", "success");
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. eggs"
          />
          <button className="submit-btn" type="submit">
            {!isEditing ? "Submit" : "Edit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

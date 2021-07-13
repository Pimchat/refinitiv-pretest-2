import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [searchItem, setsearchItem] = useState("");

  useEffect(() => {
    fetch("https://api.publicapis.org/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  const listItems = items
    .filter((item) => {
      if (searchItem === "") {
        return item;
      } else if (item.toLowerCase().includes(searchItem.toLowerCase())) {
        return item;
      }
    })
    .map((val, key) => (
      <div className="cell" key={key}>
        {val}
      </div>
    ));

  const handleSearch = (e) => {
    console.log(e.target.value);
    setsearchItem(e.target.value);
  };

  return (
    <div className="box">
      <input
        className="input-box"
        type="text"
        value={searchItem}
        placeholder="Search..."
        onChange={handleSearch}
      />

      <div className="table">{listItems}</div>
    </div>
  );
}

export default App;

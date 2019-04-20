import React from "react";
import List from "./List";

const App = ({ items }) => {
  function handleSubmit(e) {
    const d = new FormData(e.target);
    items.push({ id: items.length, value: d.get("value") });
    e.target.reset();
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>OMG A LIST</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="value" />
        <button>add</button>
      </form>
      <List items={items} />
    </div>
  );
};

export default App;

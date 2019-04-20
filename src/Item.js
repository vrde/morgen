import React from "react";
import { watch } from "./morgen";

const Item = watch(({ item }) => {
  function handleSubmit(e) {
    const d = new FormData(e.target);
    item.value = d.get("value");
    item.edit = false;
    e.target.reset();
    e.preventDefault();
  }
  return (
    <li style={{ textDecoration: item.done ? "line-through" : "" }}>
      {item.edit ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="value" defaultValue={item.value} />
          <button>save</button>
        </form>
      ) : (
        <>
          {item.value}{" "}
          <button onClick={() => (item.done = !item.done)}>toggle</button>
          <button onClick={() => (item.edit = true)}>edit</button>
        </>
      )}
    </li>
  );
});

export default Item;

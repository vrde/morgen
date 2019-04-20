import React from "react";
import Item from "./Item";
import { watch } from "./morgen";

const List = watch(({ items }) => {
  return (
    <ol>
      {items.map((value, index) => (
        <Item key={index} item={value} />
      ))}
    </ol>
  );
});

export default List;

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import KITS_SHIPPING_DATA from "../data/KITS_SHIPPING_DATA.json";
import TableList from "./TableList";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  //const [TableListDefault, setTableListDefault] = useState();
  const [tableList, setTableList] = useState(KITS_SHIPPING_DATA);

  const updateInput = async (input) => {
    console.log("in", input);

    const filtered = tableList.filter((item) => {
      console.log(item, "fff");
      return item.label_id.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    console.log("23230", filtered);
    setTableList(filtered);
  };
  console.log();
  return (
    <>
      <h1>Biobot lab</h1>
      <SearchBar input={input} updateInput={updateInput} />
      <br />
      <TableList tableList={tableList} />
    </>
  );
};

export default SearchPage;

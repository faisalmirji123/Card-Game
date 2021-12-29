import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData);
  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;

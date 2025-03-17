import { useCallback, useEffect, useState } from "@lynx-js/react";
import data from "./constant/data.json";

import "./App.css";
import { useNavigate } from "react-router";

export function App() {
  console.log(data);
  const nav = useNavigate();
  return (
    <scroll-view className="body">
      <list
        className="list"
        list-type="waterfall"
        column-count={3}
        scroll-orientation="vertical"
        custom-list-name="list-container"
      >
        {data.map((item) => (
          <list-item
            bindtap={() => nav("/product/" + item.id)}
            item-key={"" + item.id}
            key={"" + item.id}
            className="single-card"
          >
            <image src={item.image} className="listed_image"/>
            <text className="text">{item.name}</text>
            <text className="white">${item.price}</text>
          </list-item>
        ))}
      </list>
    </scroll-view>
  );
}

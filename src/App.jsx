import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";
import { useNavigate } from "react-router";

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);
  const nav = useNavigate();

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <text className="Title">React</text>
          <text className="Subtitle">on Lynx</text>
        </view>
        <view className="flex flex-col gap-3 bg-blue text-orange"> 
          <text bindtap={() => nav("/home")} className="Title">
            Home
          </text>
          <text bindtap={() => nav("/product")} className="Title">
            Product
          </text>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  );
}

import './App.css';
import {ImageLinkIcon} from "./atoms/ImageLinkIcon";
import Icon, {TwitterOutlined} from "@ant-design/icons";
import React from "react";
import { ReactComponent as PixivSvg } from './assets/icon/Pixiv_Icon.svg'

function App() {
  return (
    <div className="App">
      <ImageLinkIcon url={'https://twitter.com/Sakaki333/status/1599055861573353472'} iconType={<TwitterOutlined />} />
    </div>
  );
}

export default App;

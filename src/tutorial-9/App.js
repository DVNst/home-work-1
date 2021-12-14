import React from "react";
import UserInfo from "./components/user-info/user-info";

import "./styles.css";

function App() {
  return (
    <div className="app" id="app">
      <div className="app-container">
        <form className="app-form">
          <input type="text" className="app-input" placeholder="Укажите GitHub-аккаунт" />
          <button className="app-form_btn">Найти</button>
        </form>
        <UserInfo />
      </div>
    </div>
  );
}

export default App;

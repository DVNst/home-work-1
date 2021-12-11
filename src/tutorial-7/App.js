import React from "react";
import { BrowserRouter} from 'react-router-dom';

import Form from "./components/form/form";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    </div>
  );
}

export default App;

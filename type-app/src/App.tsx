import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomLayout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { Provider } from "./context/UserContext";

function App(props: any) {
  return (
    <Provider>
      <Router >
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </Provider>
  );
}

export default App;

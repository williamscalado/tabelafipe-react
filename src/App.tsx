import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Header } from "./Components/Header";
import AppRoutes from "./Routers";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      <Header />
        <AppRoutes />
      </BrowserRouter>

    </>
  );
}

export default App;

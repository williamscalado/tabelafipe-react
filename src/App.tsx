import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Header } from "./Components/Header";
import { FipeProvider } from "./Hooks/useFipe";
import AppRoutes from "./Routers";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <FipeProvider>
        <BrowserRouter>
        <GlobalStyle />
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </FipeProvider>

    </>
  );
}

export default App;

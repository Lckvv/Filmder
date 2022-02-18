import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/filmder" element={<IndexPage/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;

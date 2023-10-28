import "./App.css";
import DrugName from "./containers/DrugName";
import DrugsSearch from "./containers/DrugsSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrugsSearch />} />
        <Route path="/drugs/:name" element={<DrugName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

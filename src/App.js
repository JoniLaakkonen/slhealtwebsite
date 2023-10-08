import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Etusivu, Tietoja, Otayhteytta, Palvelut } from "../src/pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/etusivu" element={<Etusivu />} />
          <Route path="/tietoja" element={<Tietoja />} />
          <Route path='/otayhteytta' element={<Otayhteytta/>}/>
          <Route path='/palvelut' element={<Palvelut/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

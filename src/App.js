import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<ItemListContainer />}/>
        <Route path="/itemDetail" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Lo siento esta pagina no existe</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

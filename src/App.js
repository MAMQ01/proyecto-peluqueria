import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCheckOut from "./components/form/FormCheckOut";
import Cart from "./components/cart/Cart";
import CartContextProvider from './components/context/ContextCart'
import Body from "./components/body/Body";

function App() {

  return (
    <BrowserRouter>

      <CartContextProvider>
        <Navbar />

        <Routes>

          <Route path="/" element={<Body />} />

          <Route path="*" element={<h2>Lo siento esta pagina no existe</h2>} />

          <Route path="/category/:categoryName" element={<ItemListContainer />} />

          <Route path="/itemDetail/:category/:id" element={<ItemDetailContainer />} />

          <Route path="/checkOut" element={<FormCheckOut />} />

          <Route path="/cart" element={<Cart />} />

        </Routes>
        
      </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;

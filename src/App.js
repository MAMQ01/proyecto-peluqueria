import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCheckOut from "./components/form/FormCheckOut";
import Cart from "./components/cart/Cart";
import CartContextProvider from './components/context/ContextCart'
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";

function App() {

  return (
    <BrowserRouter>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Altura mínima de toda la página
        }}
      >

        <CartContextProvider>

          <Navbar />

          <Box
            component="main"
            sx={{
              flexGrow: 1, // Hace que este contenedor ocupe todo el espacio disponible
              width: '100%'
            }}
          >
            <Routes>

              <Route path="/" element={<Body />} />

              <Route path="*" element={<h2>Lo siento esta pagina no existe</h2>} />

              <Route path="/category/:categoryName" element={<ItemListContainer />} />

              <Route path="/itemDetail/:category/:id" element={<ItemDetailContainer />} />

              <Route path="/checkOut" element={<FormCheckOut />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/category/:categoryName/:sexo" element={<ItemListContainer />} />
              <Route path="/:sexo" element={<ItemListContainer />} />

              <Route path="/cart" element={<Cart />} />

            </Routes>
          </Box>
        </CartContextProvider>

        <Footer />

      </Box>

    </BrowserRouter>
  );
}

export default App;

import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import CartContextProvider from './components/context/ContextCart'
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";
import ContextCartProvider from "./components/context/ContextCart";
import NotFound from "./components/notFound/NotFound"
import WhatsAppButton from "./components/whatsAppButton/WhatsAppButton";
import Login from "./components/login/Login";
import CheckoutForm from "./components/checkOutForm/CheckOutForm";


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
          <ContextCartProvider>

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

                <Route path="*" element={<NotFound />} />

                <Route path="/category/:categoryName" element={<ItemListContainer />} />

                <Route path="/:sexo" element={<ItemListContainer />} />

                <Route path="/agendar/:category/:id" element={<ItemDetailContainer />} />

                <Route path="/checkOut" element={<CheckoutForm />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/category/:categoryName/:sexo" element={<ItemListContainer />} />

                <Route path="/login" element={<Login />} />

              </Routes>
            </Box>
          </ContextCartProvider>
        </CartContextProvider>

        <Footer />

      </Box>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;

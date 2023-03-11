import ConsumiendoApis from "./Components/ConsuminedoApis/ConsumiendoApis";
import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
function App() {
  const onAdd = (cantidad) => {
    console.log(`Se agrego al carrito ${cantidad} elementos`);
  };
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="ItemDetail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<h1> Error 404: Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

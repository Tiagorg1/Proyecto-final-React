import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar>
        <Footer>
          <ItemListContainer greeting={"Tiago"} />
          <ProductCard title="Producto 1" price={19000} stock={false} />
          <ProductCard title="Producto 2" price={30000} stock={true} />
          <ProductCard title="Producto 3" price={27890} stock={true} />
        </Footer>
      </Navbar>
    </div>
  );
}

export default App;

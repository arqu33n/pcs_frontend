import "./style.scss";
import Page from "./Components/Page/Page";
import Header from "./Components/Header/Header";
import BreadCrumbs from "./Components/BreadCrumbs/BreadCrumbs";
import Advantages from "./Components/Advantages/Advantages";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";
import Item from "./Components/Item/Item";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Item">Dashboard</Link>
          </li>
          <li>
            <Link to="/PageItem">About</Link>
          </li>
          <li>
            <Link to="/Cart">Корзина</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/Item" element={<Item />}></Route>
          <Route path="/PageItem" element={<MainPage />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
    // <div className="App">
    //   <Header />
    //   <BreadCrumbs />
    //   {/* тут фильтры */}
    //   <Page />
    //   <Advantages />
    //   {/* тут пагинация */}
    //   <Subscribe />
    //   <Footer />
    // </div>
  );
}

export default App;

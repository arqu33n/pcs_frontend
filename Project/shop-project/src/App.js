import "./style.scss";
import Page from "./Components/Page/Page";
import MainPage from "./Components/MainPage/MainPage";
import Item from "./Components/Item/Item";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/Item/" element={<Item />}></Route>
          <Route path="/Item/:id" element={<Item />}></Route>
          <Route path="/Page" element={<Page />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

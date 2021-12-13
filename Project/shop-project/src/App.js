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
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/Item" element={<Item />}></Route>
          <Route path="/Page" element={<Page />}></Route>
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

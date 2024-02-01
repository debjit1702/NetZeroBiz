<<<<<<< HEAD
function App() {
  return (
    <>
    <h1>hi</h1>
    </>
  );
}

=======
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOMEMAIN from "./pages/HOMEMAIN";
import ProductScreen from "./pages/ProductScreen";
import ProductLaptop from "./pages/ProductLaptop";
import ProductScreen1 from "./pages/ProductScreen1";
import CreateAccount from "./pages/CreateAccount";
import ProductScreenLaptop from "./pages/ProductScreenLaptop";
import ProductScreen2 from "./pages/ProductScreen2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-1":
        title = "";
        metaDescription = "";
        break;
      case "/product-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-4":
        title = "";
        metaDescription = "";
        break;
      case "/Join-Us":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOMEMAIN />} />
      <Route path="/product-screen-1" element={<ProductScreen />} />
      <Route path="/product-laptop" element={<ProductLaptop />} />
      <Route path="/product-screen-4" element={<ProductScreen1 />} />
      <Route path="/Join-Us" element={<CreateAccount />} />
      <Route path="/product-screen-laptop" element={<ProductScreenLaptop />} />
      <Route path="/product-screen-2" element={<ProductScreen2 />} />
    </Routes>
  );
}
>>>>>>> c8d54ae (first Commit)
export default App;

import { Route, Routes } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import HeaderMenuBar from "./HeaderMenuBar";
import MainPage from "./MainPage";
import ProductListPage from "./ProductListPage";
import CopylightFooter from "./CopylightFooter";
import ProductDetailsPage from "./ProductDetailsPage";

function App() {
  return (
    <>
      <HeaderMenuBar />
      <CategoryMenu />
      {/* <ProductListPage /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
      </Routes>
      <CopylightFooter />
    </>
  );
}

export default App;

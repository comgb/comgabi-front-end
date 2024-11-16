import { Link, Route, Routes } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import HeaderMenuBar from "./HeaderMenuBar";
import MainPage from "./MainPage";
import ProductListPage from "./ProductListPage";
import CopylightFooter from "./CopylightFooter";
import ProductDetailsPage from "./ProductDetailsPage";
import TopButton from "./TopButton";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <>
      <HeaderMenuBar />
      <CategoryMenu />
      <Routes>
        <Route path="/productList" element={<ProductListPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
      <TopButton />
      <CopylightFooter />
    </>
  );
}

export default App;

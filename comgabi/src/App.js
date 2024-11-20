import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryMenu from "./layout/CategoryMenu";
import HeaderMenuBar from "./layout/HeaderMenuBar";
import MainPage from "./mainpage/MainPage";
import ProductListPage from "./list-page/ProductListPage";
import CopylightFooter from "./layout/CopylightFooter";
import ProductDetailsPage from "./product-page/ProductDetailsPage";
import TopButton from "./layout/TopButton";
import LoginPage from "./login/LoginPage";
import SignUpPage from "./login/SignUpPage";
import SignUpPhone from "./login/SignUpPhone";
import SignUpEmail from "./login/SignUpEmail";
function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderMenuBar />
      <CategoryMenu />
      <Routes>
        <Route path="/productList" element={<ProductListPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/sign_up/phone" element={<SignUpPhone />} />
        <Route path="/sign_up/email" element={<SignUpEmail />} />
      </Routes>
      <TopButton />
      <CopylightFooter />
    </QueryClientProvider>
  );
}

export default App;

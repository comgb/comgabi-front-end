import { Route, Routes } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import HeaderMenuBar from "./HeaderMenuBar";
import MainPage from "./MainPage";

function App() {
  return (
    <>
      <HeaderMenuBar />
      <CategoryMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;

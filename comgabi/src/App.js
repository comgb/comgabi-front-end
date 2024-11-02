import { Route, Routes } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import HeaderMenuBar from "./HeaderMenuBar";

function App() {
  return (
    <>
      <HeaderMenuBar />
      <CategoryMenu />
      <Routes>
        {/* <Route path="/main" element={<h1>메인</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;

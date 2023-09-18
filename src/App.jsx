import "./App.css"
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/login/LoginPage";
import OrderPage from "./components/Pages/Order/OrderPage";
import ErrorPage from "./components/Pages/error/ErrorPage";


function App() {
  return (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/order/:username" element={<OrderPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}

export default App;
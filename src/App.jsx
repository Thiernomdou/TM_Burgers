import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/login/LoginPage";
import ErrorPage from "./components/Pages/error/ErrorPage";
import OrderPage from "./components/Pages/order/OrderPage";
import "./App.css"

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


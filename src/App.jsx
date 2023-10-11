import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login-page"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [login , setLogin] = useState(localStorage.getItem("Login") ? true : false)

  return (
    <BrowserRouter >
    <Header />
      <Routes >
        <Route path="" element={login ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/products" element={login ?<Product /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

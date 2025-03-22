import React from "react"
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import Navigation from "./components/Navbar"
import UsersPage from "./pages/UsersPage"
import ProductsPage from "./pages/ProductsPage" 

function App() {
  return(
    <BrowserRouter>
    <div className="flex flex-wrap justify-center">
      <Navigation />

      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<UsersPage />} />
      <Route path="/login/productos" element={<ProductsPage/>} />

      </Routes>
      <Toaster />
    </div>
    </BrowserRouter>
  )
}

export default App
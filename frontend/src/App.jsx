import React, { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import Navigation from "./components/Navbar"
import UsersPage from "./pages/UsersPage"
import ProductsPage from "./pages/ProductsPage" 
import ProductDetailPage from "./pages/ProductDetailPage"
import { CartProvider } from "./context/CartContext"
import Carrito from "./pages/Carrito"
import CompraPage from "./pages/CompraPage"
import ComprobantePage from "./pages/ComprobantePage"
import PerfilPage from "./pages/PerfilPage"
import './api/refreshToken'
import ProtectedRoute from "./components/ProtectedRoute"
import RegisterPage from "./pages/RegisterPage"
import EditarPerfil from "./pages/EditarPerfil"
import NosotrosPage from "./pages/NosotrosPage"
import { AuthContext } from "./components/UseAuth"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('access_token')
  )


  return(
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <div className="flex flex-wrap justify-center space-x-6">
    <CartProvider>
    <BrowserRouter>
    {isAuthenticated && <Navigation />}
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<UsersPage />} />
      <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/login/nosotros" element={<NosotrosPage/>} />
          <Route path="/login/productos" element={<ProductsPage/>} />
          <Route path="/login/productos/:category" element={<ProductsPage/>} />
          <Route path="/login/productos/unico/:id" element={<ProductDetailPage />} />
          <Route path="/login/carrito" element={<Carrito />} />
          <Route path="/login/compra" element={<CompraPage />} />
          <Route path="/login/compra/comprobante" element={<ComprobantePage />} />
          <Route path="/login/perfil" element={<PerfilPage />} />
          <Route path="/login/perfil/editar" element={<EditarPerfil />} />
        </Route>
    </Routes>
    <Toaster />
    </BrowserRouter>
    </CartProvider>
    </div>
    </AuthContext.Provider>
  )
}

export default App
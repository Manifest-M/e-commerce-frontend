import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

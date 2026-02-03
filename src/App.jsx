import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'

function App() {
  // bg-gray-100 gives a neutral background for the white cards to stand out, typical for Amazon content areas
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      {/* Remove padding and max-width from main tag, let inner components handle it. */}
      <main className="flex-grow">
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

import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Prices from "./pages/Prices"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precios" element={<Prices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

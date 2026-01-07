import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import DesarrolloWeb from "./pages/DesarrolloWeb"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6fbff]">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
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

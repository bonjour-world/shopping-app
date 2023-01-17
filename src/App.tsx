import './App.css'
import {Routes,Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Products} from "./pages/Products"
import {Cart} from "./pages/Cart"
import {Navbar} from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="App container mt-3">
        <h1 className="text-xl text-center font-bold">Shopping app</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App

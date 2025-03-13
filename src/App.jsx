import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Chess from './pages/chess/chess'
import Draughts from './pages/draughts/draughts'
import Footer from './components/footer/footer'




function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="/chess" element={<Chess/>}/>
        <Route path="/draughts" element={<Draughts/>}/>
      </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App

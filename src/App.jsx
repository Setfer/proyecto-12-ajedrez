import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Chess from './pages/chess/chess'
import Draughts from './pages/draughts/draughts'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/chess" element={<Chess/>}/>
        <Route path="/draughts" element={<Draughts/>}/>
      </Routes>
    </>
  )
}

export default App

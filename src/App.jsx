import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages'
import BottomNavbar from './components/Bottomnavbar'
import ProfileActionbar from './components/ProfileActionbar'
import Profileviewpage from './pages/Profileviewpage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" 
      element={<HomePage />}
      />
      
<Route 
      path="/profileview" 
      element={<Profileviewpage />}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App

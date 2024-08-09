import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages'
import BottomNavbar from './components/Bottomnavbar'
import ProfileActionbar from './components/ProfileActionbar'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" 
      element={<HomePage />}
      />
       <Route 
      path="/bottombar" 
      element={<BottomNavbar />}
      />
       <Route 
      path="/profileaction" 
      element={<ProfileActionbar />}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App

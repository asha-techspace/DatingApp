
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage, QualificationPage } from './pages'
import DesktopLayout from './layout/DesktopLayout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DesktopLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/qualification' element={<QualificationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

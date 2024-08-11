
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage, QualificationPage } from './pages'
import DesktopLayout from './layout/DesktopLayout'
import Accept from './pages/Accept/Accept';
import Contacted from './pages/Contacted/Contacted';
import Recieved from './pages/Recieved/Recieved';
import Reject from './pages/Reject/Reject';
import Sent from './pages/Sent/Sent';
import ShortList from './pages/ShortList/ShortList';
import ShortListedBy from './pages/ShortListedBy/ShortListedBy';
import ViewedMyProfile from './pages/ViewedMyProfile/ViewedMyProfile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<HomePage />} />
          <Route path='/qualification' element={<QualificationPage />} />
          <Route path='/accept' element={<Accept/>}/>
          <Route path='/contacted' element={<Contacted/>}/>
          <Route path='/recieved' element={<Recieved/>}/>
          <Route path='/reject' element={<Reject/>}/>
          <Route path='/sent' element={<Sent/>}/>
          <Route path='/shortlist' element={<ShortList/>}/>
          <Route path='/shortlistedby' element={<ShortListedBy/>}/>
          <Route path='/viewedmyprofile' element={<ViewedMyProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

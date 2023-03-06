import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from "./pages/Auth/Auth"
import Password from './components/Password/Password'
import Admin from './pages/Admin/Admin'
import Home from './pages/Home/Home'
import RegistrationList from './components/RegistrationList/RegistrationList'
import MapClient from './components/MapClient/MapClient'
import NoAuthorization from './pages/NoAuthorization/NoAuthorization'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/home'>
          <Route path="/home" element = {<Home />} />
          <Route path="/home/no-authorozation" element={<NoAuthorization />}/>
        </Route>
        <Route path='/register/:userId' element={<Password />}/>
        <Route path="/admin"  >
            <Route path="/admin" element={<Admin />}/>
            <Route path="/admin/registration-list" element={<RegistrationList />}/>
            <Route path="/admin/map/:id" element={<MapClient />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

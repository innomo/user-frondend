import { useState } from 'react'

import './App.css'
import Home from './Home'
import UsersView from './components/user/UsersView'
import NavBar from './components/common/NavBar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddUser from './components/user/AddUser'
import EditUser from './components/user/EditUser'
import UserPofile from './components/user/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <Home/> */}
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<UsersView/>}></Route>
          <Route exact path="/view-users" element={<UsersView/>}></Route>
          <Route exact path="/add-user" element={<AddUser/>}></Route>
          <Route exact path="/edit-user/:id" element={<EditUser/>}></Route>
          <Route exact path="/view-user/:id" element={<UserPofile/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

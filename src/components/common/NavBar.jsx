import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  navbar-dark mb-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">UsersCRUD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-success" aria-current="page" to={"/view-users"}>View Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-success" to={"/add-user"}>Add User</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
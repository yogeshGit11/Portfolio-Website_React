import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navabar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand fw-bold" href="/"><strong className='h2'>Yogesh Chaudhari</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item active me-5">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item me-5">
      <NavLink to="/about">About</NavLink>
      </li>
      <li className="nav-item me-5">
      <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

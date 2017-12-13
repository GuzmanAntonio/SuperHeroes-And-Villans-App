import React from 'react'
import {
  Link
} from 'react-router-dom'

const navStyles = {
  container: {
    display: 'flex',
    border: '2px solid black',
    background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
    color: '6C7A89',
    boxShadow: '5px 10px #888888'
  }
}

const linkStyle = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '20px',
    justifyContent: 'center'
  }
}

const NavBar = () => {
  return(
    <nav style={navStyles.container}>
      <div style={linkStyle.container}>
      <Link to='/'>Home</Link>
      <Link to='/heroes'>Heroes</Link>
      <Link to='/villains'>Villains</Link>
      <Link to='/create-hero'>Create</Link>
      </div>
    </nav>
  )
}


export default NavBar
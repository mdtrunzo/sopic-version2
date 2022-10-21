import logo from '../assets/logo-blanco.png'
import { Avatar } from '@mui/material'
import LoginModal from './LoginModal'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Flip from 'react-reveal/Flip'

function HeaderUser() {
  const [modal, setModal] = useState(null)

  const handleLogin = () => {
    setModal(!modal)
  }

  return (
    <div className="header-container">
      <div className="header header-user">
        <Link to="/">
          <div className="logo">
            <img src={logo} width="105" alt="logo" />
          </div>
        </Link>
        <div className="nav">
          <ul>
            <Link to="/user-panel">
              <li>Mis Plantillas</li>
            </Link>
            <li>Mis Datos</li>
            <li>
              {' '}
              <div className="avatar-user" onClick={handleLogin}>
                <Avatar />
                <p>¡Hola!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {modal && <LoginModal />}
    </div>
  )
}

export default HeaderUser

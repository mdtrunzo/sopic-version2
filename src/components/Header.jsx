import logo from '../assets/logo-blanco.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import SaveIcon from '@mui/icons-material/Save'
import ReplayIcon from '@mui/icons-material/Replay'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Avatar } from '@mui/material'
import LoginModal from './LoginModal'
import { useState } from 'react'
// import Flip from 'react-reveal/Flip'

function Header() {
  const [modal, setModal] = useState(null)

  const handleLogin = () => {
    setModal(!modal)
  }

  return (
    <div className="header-container">
      <div className="header">
        <nav className="navbar navbar-left">
          <ul>
            <a href="https://sopic.shop">
              <div className="iconos-menu">
                <ExitToAppIcon />
                <li>SALIR</li>
              </div>
            </a>
            <div className="iconos-menu" onClick={handleLogin}>
              <SaveIcon />
              <li>GUARDAR</li>
            </div>
          </ul>
        </nav>

        <div className="logo">
          <img src={logo} width="105" alt="logo" />
        </div>

        <nav className="navbar navbar-right">
          <ul>
            <div className="iconos-menu">
              <ReplayIcon />
              <li>DESHACER</li>
            </div>
            <a href="https//google.com">
              <div className="iconos-menu">
                <ShoppingBagIcon />
                <li>TERMINAR</li>
              </div>
            </a>
          </ul>
        </nav>
        <div className="avatar" onClick={handleLogin}>
          <Avatar />
          <p>Iniciar Sesión</p>
        </div>
      </div>

      {modal && <LoginModal />}
    </div>
  )
}

export default Header

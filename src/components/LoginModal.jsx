import Logo from '../assets/logo.png'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

function LoginModal() {
  const [modal, setModal] = useState(null)
  //   const [userNameForm, setUserNameForm] = useState('')
  //   const [password, setPassword] = useState('')
  //   const [user, setUser] = useState({
  //     username: 'admin',
  //     password: 'Testing1234',
  //     userNiceName: '',
  //     userEmail: '',
  //     loggedIn: false,
  //     loading: false,
  //     error: '',
  //   })

  //   const handleOnChange = (e) => {
  //       const nameValue = e.target.value
  //       setUserNameForm(nameValue)
  //   }
  //   const handleOnChangePassword = (e) => {
  //       const passwordValue = e.target.value
  //       setPassword(passwordValue)
  //   }

  //   const onFormSubmit = (e) => {
  //     e.preventDefault()

  //     const siteUrl = 'https://testing.ribaslegales.com.ar'

  //     const loginData = {
  //         username: user.username,
  //         password: user.password,
  //         loading: true,
  //     }

  //         axios.post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
  //         .then(res => setUser({
  //             userNiceName: res.data.user_nicename,
  //             userEmail: res.data.user_email
  //         }))
  //         .catch(err => console.log(err.response.data))
  //   }

  //   console.log(user.userNiceName, user.userEmail)

  const closeModal = () => {
    setModal(!modal)
  }

  return (
    <>
      {!modal && (
        <div className={`login-modal`}>
          <div className="overlay" onClick={closeModal}></div>
          {/* <form onSubmit={onFormSubmit}> */}
          <form>
            <CloseIcon className="close-modal" onClick={closeModal} />
            <img src={Logo} alt="" width="120" />
            <input
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              //   value={userNameForm}
              //   onChange={handleOnChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contrase??a"
              //   value={password}
              //   onChange={handleOnChangePassword}
            />
            <button type="submit">INICIAR SESI??N</button>
            <span>Olvid?? mi contrase??a</span>
            <span>Si no ten??s una cuenta hac?? click ac?? para crear una</span>
          </form>
        </div>
      )}
    </>
  )
}

export default LoginModal

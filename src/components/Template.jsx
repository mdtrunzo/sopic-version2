import { useState } from 'react'
import LetterSize from '../actions/LetterSize'
import Rotate from '../actions/Rotate'
import Color from '../actions/Color'
import KidsUno from './templates/kids/KidsUno'
import { toast } from 'react-toastify'

function Template({ item }) {
  const [id, setId] = useState('')

  const handleId = (id) => {
    setId(id)
  }

  const showError = () => {
    toast.error(`No aceptamos más de 10 mb 🥺`, {
      autoClose: 1500,
      position: 'top-left',
    })
  }
  const showSuccess = () => {
    toast.success(`Imagen cargada 😎`, {
      autoClose: 1500,
      position: 'top-left',
    })
  }
  const showErrorLess = () => {
    toast.error(`No aceptamos menos de 2 mb 🥺`, {
      autoClose: 1500,
      position: 'top-left',
    })
  }

  return (
    <div>
      <div className="page-template">
        {item.id === 1 && (
          <KidsUno
            handleId={handleId}
            item={item}
            showError={showError}
            showErrorLess={showErrorLess}
            showSuccess={showSuccess}
          />
        )}
      </div>
      <div className="panel">
        <Rotate id={id} />
        <LetterSize id={id} />
        <Color id={id} />
      </div>
    </div>
  )
}

export default Template

import { useState, useEffect } from 'react'
import TextIncreaseIcon from '@mui/icons-material/TextIncrease'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { toast } from 'react-toastify'

function LetterSize({ id, type }) {
  const [font, setFont] = useState('')

  useEffect(() => {
    if (id) {
      const el = document.getElementById(id)
      let elementFontSize = window.getComputedStyle(el).fontSize
      let counter = parseInt(elementFontSize.replace('px', ''))
      setFont(counter)
    }
  }, [id])

  const decreaseFont = (id) => {
    setFont((prevState) => prevState - 1)
    const element = document.getElementById(id)
    element
      .querySelector('div')
      .querySelector('div').style.fontSize = `${font}px`
  }

  const handleClick = () => {
    toast('Toca el texto que deseas modificar ✏️', {
      autoClose: 1000,
      style: {
        fontSize: '14px',
      },
    })
  }

  const increaseFont = (id) => {
    setFont((prevState) => prevState + 1)
    const element = document.getElementById(id)
    element
      .querySelector('div')
      .querySelector('div').style.fontSize = `${font}px`
  }

  return (
    <>
      <div className="iconos-menu" onClick={handleClick}>
        <TextIncreaseIcon />
        <li>CAMBIAR TAMAÑO</li>
      </div>
      {id && type === undefined && (
        <div className="letter-control">
          <RemoveIcon
            id={id}
            onClick={(e) => decreaseFont(e.target.id)}
            className="remove"
          />
          {font && <p>{font}</p>}
          <AddIcon
            id={id}
            onClick={(e) => increaseFont(e.target.id)}
            className="remove"
          />
        </div>
      )}
    </>
  )
}

export default LetterSize

import BrushIcon from '@mui/icons-material/Brush'
import { toast } from 'react-toastify'

function Color({ id, type }) {
  const colors = [
    '#785AFF',
    '#FF99CC',
    '#A2F451',
    '#3CFAC6',
    '#DD55F3',
    '#DCF158',
    '#F18971',
    '#000000',
  ]

  const handleColor = (id, color) => {
    const el = document.getElementById(id)
    el.style.color = color
  }

  const handleClick = () => {
    toast('Toca el texto que deseas modificar 🖌', {
      autoClose: 1000,
      style: {
        fontSize: '14px',
      },
    })
  }

  return (
    <>
      <div className="iconos-menu" onClick={handleClick}>
        <BrushIcon />
        <li>CAMBIAR COLOR</li>
      </div>
      {id && type === undefined && (
        <div className="colors-container">
          {colors.map((item, index) => (
            <div
              style={{ backgroundColor: item }}
              className="bloques"
              key={index}
              id={item}
              onClick={(e) => handleColor(id, e.target.id)}
            ></div>
          ))}
        </div>
      )}
    </>
  )
}

export default Color

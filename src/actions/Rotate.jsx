import { useState } from 'react'
import LoopIcon from '@mui/icons-material/Loop'
import { toast } from 'react-toastify'

function Rotate({ id, type }) {
  const [val, setVal] = useState('')

  const handleRotate = (id, val) => {
    const el = document.getElementById(id)

    const sumVal = val++
    setVal(sumVal)
    el.style.transform = `rotate(${sumVal}deg)`
  }

  const handleClick = () => {
    toast('Toca la imagen que deseas rotar 🌅', {
      autoClose: 1000,
      style: {
        fontSize: '14px',
      },
    })
  }

  return (
    <>
      <div className="iconos-menu" onClick={handleClick}>
        <LoopIcon />
        <li>ROTAR IMAGEN</li>
      </div>
      <div className="subpanel">
        {id && type && (
          <>
            <input
              type="range"
              min={-180}
              max={180}
              defaultValue={0}
              onChange={(e) => handleRotate(id, e.target.value)}
            />
            <div className="rotate-panel">
              <p className='left'>IZQUIERDA</p>
              <p style={{ padding: '5px 0' }}>{val ? `${val}°` : '0°'}</p>
              <p className='left'>DERECHA</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Rotate

import { useState } from 'react'

function Rotate({ id }) {
  const [val, setVal] = useState('')

  const handleRotate = (id, val) => {
    const el = document.getElementById(id)

    const sumVal = val++
    setVal(sumVal)
    el.style.transform = `rotate(${sumVal}deg)`
  }

  return (
    <div>
      <p>ROTAR</p>
      {id ? (
        <>
          <input
            type="range"
            min={-180}
            max={180}
            defaultValue={0}
            onChange={(e) => handleRotate(id, e.target.value)}
          />
          <p>{val ? val : '0'}</p>
        </>
      ) : (
        <p>Selecciona un imagen para rotar</p>
      )}
    </div>
  )
}

export default Rotate

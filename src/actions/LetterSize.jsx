import { useState } from 'react'

function LetterSize({ id }) {
  let [font, setFont] = useState('')

  const handleSizePlus = (id) => {
    const el = document.getElementById(id)
    let elementFontSize = window.getComputedStyle(el).fontSize
    setFont(parseInt(elementFontSize.replace('px', '')))
  }

  return (
    <div>
      <p>CAMBIAR TAMAÑO</p>
      {id ? (
        <>
          <p>-</p>
          {font ? <p>{font}</p> : <p>Modificar</p>}
          <p onClick={() => handleSizePlus(id)}>+</p>
        </>
      ) : (
        <p>Selecciona un texto para cambiar tamaño</p>
      )}
    </div>
  )
}

export default LetterSize

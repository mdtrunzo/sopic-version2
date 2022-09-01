import React from 'react'

function Color({ id }) {
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
  return (
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
  )
}

export default Color

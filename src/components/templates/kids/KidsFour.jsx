import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import '../styles/KidsFour.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function KidsFour({ handleId, arr, showError, showErrorLess, showSuccess }) {
  const [img, setImg] = useState(IMG)
  const [text, setText] = useState(arr.title)
  const [text2, setText2] = useState(arr.text)
  const [text3, setText3] = useState(arr.subtitle)

  const save = () => {
    let gridElement = document.querySelector('.pdf-export')
    drawDOM(gridElement, {
      paperSize: 'A4',
    })
      .then((group) => {
        return exportPDF(group)
      })
      .then((dataUri) => {
        const base64Data = dataUri.split(';base64,')[1]
        JSON.stringify(localStorage.setItem('pdf', base64Data))
      })
  }

  return (
    <>
      <div className="kids kids-four pt-6 pdf-export">
        <div className="kids-body pb-2">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="header-img kids-img"
              style={{
                backgroundImage: `url(${img})`,
              }}
              type="img"
              id="1"
              onClick={(e) =>
                handleId(e.target.id, e.target.style.backgroundImage)
              }
            >
              <input
                type="file"
                name="img1"
                accept="image/*"
                id="img1"
                onChange={(e) => {
                  const fileSize = e.target.files[0].size / 1024 / 1024
                  if (fileSize < 2) {
                    showErrorLess()
                    return
                  }
                  if (fileSize > 10) {
                    showError()
                    return
                  } else {
                    setImg(URL.createObjectURL(e.target.files[0]))
                    showSuccess()
                  }
                }}
              />
              <label for="img1">REEMPLAZAR IMAGEN</label>
            </div>
          </div>
        </div>
        <div className="flex w-full mx-auto p-8 pt-3 ">
          <div className="w-1/3 border-solid border-y border-r-[0.5px] border-black">
            <h3
              id="2"
              style={{ fontSize: '24px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="2"
                style={{ fontSize: '24px' }}
                className="p-0 m-0"
              />
            </h3>
          </div>
          <div className="w-2/3 border-solid border-y border-l-[0.5px] border-black">
            <p
              style={{ fontSize: '11px' }}
              id="5"
              onClick={(e) => handleId(e.target.id)}
              className="text-left"
            >
              <EditTextarea
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                id="5"
                onClick={(e) => handleId(e.target.id)}
                style={{ fontSize: '11px' }}
              />
            </p>
            <p
              style={{ fontSize: '11px' }}
              id="5"
              onClick={(e) => handleId(e.target.id)}
              className="text-left"
            >
              <EditText
                value={text3}
                onChange={(e) => setText3(e.target.value)}
                id="5"
                onClick={(e) => handleId(e.target.id)}
                style={{ fontSize: '11px' }}
              />
            </p>
          </div>
          <div></div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default KidsFour

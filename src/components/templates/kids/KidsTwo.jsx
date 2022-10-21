import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import '../styles/KidsTwo.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function KidsTwo({ handleId, arr, showError, showErrorLess, showSuccess }) {
  const [img, setImg] = useState(IMG)
  const [text, setText] = useState(arr.letra)
  const [text2, setText2] = useState(arr.title)
  const [text3, setText3] = useState(arr.subtitle)
  const [text4, setText4] = useState(arr.text)

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
      <div className="kids kids-two pt-8 pdf-export">
        <div className="kids-body">
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
        <div className="flex items-center w-full mx-auto px-8">
          <div className="w-2/5">
            <h1
              id="2"
              style={{ fontSize: '145px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="2"
                style={{ fontSize: '145px' }}
                className="p-0 m-0"
              />
            </h1>
          </div>
          <div className="w-3/5 flex flex-col px-4 pb-3">
            <h2
              id="3"
              style={{ fontSize: '30px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                id="3"
                style={{ fontSize: '30px' }}
                className="p-0 m-0"
              />
            </h2>

            <div className="border-solid border-y-2 border-[#527f89]">
              <h4
                id="4"
                style={{ fontSize: '7px' }}
                onClick={(e) => handleId(e.target.id)}
                className="px-0 py-0.5 m-0"
              >
                <EditText
                  value={text3}
                  onChange={(e) => setText3(e.target.value)}
                  id="4"
                  style={{ fontSize: '7px' }}
                  className="px-0 py-0.5 m-0 font-bold"
                />
              </h4>
            </div>
            <p
              style={{ fontSize: '8px' }}
              id="5"
              onClick={(e) => handleId(e.target.id)}
              className="text-left"
            >
              <EditTextarea
                value={text4}
                onChange={(e) => setText4(e.target.value)}
                id="5"
                onClick={(e) => handleId(e.target.id)}
                style={{ fontSize: '8px' }}
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

export default KidsTwo

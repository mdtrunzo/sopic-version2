import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/one.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function AventuraOne({ handleId, arr, showError, showErrorLess, showSuccess }) {
  const [img, setImg] = useState(IMG)

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
      <div className="flex flex-col pt-8 w-[340px] pdf-export aventura-one">
        {/* FIRST ROW */}
        <div className="w-full flex h-96 one">
          <div className="w-full">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="h-96 m-2 bg-cover flex justify-center flex-col"
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
                  className="hidden"
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
                <label
                  for="img1"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="kids-header flex justify-center items-center">
            <div className="flex flex-col text-center">
              <h1
                id="2"
                style={{ fontSize: '42px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0 pt-5"
              >
                <EditText
                  defaultValue={arr.title}
                  id="2"
                  style={{ fontSize: '42px' }}
                  className="p-0 m-0"
                />
              </h1>
              <h3
                id="3"
                style={{ fontSize: '20px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.subtitle}
                  id="3"
                  style={{ fontSize: '20px' }}
                  className="p-0 m-0"
                />
              </h3>
              <h4
                id="4"
                style={{ fontSize: '12px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 mt-1"
              >
                <EditText
                  defaultValue={arr.text}
                  id="4"
                  style={{ fontSize: '12px' }}
                  className="p-0 mt-1"
                />
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default AventuraOne

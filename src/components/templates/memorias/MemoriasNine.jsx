import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/nine.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function MemoriasNine({
  handleId,
  arr,
  showError,
  showErrorLess,
  showSuccess,
}) {
  const [img, setImg] = useState(IMG)
  const [img2, setImg2] = useState(IMG)
  const [img3, setImg3] = useState(IMG)
  const [img4, setImg4] = useState(IMG)

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
      <div className="flex flex-col w-full pdf-export memorias-nine pt-10">
        {/* FIRST ROW */}
        <div className="flex justify-center one">
          <div className="flex flex-col items-left mt-2">
            <h1
              id="13"
              style={{ fontSize: '20px' }}
              onClick={(e) => handleId(e.target.id)}
            >
              <EditText
                defaultValue={arr.title}
                id="13"
                style={{ fontSize: '20px' }}
              />
            </h1>
          </div>
        </div>
        {/* SECOND ROW */}
        <div className="flex justify-center one">
          <div style={{ overflow: 'hidden' }}>
            <div className="flex flex-col">
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="w-[160px] h-[160px] m-1 bg-cover flex justify-center mr-4 flex-col"
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
              <h3
                id="21"
                style={{ fontSize: '10px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0 tracking-[2px]"
              >
                <EditText
                  defaultValue={arr.text1}
                  id="21"
                  style={{ fontSize: '10px' }}
                  className="p-0 m-0 ml-2"
                />
              </h3>
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div className="flex flex-col">
              <div
                style={{ backgroundImage: `url(${img2})` }}
                className="w-[160px] h-[160px] m-1 bg-cover flex justify-center mr-4 flex-col"
                type="img"
                id="2"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img2"
                  accept="image/*"
                  id="img2"
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
                      setImg2(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img2"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
              <h3
                id="25"
                style={{ fontSize: '10px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0 tracking-[2px]"
              >
                <EditText
                  defaultValue={arr.text2}
                  id="25"
                  style={{ fontSize: '10px' }}
                  className="p-0 m-0 ml-2"
                />
              </h3>
            </div>
          </div>
        </div>
        {/* THIRD ROW */}
        <div className="flex justify-center mt-1 one">
          <div style={{ overflow: 'hidden' }}>
            <div className="flex flex-col">
              <div
                style={{ backgroundImage: `url(${img3})` }}
                className="w-[160px] h-[160px] m-1 bg-cover flex justify-center mr-4 flex-col"
                type="img"
                id="3"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img3"
                  accept="image/*"
                  id="img3"
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
                      setImg3(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img3"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
              <h3
                id="32"
                style={{ fontSize: '10px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0 tracking-[2px]"
              >
                <EditText
                  defaultValue={arr.text3}
                  id="32"
                  style={{ fontSize: '10px' }}
                  className="p-0 m-0 ml-2"
                />
              </h3>
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div className="flex flex-col">
              <div
                style={{ backgroundImage: `url(${img4})` }}
                className="w-[160px] h-[160px] m-1 bg-cover flex justify-center mr-4 flex-col"
                type="img"
                id="4"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img4"
                  accept="image/*"
                  id="img4"
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
                      setImg4(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img4"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
              <h3
                id="45"
                style={{ fontSize: '10px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0 tracking-[2px]"
              >
                <EditText
                  defaultValue={arr.text4}
                  id="45"
                  style={{ fontSize: '10px' }}
                  className="p-0 m-0 ml-2"
                />
              </h3>
            </div>
          </div>
        </div>
        {/* FOURTH ROW */}
        <div className="flex justify-center one">
          <div className="h-[100px] mr-2">
            <div className="flex flex-col items-left mt-4">
              <h2
                id="67"
                style={{ fontSize: '30px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0 "
              >
                <EditText
                  defaultValue={`${arr.subtitle}.`}
                  id="67"
                  style={{ fontSize: '30px' }}
                  className="p-0 m-0"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default MemoriasNine

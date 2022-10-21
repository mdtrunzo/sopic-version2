import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/three.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function CollageThree({
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
    drawDOM(gridElement)
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
      <div className="flex flex-col pt-6 w-[340px] pdf-export collage-three">
        <div className="kids-header flex flex-col">
          <div className="flex flex-col m-2">
            <h1
              id="6"
              style={{ fontSize: '28px' }}
              onClick={(e) => handleId(e.target.id)}
              className="text-sm"
            >
              <EditText
                defaultValue={arr.title}
                id="6"
                style={{ fontSize: '28px' }}
                className=""
              />
            </h1>
          </div>
          <div className="bg-black h-0.5 w-full">
            <hr />
          </div>
        </div>
        {/* FIRST ROW */}
        <div className="w-full flex h-48 one">
          <div className="w-2/5">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="h-[184px]  m-2 mr-1 bg-cover flex justify-center flex-col"
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
          <div className="w-3/5">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img2})` }}
                className="h-[184px] m-2 ml-1 bg-cover flex justify-center flex-col"
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
            </div>
          </div>
        </div>
        {/* SECOND ROW */}
        <div className="w-full flex h-72 one">
          <div className="w-3/5">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img3})` }}
                className="h-72  m-2 mr-1 bg-cover flex justify-center flex-col"
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
            </div>
          </div>
          <div className="w-2/5 flex flex-col">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img4})` }}
                className="h-56 m-2 ml-1 bg-cover flex justify-center flex-col"
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
            </div>
            <div className="kids-header flex justify-end items-center ext">
              <div className="flex flex-col w-32 px-2 mt-2">
                <p
                  id="5"
                  style={{ fontSize: '10px' }}
                  onClick={(e) => handleId(e.target.id)}
                  className="p-0 m-0 text-sm text-right"
                >
                  <EditTextarea
                    defaultValue={arr.subtitle}
                    id="5"
                    style={{ fontSize: '10px' }}
                    className="p-0 m-0"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default CollageThree

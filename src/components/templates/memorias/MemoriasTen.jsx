import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/ten.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function MemoriasTen({ handleId, arr, showError, showErrorLess, showSuccess }) {
  const [img, setImg] = useState(IMG)
  const [img2, setImg2] = useState(IMG)
  const [img3, setImg3] = useState(IMG)
  const [img4, setImg4] = useState(IMG)
  const [img5, setImg5] = useState(IMG)
  const [img6, setImg6] = useState(IMG)
  const [img7, setImg7] = useState(IMG)
  const [img8, setImg8] = useState(IMG)
  const [img9, setImg9] = useState(IMG)

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
      <div className="flex flex-col w-full pdf-export pt-10 memorias-ten">
        {/* ONE ROW */}
        <div className="flex justify-center mb-2 one">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-[100px] h-[100px] m-1 bg-cover flex justify-center mr-4 flex-col"
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
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img2})` }}
              className="w-[100px] h-[100px] m-1 bg-cover flex justify-center mr-4 flex-col"
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
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img3})` }}
              className="w-[100px] h-[100px] m-1 bg-cover flex justify-center mr-4 flex-col"
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
        {/* TWO ROW */}
        <div className="flex w-full justify-center ">
          <div className="flex flex-col">
            <div style={{ overflow: 'hidden' }} className="mb-2 one">
              <div
                style={{ backgroundImage: `url(${img4})` }}
                className="w-[100px] h-[100px] m-1 mr-4 bg-cover flex justify-center flex-col"
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
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img5})` }}
                className="w-[100px] h-[100px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="5"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img5"
                  accept="image/*"
                  id="img5"
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
                      setImg5(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img5"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div style={{ overflow: 'hidden' }} className='one'>
              <div
                style={{ backgroundImage: `url(${img6})` }}
                className="w-[220px] h-[216px] mr-4 m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="6"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img6"
                  accept="image/*"
                  id="img6"
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
                      setImg6(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img6"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* THREE ROW */}
        <div className="flex justify-center mt-2 one">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img7})` }}
              className="w-[100px] h-[100px] m-1 bg-cover flex justify-center mr-4 flex-col"
              type="img"
              id="7"
              onClick={(e) =>
                handleId(e.target.id, e.target.style.backgroundImage)
              }
            >
              <input
                type="file"
                name="img7"
                accept="image/*"
                id="img7"
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
                    setImg7(URL.createObjectURL(e.target.files[0]))
                    showSuccess()
                  }
                }}
              />
              <label
                for="img7"
                className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
              >
                REEMPLAZAR IMAGEN
              </label>
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img8})` }}
              className="w-[100px] h-[100px] m-1 bg-cover flex justify-center mr-4 flex-col"
              type="img"
              id="8"
              onClick={(e) =>
                handleId(e.target.id, e.target.style.backgroundImage)
              }
            >
              <input
                type="file"
                name="img8"
                accept="image/*"
                id="img8"
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
                    setImg8(URL.createObjectURL(e.target.files[0]))
                    showSuccess()
                  }
                }}
              />
              <label
                for="img8"
                className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
              >
                REEMPLAZAR IMAGEN
              </label>
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img9})` }}
              className="w-[100px] h-[100px] m-1 bg-cover flex justify-center mr-4 flex-col"
              type="img"
              id="9"
              onClick={(e) =>
                handleId(e.target.id, e.target.style.backgroundImage)
              }
            >
              <input
                type="file"
                name="img9"
                accept="image/*"
                id="img9"
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
                    setImg9(URL.createObjectURL(e.target.files[0]))
                    showSuccess()
                  }
                }}
              />
              <label
                for="img9"
                className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
              >
                REEMPLAZAR IMAGEN
              </label>
            </div>
          </div>
        </div>
        {/* FOURTH ROW */}
        <div className="flex justify-between one">
          <div className="flex flex-col items-left mt-4 ml-2">
            <h2
              id="67"
              style={{ fontSize: '12px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                defaultValue={arr.text1}
                id="67"
                style={{ fontSize: '12px' }}
                className="p-0 m-0"
              />
            </h2>
            <h2
              id="68"
              style={{ fontSize: '12px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 "
            >
              <EditText
                defaultValue={arr.text2}
                id="68"
                style={{ fontSize: '12px' }}
                className="p-0 m-0"
              />
            </h2>
          </div>
          <div className="flex flex-col justify-end mr-4">
            <h3
              id="69"
              style={{ fontSize: '30px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                defaultValue={arr.title}
                id="69"
                style={{ fontSize: '30px' }}
                className="p-0 m-0"
              />
            </h3>
            <h2
              id="70"
              style={{ fontSize: '12px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 text-right"
            >
              <EditText
                defaultValue={arr.subtitle}
                id="70"
                style={{ fontSize: '12px' }}
                className="p-0 m-0"
              />
            </h2>
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default MemoriasTen

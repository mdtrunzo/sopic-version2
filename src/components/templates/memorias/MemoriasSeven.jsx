import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/seven.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function MemoriasSeven({
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
  const [img5, setImg5] = useState(IMG)
  const [img6, setImg6] = useState(IMG)
  const [img7, setImg7] = useState(IMG)
  const [img8, setImg8] = useState(IMG)

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
      <div className="flex flex-col w-full pdf-export memorias-seven pt-10">
        {/* FIRST ROW */}
        <div className="flex one pb-3">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
              type="img"
              id="2"
              onClick={(e) =>
                handleId(e.target.id, e.target.style.backgroundImage)
              }
            >
              <input
                type="file"
                name="img"
                accept="image/*"
                id="img"
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
                for="img"
                className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
              >
                REEMPLAZAR IMAGEN
              </label>
            </div>
          </div>
          <div className="w-[112px] h-[100px] m-1 flex justify-center items-center flex-col">
            <h1
              id="14"
              style={{ fontSize: '50px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 tracking-[2px] pt-2"
            >
              <EditText
                defaultValue={arr.letra1}
                id="14"
                style={{ fontSize: '50px' }}
                className="p-0 m-0"
              />
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img2})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
        {/* SECOND ROW */}
        <div className="flex one pb-3">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img3})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
          <div className="w-[112px] h-[100px] m-1 flex justify-center items-center flex-col">
            <h1
              id="15"
              style={{ fontSize: '50px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 tracking-[2px] pt-2"
            >
              <EditText
                defaultValue={arr.letra2}
                id="15"
                style={{ fontSize: '50px' }}
                className="p-0 m-0"
              />
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img4})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
        </div>
        {/* THIRD ROW */}
        <div className="flex one pb-3">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img5})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
          <div className="w-[112px] h-[100px] m-1 flex justify-center items-center flex-col">
            <h1
              id="16"
              style={{ fontSize: '50px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 tracking-[2px] pt-2"
            >
              <EditText
                defaultValue={arr.letra3}
                id="16"
                style={{ fontSize: '50px' }}
                className="p-0 m-0"
              />
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img6})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
        {/* FOURTH ROW */}
        <div className="flex one pb-3">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img7})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
          <div className="w-[112px] h-[100px] m-1 flex justify-center items-center flex-col">
            <h1
              id="17"
              style={{ fontSize: '60px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 tracking-[2px] pt-2"
            >
              <EditText
                defaultValue={arr.letra4}
                id="17"
                style={{ fontSize: '60px' }}
                className="p-0 m-0"
              />
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img8})` }}
              className="w-[112px] h-[100px] m-1 bg-cover flex justify-center flex-col"
              type="img"
              id="7"
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
        </div>
        {/* FIFTH ROW */}
        <div className="flex justify-center one">
          <div className="flex justify-center space-x-4 mr-2">
            <h3
              id="20"
              style={{ fontSize: '10px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 tracking-[2px] pt-2"
            >
              <EditText
                defaultValue={arr.title}
                id="20"
                style={{ fontSize: '10px' }}
                className="p-0 m-0"
              />
            </h3>
            <span>|</span>
            <h3
              id="21"
              style={{ fontSize: '10px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 tracking-[2px] pt-2"
            >
              <EditText
                defaultValue={arr.subtitle}
                id="21"
                style={{ fontSize: '10px' }}
                className="p-0 m-0"
              />
            </h3>
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default MemoriasSeven

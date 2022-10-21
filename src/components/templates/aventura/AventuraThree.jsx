import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/three.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'

function AventuraThree({
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
      <div className="flex flex-col pt-6 w-full pdf-export aventura-three">
        {/* FIRST ROW */}
        <div className="w-full flex h-28 one">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-[100px] h-[100px] m-2 bg-cover flex justify-center flex-col"
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
              className="w-[100px] h-[100px] m-2 bg-cover flex justify-center flex-col"
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
              className="w-[100px] h-[100px] m-2 bg-cover flex justify-center flex-col"
              type="img"
              id="2"
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
        {/* SECOND ROW */}
        <div className="w-full flex one">
          <div style={{ overflow: 'hidden' }} className="w-full">
            <div
              style={{ backgroundImage: `url(${img4})` }}
              className="h-[208px] m-2 bg-cover flex justify-center flex-col"
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
        <div className="w-full flex h-28 one">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img7})` }}
              className="w-[100px] h-[100px] m-2 bg-cover flex justify-center flex-col"
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
              className="w-[100px] h-[100px] m-2 bg-cover flex justify-center flex-col"
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
              className="w-[100px] h-[100px] m-2 bg-cover flex justify-center flex-col"
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
        <div>
          <div className="flex justify-between items-center mx-2 ext pt-4">
            <div className="flex flex-col">
              <h2
                id="13"
                style={{ fontSize: '26px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.title}
                  id="14"
                  style={{ fontSize: '26px' }}
                  className="p-0 m-0"
                />
              </h2>
              <h3
                id="14"
                style={{ fontSize: '12px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.subtitle}
                  id="14"
                  style={{ fontSize: '12px' }}
                  className="p-0 m-0"
                />
              </h3>
            </div>
            <div className="border-solid border-2 rounded-lg p-0.5 mt-2">
              <FlightTakeoffIcon />
            </div>
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default AventuraThree

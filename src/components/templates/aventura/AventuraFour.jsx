import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/four.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function AventuraFour({
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
      <div className="flex flex-col pt-6 w-full pdf-export aventura-four">
        {/* FIRST ROW */}
        <div className="w-full flex h-[400px] ">
          <div className="flex flex-col w-1/2 one">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="w-[170px] h-[150px] m-1 bg-cover flex justify-center flex-col"
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
                className="w-[170px] h-[250px] m-1 mt-2 bg-cover flex justify-center flex-col"
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
          <div className="flex flex-col w-1/2 h-[400px] one">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img3})` }}
                className="w-[170px] h-[330px] m-1 bg-cover flex justify-center flex-col"
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
            <div className="flex justify-around pt-3">
              <h2
                id="13"
                style={{ fontSize: '10px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0 w-1/2"
              >
                <EditTextarea
                  defaultValue={arr.title}
                  id="14"
                  style={{ fontSize: '10px' }}
                  className="p-0 m-0"
                />
              </h2>
              <FavoriteBorderIcon className='w-1/2'/>
            </div>
          </div>
        </div>
        {/* SECOND ROW */}
        <div className="w-full flex one">
          <div style={{ overflow: 'hidden' }} className="w-1/2">
            <div
              style={{ backgroundImage: `url(${img4})` }}
              className="h-[120px] mt-2 m-1 bg-cover flex justify-center flex-col"
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
          <div style={{ overflow: 'hidden' }} className="w-1/2">
            <div
              style={{ backgroundImage: `url(${img5})` }}
              className="h-[120px] mt-2 m-1  bg-cover flex justify-center flex-col"
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
        {/* <div>
          <div className="flex justify-between items-center mx-2 ext pt-4">
            <div className="flex flex-col">
              <h2
                id="13"
                style={{ fontSize: '26px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue="VIAJAR"
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
                  defaultValue="ES ENAMORARSE A CADA PASO."
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
        </div> */}
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default AventuraFour

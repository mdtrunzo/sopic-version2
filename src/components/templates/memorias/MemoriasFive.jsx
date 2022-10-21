import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/five.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function MemoriasFive({
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
      <div className="flex flex-col pt-6 w-full pdf-export memorias-five">
        {/* FIRST ROW */}
        <div className="flex one">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-[170px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
              className="w-[170px] h-[100px] m-1 bg-cover flex justify-center flex-col"
              type="img"
              id="1"
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
        <div className="w-full flex one">
          <div style={{ overflow: 'hidden' }} className="w-full">
            <div
              style={{ backgroundImage: `url(${img3})` }}
              className="h-[210px] m-1 bg-cover flex justify-center flex-col"
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
        {/* THIRD ROW */}
        <div className="flex one">
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img4})` }}
              className="w-[170px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img5})` }}
              className="w-[170px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
        {/* FOURTH ROW */}
        <div className="flex one">
          <div className="w-[170px] h-[100px] mr-2">
            <div className="flex flex-col items-left mt-2">
              <h3
                id="7"
                style={{ fontSize: '12px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.title}
                  id="7"
                  style={{ fontSize: '12px' }}
                  className="p-0 m-0"
                />
              </h3>
              <h2
                id="8"
                style={{ fontSize: '20px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text1}
                  id="8"
                  style={{ fontSize: '20px' }}
                  className="p-0 m-0"
                />
              </h2>
              <h2
                id="9"
                style={{ fontSize: '20px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text2}
                  id="9"
                  style={{ fontSize: '20px' }}
                  className="p-0 m-0"
                />
              </h2>
              <h3
                id="10"
                style={{ fontSize: '12px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text3}
                  id="10"
                  style={{ fontSize: '12px' }}
                  className="p-0 m-0"
                />
              </h3>
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{ backgroundImage: `url(${img6})` }}
              className="w-[170px] h-[100px] m-1 bg-cover flex justify-center flex-col"
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
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default MemoriasFive

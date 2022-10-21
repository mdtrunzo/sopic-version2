import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/two.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'

function MemoriasTwo({ handleId, arr, showError, showErrorLess, showSuccess }) {
  const [img, setImg] = useState(IMG)
  const [img2, setImg2] = useState(IMG)
  const [img3, setImg3] = useState(IMG)
  const [img4, setImg4] = useState(IMG)
  const [img5, setImg5] = useState(IMG)
  const [img6, setImg6] = useState(IMG)
  const [img7, setImg7] = useState(IMG)
  const [img8, setImg8] = useState(IMG)
  const [img9, setImg9] = useState(IMG)
  const [img10, setImg10] = useState(IMG)
  const [img11, setImg11] = useState(IMG)
  const [img12, setImg12] = useState(IMG)
  const [img13, setImg13] = useState(IMG)
  const [img14, setImg14] = useState(IMG)
  const [img15, setImg15] = useState(IMG)
  const [img16, setImg16] = useState(IMG)
  const [img17, setImg17] = useState(IMG)
  const [img18, setImg18] = useState(IMG)

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
      <div className="flex flex-col pt-6 w-full pdf-export memorias-two">
        {/* FIRST ROW */}
        <div className="w-full flex flex-col">
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img2})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img3})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img4})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img6})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img7})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img8})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img9})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
        </div>
        {/* TEXT ROW */}

        <div className="flex ext">
          <div className="flex justify-center space-x-3 items-center mx-2">
            <h1
              id="10"
              style={{ fontSize: '50px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                defaultValue={arr.title}
                id="10"
                style={{ fontSize: '50px' }}
                className="p-0 m-0"
              />
            </h1>
          </div>
          <div className="flex flex-col justify-center space-x-3 items-left">
            <h3
              id="11"
              style={{ fontSize: '10px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 pl-3"
            >
              <EditText
                defaultValue={arr.text1}
                id="11"
                style={{ fontSize: '10px' }}
                className="p-0 m-0"
              />
            </h3>
            <h3
              id="12"
              style={{ fontSize: '10px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                defaultValue={arr.text2}
                id="12"
                style={{ fontSize: '10px' }}
                className="p-0 m-0"
              />
            </h3>
            <h4
              id="13"
              style={{ fontSize: '10px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                defaultValue={arr.text3}
                id="13"
                style={{ fontSize: '10px' }}
                className="p-0 m-0"
              />
            </h4>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="w-full flex flex-col">
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img10})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="10"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img10"
                  accept="image/*"
                  id="img10"
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
                      setImg10(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img10"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img11})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="11"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img11"
                  accept="image/*"
                  id="img11"
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
                      setImg11(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img11"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img12})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="12"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img12"
                  accept="image/*"
                  id="img12"
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
                      setImg12(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img12"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img13})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="13"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img13"
                  accept="image/*"
                  id="img13"
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
                      setImg13(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img13"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img14})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="14"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img14"
                  accept="image/*"
                  id="img14"
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
                      setImg14(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img14"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img15})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="15"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img15"
                  accept="image/*"
                  id="img15"
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
                      setImg15(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img15"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img16})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="16"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img16"
                  accept="image/*"
                  id="img16"
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
                      setImg16(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img16"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img17})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="17"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img17"
                  accept="image/*"
                  id="img17"
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
                      setImg17(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img17"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img18})` }}
                className="w-[100px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="18"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img18"
                  accept="image/*"
                  id="img18"
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
                      setImg18(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img18"
                  className="hidden text-[7px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default MemoriasTwo

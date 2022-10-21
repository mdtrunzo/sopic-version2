import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/three.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'
import FavoriteIcon from '@mui/icons-material/Favorite'

function MemoriasThree({
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
  const [img19, setImg19] = useState(IMG)
  const [img20, setImg20] = useState(IMG)
  const [img21, setImg21] = useState(IMG)
  const [img22, setImg22] = useState(IMG)
  const [img23, setImg23] = useState(IMG)
  const [img24, setImg24] = useState(IMG)
  const [img25, setImg25] = useState(IMG)
  const [img26, setImg26] = useState(IMG)
  const [img27, setImg27] = useState(IMG)
  const [img28, setImg28] = useState(IMG)

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
      <div className="flex flex-col pt-6 w-full pdf-export memorias-three">
        <div className="w-full flex flex-col ">
          {/* FIRST ROW */}
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center m-1">
              <h3
                id="100"
                style={{ fontSize: '14px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text1}
                  id="100"
                  style={{ fontSize: '14px' }}
                  className="p-0 m-0"
                />
              </h3>
              <h3
                id="101"
                style={{ fontSize: '14px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text2}
                  id="101"
                  style={{ fontSize: '14px' }}
                  className="p-0 m-0"
                />
              </h3>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img2})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img3})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center m-1">
              <h3
                id="103"
                style={{ fontSize: '18px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text3}
                  id="103"
                  style={{ fontSize: '18px' }}
                  className="p-0 m-0"
                />
              </h3>
            </div>
          </div>
          {/* SECOND ROW */}
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img4})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img5})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img6})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img7})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img8})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
          {/* THIRD ROW */}
          <div className="flex w-full">
            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center m-1">
              <h2
                id="104"
                style={{ fontSize: '24px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text4}
                  id="104"
                  style={{ fontSize: '24px' }}
                  className="p-0 m-0"
                />
              </h2>
              <h2
                id="105"
                style={{ fontSize: '24px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text5}
                  id="105"
                  style={{ fontSize: '24px' }}
                  className="p-0 m-0"
                />
              </h2>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img9})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  for="img2"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img10})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img11})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img12})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
          {/* FOURTH ROW */}
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img13})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img14})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center m-1 black-heart">
              <FavoriteIcon />
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img15})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img16})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
          {/* FIFHT ROW */}
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img17})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img18})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
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
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img19})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="19"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img19"
                  accept="image/*"
                  id="img19"
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
                      setImg19(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img19"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img20})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="20"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img20"
                  accept="image/*"
                  id="img20"
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
                      setImg20(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img20"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center m-1">
              <h2
                id="109"
                style={{ fontSize: '24px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text6}
                  id="109"
                  style={{ fontSize: '24px' }}
                  className="p-0 m-0"
                />
              </h2>
              <h2
                id="110"
                style={{ fontSize: '24px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text7}
                  id="110"
                  style={{ fontSize: '24px' }}
                  className="p-0 m-0"
                />
              </h2>
            </div>
          </div>
          {/* SIX ROW */}
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img21})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="21"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img21"
                  accept="image/*"
                  id="img21"
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
                      setImg21(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img21"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center m-1 bg-black white-heart">
              <FavoriteIcon />
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img22})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="22"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img22"
                  accept="image/*"
                  id="img22"
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
                      setImg22(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img22"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img23})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="23"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img23"
                  accept="image/*"
                  id="img23"
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
                      setImg23(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img23"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img24})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="24"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img24"
                  accept="image/*"
                  id="img24"
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
                      setImg24(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img24"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
          </div>
          {/* SEVEN ROW */}
          <div className="flex w-full">
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img25})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="25"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img25"
                  accept="image/*"
                  id="img25"
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
                      setImg25(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img25"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img26})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="26"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img26"
                  accept="image/*"
                  id="img26"
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
                      setImg26(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img26"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img27})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="27"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img27"
                  accept="image/*"
                  id="img27"
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
                      setImg27(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img27"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
                >
                  REEMPLAZAR IMAGEN
                </label>
              </div>
            </div>
            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center m-1">
              <h3
                id="112"
                style={{ fontSize: '30px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 m-0"
              >
                <EditText
                  defaultValue={arr.text8}
                  id="112"
                  style={{ fontSize: '30px' }}
                  className="p-0 m-0"
                />
              </h3>
            </div>
            <div style={{ overflow: 'hidden' }} className="one">
              <div
                style={{ backgroundImage: `url(${img28})` }}
                className="w-[70px] h-[70px] m-1 bg-cover flex justify-center flex-col"
                type="img"
                id="28"
                onClick={(e) =>
                  handleId(e.target.id, e.target.style.backgroundImage)
                }
              >
                <input
                  type="file"
                  name="img28"
                  accept="image/*"
                  id="img28"
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
                      setImg28(URL.createObjectURL(e.target.files[0]))
                      showSuccess()
                    }
                  }}
                />
                <label
                  for="img28"
                  className="hidden text-[4px] text-center bg-buttonSecondary p-1 mx-1 rounded cursor-pointer"
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

export default MemoriasThree

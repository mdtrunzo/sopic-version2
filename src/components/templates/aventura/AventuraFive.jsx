import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import './styles/five.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import SendIcon from '@mui/icons-material/Send'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import AvatarSopic from '../../../assets/avatar-sopic.jpg'
import FileUploadIcon from '@mui/icons-material/FileUpload'

function AventuraFive({
  handleId,
  arr,
  showError,
  showErrorLess,
  showSuccess,
}) {
  const [img, setImg] = useState(IMG)
  const [img2, setImg2] = useState(AvatarSopic)

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
      <div className="flex flex-col pt-8 w-[340px] pdf-export aventura-five">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img2})` }}
                className="h-[40px] w-[40px] rounded-full m-2 bg-cover flex justify-center flex-col"
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
                  className="hidden text-center bg-buttonSecondary mx-3 rounded cursor-pointer"
                >
                  <FileUploadIcon />
                </label>
              </div>
            </div>
            <h2
              id="2"
              style={{ fontSize: '18px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                defaultValue={arr.title}
                id="2"
                style={{ fontSize: '18px' }}
                className="p-0 m-0"
              />
            </h2>
          </div>
          <MoreHorizIcon className="mr-2 text-black" />
        </div>
        {/* FIRST ROW */}
        <div className="w-full flex  one">
          <div className="w-full">
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="h-[370px] m-2 bg-cover flex justify-center flex-col"
                type="img"
                id="3"
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
        {/* Foter */}
        <div>
          <div className="">
            <div className="flex justify-between mx-2">
              <div className="flex space-x-2">
                <FavoriteIcon className="fav" />
                <ChatBubbleOutlineIcon className="text-black" />
                <SendIcon className="text-black send" />
              </div>
              <div>
                <BookmarkBorderIcon className="text-black" />
              </div>
            </div>
            <div className="flex flex-col text-center">
              <h3
                id="4"
                style={{ fontSize: '10px' }}
                onClick={(e) => handleId(e.target.id)}
                className="p-0 pt-2 m-0"
              >
                <EditText
                  defaultValue={arr.subtitle}
                  id="4"
                  style={{ fontSize: '10px' }}
                  className="p-0 m-0"
                />
              </h3>
              <div className="flex space-x-2 ml-5">
                <h4
                  id="5"
                  style={{ fontSize: '10px' }}
                  onClick={(e) => handleId(e.target.id)}
                  className="p-0 pt-2 m-0"
                >
                  <EditText
                    defaultValue={arr.text1}
                    id="5"
                    style={{ fontSize: '10px' }}
                    className="p-0 m-0"
                  />
                </h4>
                <h4
                  id="6"
                  style={{ fontSize: '10px' }}
                  onClick={(e) => handleId(e.target.id)}
                  className="p-0 pt-2 m-0"
                >
                  <EditText
                    defaultValue={arr.text2}
                    id="6"
                    style={{ fontSize: '10px' }}
                    className="p-0 m-0"
                  />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default AventuraFive

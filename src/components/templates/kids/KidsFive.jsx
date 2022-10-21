import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import '../styles/KidsFive.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import ShuffleIcon from '@mui/icons-material/Shuffle'

function KidsFive({ handleId, arr, showError, showErrorLess, showSuccess }) {
  const [img, setImg] = useState(IMG)
  const [text, setText] = useState(arr.title)
  const [text2, setText2] = useState(arr.subtitle)

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
      <div className="kids kids-five pdf-export">
        <div className="kids-header flex justify-between items-center">
          <KeyboardArrowDownIcon />
          <div>
            <h3
              id="1"
              style={{ fontSize: '16px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0 pt-5"
            >
              <EditText
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="1"
                style={{ fontSize: '16px' }}
                className="p-0 m-0"
              />
            </h3>
            <h4
              id="2"
              style={{ fontSize: '16px' }}
              onClick={(e) => handleId(e.target.id)}
              className="p-0 m-0"
            >
              <EditText
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                id="2"
                style={{ fontSize: '16px' }}
                className="p-0 m-0"
              />
            </h4>
          </div>
          <MoreVertIcon />
        </div>
        <div className="kids-body pt-3">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="header-img kids-img"
              style={{
                backgroundImage: `url(${img})`,
              }}
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
              <label for="img1">REEMPLAZAR IMAGEN</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="border-solid border border-[#9E9E9E] mx-10 barra-sound"></div>
          <div className="ext flex items-center justify-evenly px-3 mt-3">
            <FavoriteIcon />
            <SkipPreviousIcon />
            <PauseCircleOutlineIcon />
            <SkipNextIcon />
            <ShuffleIcon />
          </div>
        </div>
      </div>
      {/* <p onClick={save}>GUARDAR</p> */}
    </>
  )
}

export default KidsFive

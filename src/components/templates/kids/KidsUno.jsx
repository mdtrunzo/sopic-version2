import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import '../styles/KidsUno.css'
import { drawDOM, exportPDF } from '@progress/kendo-drawing'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import StraightenIcon from '@mui/icons-material/Straighten'
import ScaleIcon from '@mui/icons-material/Scale'
import { createPlantilla } from '../../../features/plantillas/plantillasSlice'
import { useDispatch } from 'react-redux'

function KidsUno({ handleId, arr, showError, showErrorLess, showSuccess }) {
  const [img, setImg] = useState(IMG)
  const [text, setText] = useState(arr.subtitle)
  const [text2, setText2] = useState(arr.title)
  const [text3, setText3] = useState(arr.text1)
  const [text4, setText4] = useState(arr.text2)
  const [text5, setText5] = useState(arr.text3)
  const [text6, setText6] = useState(arr.text4)
  const [text7, setText7] = useState(arr.text5)
  const [savePlantilla, setSavePlantilla] = useState('')

  const dispatch = useDispatch()

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
        setSavePlantilla(base64Data)
      })
  }

  const handleSavePlantilla = () => {
    const data = {
      documento: savePlantilla,
      email: 'matiasdanieltrunzo@gmail.com',
    }
    dispatch(createPlantilla(data))
  }



  return (
    <>
      <div className="kids kids-uno pdf-export pt-4">
        <div className="kids-header">
          <h3
            id="1"
            style={{ fontSize: '16px' }}
            onClick={(e) => handleId(e.target.id)}
          >
            <EditText
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="1"
              style={{ fontSize: '16px' }}
            />
          </h3>

          <h1
            id="2"
            style={{ fontSize: '70px' }}
            onClick={(e) => handleId(e.target.id)}
            className="m-0"
          >
            <EditText
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              id="2"
              style={{ fontSize: '70px' }}
            />
          </h1>
        </div>
        <div className="kids-body">
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
        <div className="extras kids-footer pt-4">
          <div className="flex items-center">
            <FavoriteIcon />
            <p
              style={{ fontSize: '8px' }}
              id={4}
              onClick={(e) => handleId(e.target.id)}
              className="pt-1"
            >
              <EditText
                value={text3}
                onChange={(e) => setText3(e.target.value)}
                id={4}
                style={{ fontSize: '8px' }}
              />
            </p>
          </div>
          <div className="flex items-center">
            <CalendarMonthIcon />
            <p
              style={{ fontSize: '8px' }}
              id={5}
              onClick={(e) => handleId(e.target.id)}
              className="pt-1"
            >
              <EditText
                value={text4}
                onChange={(e) => setText4(e.target.value)}
                id={5}
                style={{ fontSize: '8px' }}
              />
            </p>
          </div>
          <div className="flex items-center">
            <AccessAlarmIcon />
            <p
              style={{ fontSize: '8px' }}
              id={6}
              onClick={(e) => handleId(e.target.id)}
              className="pt-1"
            >
              <EditText
                value={text5}
                onChange={(e) => setText5(e.target.value)}
                id={6}
                style={{ fontSize: '8px' }}
              />
            </p>
          </div>
          <div className="flex items-center">
            <StraightenIcon />
            <p
              style={{ fontSize: '8px' }}
              id={7}
              onClick={(e) => handleId(e.target.id)}
              className="pt-1"
            >
              <EditText
                value={text6}
                onChange={(e) => setText6(e.target.value)}
                id={7}
                style={{ fontSize: '8px' }}
              />
            </p>
          </div>
          <div className="flex items-center">
            <ScaleIcon />
            <p
              style={{ fontSize: '8px' }}
              id={8}
              onClick={(e) => handleId(e.target.id)}
              className="pt-1"
            >
              <EditText
                value={text7}
                onChange={(e) => setText7(e.target.value)}
                id={8}
                style={{ fontSize: '8px' }}
              />
            </p>
          </div>
        </div>
      </div>
      <p onClick={save}>GUARDAR</p>
      <p onClick={handleSavePlantilla}>Save plantilla</p>
    </>
  )
}

export default KidsUno

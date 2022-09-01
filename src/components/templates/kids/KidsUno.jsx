import { useState } from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import IMG from '../../../assets/fondo.jpg'
import '../styles/KidsUno.css'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
// import StraightenIcon from '@mui/icons-material/Straighten'
// import ScaleIcon from '@mui/icons-material/Scale'

function KidsUno({ handleId, item, showError, showErrorLess, showSuccess }) {
  //   const icons = [
  //     <FavoriteIcon />,
  //     <CalendarMonthIcon />,
  //     <AccessAlarmIcon />,
  //     <StraightenIcon />,
  //     <ScaleIcon />,
  //   ]
  const [img, setImg] = useState(IMG)
  return (
    <div className="kids">
      <div className="kids-header">
        <h3
          id="1"
          style={{ fontSize: '22px' }}
          onClick={(e) => handleId(e.target.id)}
        >
          <EditText
            defaultValue={item.subtitle}
            id="1"
            style={{ fontSize: '22px' }}
          />
        </h3>

        <h1
          id="2"
          style={{ fontSize: '30px' }}
          onClick={(e) => handleId(e.target.id)}
        >
          <EditText
            defaultValue={item.title}
            id="2"
            style={{ fontSize: '30px' }}
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
            onClick={(e) => handleId(e.target.id)}
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
      <div className="extras kids-footer">
        {item.extras.map((item, index) => {
          return (
            <p
              style={{ fontSize: '12px' }}
              key={index}
              id={index + 100}
              onClick={(e) => handleId(e.target.id)}
            >
              <EditText
                defaultValue={item.text}
                id={index + 100}
                style={{ fontSize: '12px' }}
              />
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default KidsUno

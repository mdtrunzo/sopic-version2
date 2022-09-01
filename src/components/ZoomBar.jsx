import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'

function ZoomBar() {
  return (
    <div className="zoom-bar shadow-md">
      <div className="zoom-range">
        <RemoveIcon className="zoom-icon" />
        {/* <input type="range" name="" id="" /> */}
        <p>ZOOM</p>
        <AddIcon className="zoom-icon" />
      </div>
    </div>
  )
}

export default ZoomBar

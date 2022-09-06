import CollectionsIcon from '@mui/icons-material/Collections'
import { toast } from 'react-toastify'

function Replace({ id, type }) {

  const handleClick = () => {
    toast('Toca la imagen que deseas reemplazar 💪', {
      autoClose:1000,
      style: {
        fontSize:'14px'
      }
    })
  }

  return (
    <div className="iconos-menu" onClick={handleClick}>
      <CollectionsIcon />
      <li>REEMPLAZAR IMAGEN</li>
    </div>
  )
}

export default Replace

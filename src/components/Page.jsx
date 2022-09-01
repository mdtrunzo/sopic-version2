import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { getPlantillas } from '../features/plantillas/plantillasSlice'
import { toast } from 'react-toastify'
import Template from './Template'

function Page() {
  const { plantillas } = useSelector((state) => state.plantilla)
  const [plantilla, setPlantilla] = useState([])

  let plantillaId = 1

  useEffect(() => {
    plantillas?.map((item) =>
      item.id === plantillaId
        ? setPlantilla(plantillas)
        : toast.error('Plantilla no encontrada', {
            autoClose: 1000,
          })
    )
  }, [plantillas, plantillaId])

  return (
    <div>
      {plantilla?.map((item) => (
        <Template item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Page

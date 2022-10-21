import { useDispatch, useSelector } from 'react-redux'
import { getPlantillaUser } from '../../features/plantillas/plantillasSlice'
import { useEffect } from 'react'
import Spinner from '../Spinner'
import PlantillaItem from './PlantillaItem'

function PlantillasList() {
  const { plantilla, isLoading } = useSelector((state) => state.plantilla)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlantillaUser())
  }, [dispatch])

  return (
    <>{isLoading ? <Spinner /> : <PlantillaItem plantilla={plantilla} />}</>
  )
}

export default PlantillasList

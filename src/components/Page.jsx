import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getPlantillas,
} from '../features/plantillas/plantillasSlice'
import { toast } from 'react-toastify'
import Template from './Template'
import Spinner from './Spinner'

function Page() {
  const { plantillas, isLoading, isError, message } = useSelector(
    (state) => state.plantilla
  )
  const [arr, setArr] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getPlantillas())

    let plantillaId = 1

    if (plantillas) {
      plantillas?.find((element) => {
        if (element.id === plantillaId) {
          return setArr(element)
        }
        return false
      })
    }

    // eslint-disable-next-line
  }, [isError, message, getPlantillas, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <Template arr={arr} key={arr.id} />
    </div>
  )
}

export default Page

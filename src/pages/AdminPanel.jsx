import HeaderUser from '../components/HeaderUser'
import AdminPlantillas from '../components/adminpanel/AdminPlantillas'
import { useDispatch, useSelector } from 'react-redux'
import { getPlantillasAll } from '../features/plantillas/plantillasSlice'
import Spinner from '../components/Spinner'
import { useEffect } from 'react'

function AdminPanel() {
  const { plantillas, isLoading } = useSelector((state) => state.plantilla)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlantillasAll())
  }, [dispatch])

  return (
    <div>
      <HeaderUser />
      <div className="container-plantillas">
        <h2>Plantillas</h2>
        <div className="container-plantillas-list">
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              <AdminPlantillas plantillas={plantillas} />
            )}
          </>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel

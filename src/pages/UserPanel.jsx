import HeaderUser from '../components/HeaderUser'
import PlantillasList from '../components/userpanel/PlantillasList'

function UserPanel() {
  return (
    <div>
      <HeaderUser />
      <div className="container-plantillas">
        <h2 className="text-4xl mb-2 text-bold">Mis Plantillas</h2>
        <div className="container-plantillas-list">
          <PlantillasList />
        </div>
      </div>
    </div>
  )
}

export default UserPanel

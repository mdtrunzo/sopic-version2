import { Link } from 'react-router-dom'

function PlantillasList({ plantillas }) {
  return (
    <>
      {plantillas.length !== undefined ? (
        <>
          {plantillas.map((item, index) => (
            <div key={index} className="mb-5">
              <img
                src={item.documento}
                alt=""
                width={70}
              />
              <h2>Plantilla: {item.id}</h2>
              <h4>Email: {item.email}</h4>
              <Link to="/plantilla/1983928">
                <button className="violet">VER</button>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <p>No se pudieron cargar los datos. Intente de nuevo mas tarde </p>
      )}
    </>
  )
}

export default PlantillasList

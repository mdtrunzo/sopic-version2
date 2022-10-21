import { Link } from 'react-router-dom'

function PlantillaItem({ plantilla }) {
  return (
    <>
      {plantilla.length !== undefined && (
        <>
          {plantilla.map((item, index) => (
            <div className="mb-6" key={index}>
              <img
                src={`data:image/png;base64, ${item.documento}`}
                alt=""
                width={70}
              />
              <h3>Usuario: {item.email}</h3>
              <Link to="/plantilla/1983928">
                <button className="violet">VER</button>
              </Link>
              <button className="rose">VOLVER A COMPRAR</button>
            </div>
          ))}
        </>
      )}
      {plantilla.length === 0 && (
        <div className="flex flex-col w-96 mx-auto">
          <p className="text-xl mt-2 mb-1">
            Todavía no tenés plantillas creadas
          </p>
          <Link to="/" className="my-4">
            <span className="bg-buttonPrimary px-6 py-2  rounded-md cursor-pointer text-[white] transform transition duration-100 ease-in hover:bg-buttonSecondary">
              VOLVER A EDITAR
            </span>
          </Link>
        </div>
      )}
    </>
  )
}

export default PlantillaItem

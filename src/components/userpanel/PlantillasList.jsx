import { Link } from 'react-router-dom'

function PlantillasList() {
  return (
    <div>
      <img
        src="https://media.istockphoto.com/photos/mixed-race-family-at-home-picture-id143921185?k=20&m=143921185&s=612x612&w=0&h=GK20_OPfWysAUa3aUa4Oq8TcAuVfAvL1Nrf3zPACRks="
        alt=""
        width={70}
      />
      <h2>Plantilla 1</h2>
      <h4>Plantilla Elegida</h4>
      <Link to='/plantilla/1983928'>
        <button className="violet">VER</button>
      </Link>
      <button className="rose">VOLVER A COMPRAR</button>
    </div>
  )
}

export default PlantillasList

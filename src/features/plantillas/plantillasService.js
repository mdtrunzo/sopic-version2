import axios from 'axios'

const API_URL = 'https://flexit.com.ar/sopic-app/public'

//Get plantilla
const getPlantillas = async () => {
  const response = await axios.get(`${API_URL}/plantillas`, {
    headers: {
      'Access-Control-Allow-Credentials': true,
    },
  })

  return response.data
}

//Get plantilla de user
const getPlantillaUser = async () => {
  const response = await axios.get(
    `${API_URL}/api/plantillas/busqueda/matiasdanieltrunzo@gmail.com`
  )

  return response.data
}

//Get All plantillas
const getPlantillasAll = async () => {
  const response = await axios.get(`${API_URL}/api/admin/plantillas`, {
    headers: {
      'Access-Control-Allow-Credentials': true,
    },
  })

  return response.data
}

//Crear nueva plantilla
const createPlantilla = async (plantillaData) => {
  const response = await axios.post(
    `${API_URL}/api/guardar-proyecto`,
    plantillaData
  )

  return response.data
}

const plantillasService = {
  getPlantillas,
  createPlantilla,
  getPlantillaUser,
  getPlantillasAll,
}

export default plantillasService

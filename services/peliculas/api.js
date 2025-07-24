import axios from 'axios';
import { API } from "@/config/constants";


async function obtenerPelicula(roomId) {
  const data = {
    idRoom: roomId
  };
  try {
    
    const response = await axios.post(API + "/api/pelicula/obtenerPelicula", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    if (response.data != null) {
     
      return response.data;
    }

  } catch (error) {
    throw error;
  }
}

async function crearSalaJuego(dificultad) {
  const data = {
    dificultad: dificultad
  };
  try {
    
    const response = await axios.post(API + "/api/pelicula/crearSala", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });  
    if (response.data != null) {
      return response.data;
    }

  } catch (error) {
    throw error;
  }
}

async function adivinarPelicula(idSala, pelicula,usoAyuda) {
  const data = {
    sala: idSala,
    pelicula: pelicula,
    usoAyuda: usoAyuda
  };
  try {
    const response = await axios.post(API + "/api/pelicula/adivinarPelicula", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.data != null) {
      return response.data;
    }

  } catch (error) {
   
    return error.response.data.message;
  }
}


async function obtenerPeliculaPorSala(roomId) {
  const data = {
    idRoom: roomId
  };
  try {
   
    const response = await axios.post(API + "/api/pelicula/obtenerPeliculaPorSala", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
   
    if (response.data != null) {
      
      return response.data;
    }

  } catch (error) {
    throw error;
  }
}
async function obtenerPuntosPorSala(roomId) {
  const data = {
    idRoom: roomId
  };
  try {
    
    const response = await axios.post(API + "/api/pelicula/obtenerPuntos", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
   
    if (response.data != null) {
     
      return response.data;
    }

  } catch (error) {
    throw error;
  }
}
 function eliminarSala(roomId) {
  const data = {
    idRoom: roomId
  };
  try {
   
    const response =  axios.post(API + "/api/pelicula/eliminarSala", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    if (response.data != null) {
   
      return response.data;
    }

  } catch (error) {
    throw error;
  }
}




export { obtenerPelicula, crearSalaJuego, adivinarPelicula, obtenerPeliculaPorSala, obtenerPuntosPorSala,eliminarSala }
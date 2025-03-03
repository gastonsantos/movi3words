import axios from 'axios';
import { API } from "@/config/constants";


async function obtenerPelicula(roomId) {
  const data = {
    idRoom: roomId
  };
        try {
          console.log("como esta roomId", data)
          const response = await axios.post(API + "/api/pelicula/obtenerPelicula", data, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          console.log("Response", response);
          if(response.data!= null){
            console.log("Que trea Peliculas: ",response.data);
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
                console.log("como esta data", data)
                const response = await axios.post(API + "/api/pelicula/crearSala", data, {
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
                console.log("Response", response);
                if(response.data!= null){
                  console.log("Que trea Peliculas: ",response.data);
                  return response.data;
                }
                
              } catch (error) {
                throw error; 
              }
            }
            
      async function adivinarPelicula(idSala, pelicula) {
        const data = {
          sala: idSala,
          pelicula: pelicula
        };
              try {
                const response = await axios.post(API + "/api/pelicula/adivinarPelicula", data, {
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
                
                if(response.data != null){
                  return response.data;
                }
                
              } catch (error) {
                console.log("ERROR DE ADIVINAR PELICULA", error.response.data.message)
                return  error.response.data.message; 
              }
            }
      
      export { obtenerPelicula,crearSalaJuego, adivinarPelicula }
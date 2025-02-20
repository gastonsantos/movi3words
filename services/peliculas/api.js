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

      export { obtenerPelicula }
import React, { useEffect, useState } from "react";
//import { Client } from "@stomp/stompjs";
//import SockJS from "sockjs-client";
import { useRouter } from "next/navigation";
import { crearSalaJuego } from "@/services/peliculas/api";
import { usePelicula } from "@/contexts/PeliculaContext";
const BotonComenzar = ({ dificultad }) => {
    // const [stompClient, setStompClient] = useState(null);
    const { setPelicula } = usePelicula();
    const router = useRouter();
    const [roomId, setRoomId] = useState(null);
    /* useEffect(() => {
         const socket = new SockJS("http://localhost:8080/chat-socket");
         const client = new Client({
             webSocketFactory: () => socket,
             onConnect: () => {
                 console.log("Conectado al WebSocket");
                 setStompClient(client);
                 console.log("La ficultad es", dificultad)
                 // Suscribirse a los temas de WebSocket
                 client.subscribe(`/topic/roomCreated/${dificultad}`, (message) => {
                     const data = JSON.parse(message.body);
                     console.log("DATA", data);
                     const newRoomId = data.sala;
                     const newPelicula = data.pelicula;
                     setPelicula(data.pelicula);
                     setRoomId(newRoomId);
                     router.push(`/page/modo/${newRoomId}`);
                 });
 
                 client.subscribe("/topic/guessResult", (message) => {
                     setResult(message.body);
                 });
             },
             onStompError: (error) => {
                 console.error("Error en la conexión WebSocket:", error);
             },
         });
 
         client.activate();
 
         // Desconectar al desmontar el componente
         return () => {
             if (client.connected) {
                 client.deactivate();
             }
         };
     }, []);
     */
    /*
     // Función para crear una sala
     const handleCrearSala = () => {
         if (stompClient) {
 
             stompClient.publish({
                 destination: `/app/createRoom/${dificultad}`,
                 body: "",
 
             });
 
         }
     };
     */
  
    const handleCrearSala = async () => {
        try {
               const response =  await crearSalaJuego(dificultad);
                setPelicula(response.pelicula);
                router.push(`/page/modo/${response.sala}`);
        } catch (error) {
            console.error("Error al crear sala", error);
        }


    };

    return (

        <button

            className="w-32 mt-12 px-4 py-2 bg-red-400 rounded-lg text-md font-medium text-white tracking-wide flex items-center justify-center"
            onClick={handleCrearSala}
        >

            <span className="ml-2">Jugar</span>
            <span>📥</span>
        </button>
    );
}

export default BotonComenzar;
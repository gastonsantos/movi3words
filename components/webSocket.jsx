"use client"; 

import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs"; 

const Chat = ({ roomId , buscarPelicula}) => {
  const [messages, setMessages] = useState([]); // Mensajes recibidos
  const [guess, setGuess] = useState(""); // Palabra a adivinar
  const [result, setResult] = useState(""); // Resultado de la adivinanza
  const [stompClient, setStompClient] = useState(null); // Cliente STOMP

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/chat-socket"); // ✅ WebSocket con SockJS
    const client = new Client({
      webSocketFactory: () => socket, // ✅ Configuración correcta para SockJS
      debug: (msg) => console.log(msg), // Debug de conexión
      onConnect: () => {
        console.log("Conectado al WebSocket");

        // Suscribirse al chat de la sala
        client.subscribe(`/topic/${roomId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, newMessage]); // 🔹 Mantener mensajes anteriores
        });

        const HandlebuscarPelicula=()=>{
          buscarPelicula();
        }
        // Suscribirse al resultado de la adivinanza
        client.subscribe("/topic/guessResult", (message) => {
          console.log("Resultado:", message.body);
          setResult(message.body);
       
          if(message.body === "Correcto"){
            buscarPelicula();
          }
        });
       
      },
      onStompError: (frame) => {
        console.error("Error STOMP:", frame);
      },
    });

    client.activate(); // Activar la conexión STOMP
    setStompClient(client);


    

    return () => {
      if (client) {
        client.deactivate(); // ✅ Cerrar conexión al desmontar el componente
        console.log("Desconectado del WebSocket");
      }
    };
  }, [roomId]);

  // Función para adivinar la palabra
  const handleGuess = () => {
    if (stompClient && roomId && guess.trim()) {
      const newMessage = { usuario: roomId, mensaje: guess }; // Mensaje del usuario actual

   

      stompClient.publish({
        destination: "/app/joinRoom",
        body: JSON.stringify(newMessage),
      });
      stompClient.publish({
        destination: `/app/chat/${roomId}`,
        body: JSON.stringify(newMessage),
      });

      setGuess(""); // Limpiar el input después de enviar
    }
  };

  return (
    <div >
     


      <div >
        {messages.map((msg, index) => (
          <div key={index} >
            <strong>{msg.usuario}:</strong> {msg.mensaje}
          </div>
        ))}
      </div>

     
      <div>
        <input
          type="text "
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Adivina la pelicula..."
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        />
        <button 
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      
        onClick={handleGuess}>Adivinar</button>
      </div>

      {result && <h2>{result}</h2>}
    </div>
  );
};
export default Chat;
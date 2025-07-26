"use client"; 

import { useEffect, useState } from "react";
import { adivinarPelicula } from "@/services/peliculas/api";
const Chat = ({ roomId , buscarPelicula}) => {
  const [messages, setMessages] = useState([]); // Mensajes recibidos
  const [guess, setGuess] = useState(""); // Palabra a adivinar
  const [result, setResult] = useState(""); // Resultado de la adivinanza
 

  useEffect(()=>{
    
      buscarPelicula();
    
  }, [roomId])

const handleAdivinarPelicula = async () => {
  try {
    const response = await adivinarPelicula(roomId, guess); 
    setResult(response);  
    console.log("La respuesta es", response);

    
    const newMessage = {
      usuario: "Tú",
      mensaje: guess,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setGuess("");
    if(response === "Correcto"){
      buscarPelicula();
      setMessages([]);
    }
  } catch (error) {
    console.error("Error al adivinar la película:", error);
  }

};
  return (
    <div className="mt-8">
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
      
        onClick={handleAdivinarPelicula}>Adivinar</button>
      </div>

      {result && <h2>{result}</h2>}
    </div>
  );
};
export default Chat;
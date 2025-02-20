"use client"
import { useParams } from "next/navigation";
import Chat from "@/components/webSocket";
import React, { useEffect, useState, useRef } from "react";
import { obtenerPelicula } from "@/services/peliculas/api";
import { usePelicula } from "@/contexts/PeliculaContext";
import { useRouter } from "next/navigation";
import JuegoBase from "@/components/juego/juegoBase";
const ChatRoom = () => {
  const { setPelicula } = usePelicula();
  const params = useParams();
  const { pelicula } = usePelicula();
  const router = useRouter();
  const fetched = useRef(false);
  const roomId = params.roomId;

  useEffect(() => {
    console.log("QUE trae Pelicula", pelicula)
    if (!pelicula) {
      // Si no hay película en el contexto, redirigir de vuelta a la sala principal
      //router.push("/page/sala-principal");

    }
  }, [pelicula, router]);

  const handleBuscarPelicula = async () => {
    
    try {
      const response = await obtenerPelicula(roomId);
      console.log("ROOM ID", roomId)
      if (response) {
        const data = response;
        setPelicula(data);
        console.log("LAAAAAa nueva pelicula es: ", data)
      }
    } catch (error) {
      console.error("Error al obtener la pelicula", error);
    }

  }

  return (


    <div className="mt-16">
     
       

       <JuegoBase pelicula={pelicula} roomId={roomId}/>


     


    </div>

  );
};

export default ChatRoom;

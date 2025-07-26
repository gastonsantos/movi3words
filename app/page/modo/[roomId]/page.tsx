"use client"
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { usePelicula } from '@/contexts/peliculaContext';
import { useRouter } from "next/navigation";
import JuegoBase from "@/components/juego/juegoBase";

const ChatRoom = () => {
  //const { setPelicula } = usePelicula();
  const params = useParams();
  const { pelicula } = usePelicula();
  const router = useRouter();
  const roomId = params.roomId;

  useEffect(() => {
    
    if (!pelicula) {
  
    }
  }, [pelicula, router]);

  

  return (


    <div className="mt-16">
     
       

       <JuegoBase pelicula={pelicula} roomId={roomId}/>


     
     

    </div>

  );
};

export default ChatRoom;

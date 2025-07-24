'use client';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import ModalFinalDelJuego from "@/components/juego/modalFinalDelJuego";
import { eliminarSala, obtenerPuntosPorSala } from "@/services/peliculas/api";
const Timer = ({ roomId, terminoElJuego, juegoTerminado, puntos }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [puntaje, setPuntaje] = useState();

  useEffect(() => {
    console.log("puntos En timer", puntos);
    setPuntaje(puntos);
  }, [puntos]);

  const terminoElTiempo = async () => {
    try {

      setIsOpen(true);
      terminoElJuego();
      const puntosObtenidos = await terminoElJuego(); 
      eliminarSalaJuego();
      router.push(`/page/terminado?puntos=${puntosObtenidos}`);


    } catch (error) {
      console.error("Error al terminar el jeugo", error);
    }


  };
  
    const eliminarSalaJuego = async () => {
        try {
            const response = await eliminarSala(roomId);
        } catch (error) {
            console.error("Error al eliminar Sala", error);
        }
    };

  return (
    <div>
      <div className='absolute mt-10 left-1/2 z-5 transform -translate-x-1/2 -translate-y-1/2'>
        <CountdownCircleTimer
          isPlaying
          duration={100}
          size={100}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={terminoElTiempo}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      {/*isOpen && (

        <div>
          <ModalFinalDelJuego roomId={roomId} />
        </div>
      )*/}
    </div>
  );
};

export default Timer;

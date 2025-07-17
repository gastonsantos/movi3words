'use client';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ModalFinalDelJuego from "@/components/juego/modalFinalDelJuego";
const Timer = ({roomId, terminoElJuego}) => {
 const router = useRouter();
 const [isOpen, setIsOpen] = useState(false);

    const terminoElTiempo = async () => {
        try {
               setIsOpen(true);
               terminoElJuego();
        } catch (error) {
            console.error("Error al terminar el jeugo", error);
        }


    };
   
 

    return (
     <div>
      <div className='absolute  left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2'>
    <CountdownCircleTimer
    isPlaying
    duration={999}
    size={120}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    onComplete={terminoElTiempo}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
</div>
  {isOpen && (

    <div>
     <ModalFinalDelJuego roomId={roomId} />
    </div>
   )}
     </div>
    );
};

export default Timer;

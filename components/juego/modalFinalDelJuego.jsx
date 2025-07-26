'use client';

import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Confetti from "react-confetti";
import "antd/dist/reset.css";
import { obtenerPuntosPorSala, eliminarSala } from "@/services/peliculas/api";
import { useRouter } from "next/navigation";
const ModalFinalDelJuego = ({ roomId }) => {
   // const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef(null);
    const [isVictory, setIsVictory] = useState(true);
    const [contador, setContador] = useState(0);
    const router = useRouter();
    useEffect(() => {
       /* const HandlebuscarPelicula = () => {
            buscarPelicula();

        }
            */
        handleObtenerPuntosDeSala();
        playFestejoSound()
    }, [roomId]);
    useEffect(() => {
        if (isVictory) {
            const timer = setTimeout(() => {
                playFestejoSound();
                setIsVictory(true);

            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isVictory]);

    const playFestejoSound = () => {
        const festejoSound = new Audio("/sonidos/festejo.mp3");
        festejoSound.play();
    };

    const handleObtenerPuntosDeSala = async () => {
        try {
            const response = await obtenerPuntosPorSala(roomId);
            setContador(response);
           
          
        } catch (error) {
            console.error("Error al obtener los puntos de sala", error);
        }
    }

    const volverAJugar = async () => {
        try {
            await eliminarSala(roomId);
            router.push("/page/modo/");
        } catch (error) {
            console.error("Error al eliminar Sala", error);
        }
    };

    return (
        <>
            <div className="fixed inset-0 z-40 bg-black bg-opacity-70 pointer-events-auto"></div>
            <div className="z-50 pointer-events-none fixed inset-0 flex items-center justify-center">
                {isVictory && (
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        numberOfPieces={200}
                        gravity={0.2}
                        initialVelocityY={20}
                    />
                )}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center cursor-move">
                        <Draggable handle=".modal-header" nodeRef={modalRef}>
                            <div
                                ref={modalRef}
                                className="relative bg-cover bg-no-repeat pointer-events-auto cursor-move bg-emerald-700 p-6 rounded-lg shadow-lg w-72 flex flex-col items-center justify-center"
                                style={{ backgroundImage: "url('/image/Cine.webp')" }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"></div>
                                <div className="relative z-10 modal-header cursor-move flex flex-col items-center justify-center w-full p-1">
                                    <h2 className="text-lg text-white font-semibold">Puntos</h2>

                                    <h2>{contador}</h2>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="mt-4">

                                            <p>-------------------</p>
                                        </div>
                                        <div className="w-64 mt-4 flex flex-col items-stretch">
                                            <button

                                                className="bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-opacity-90 rounded-md px-5 py-2 transition"
                                                onClick={volverAJugar}
                                            >
                                                Volver a jugar
                                            </button>
                                          
                                            <div className="flex flex-col space-y-2 mt-4">
                                            

                                                <a
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full bg-blue-600 text-white text-center rounded-md px-5 py-2 hover:bg-blue-700 transition"
                                                >
                                                    Compartir en Facebook
                                                </a>

                                                <a
                                                    href={`https://twitter.com/intent/tweet?text=¡Conseguí ${contador} puntos en este juego! ${window.location.href}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full bg-sky-500 text-white text-center rounded-md px-5 py-2 hover:bg-sky-600 transition"
                                                >
                                                    Compartir en X (Twitter)
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Draggable>
                    </div>
                )}
            </div>
        </>
    );
};

export default ModalFinalDelJuego;

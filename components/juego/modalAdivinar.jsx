'use client';

import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Confetti from "react-confetti";
import "antd/dist/reset.css";
import { adivinarPelicula, obtenerPuntosPorSala } from "@/services/peliculas/api";
import { useRouter } from "next/navigation";
const DraggableModal = ({ roomId, buscarPelicula, usoAyuda, juegoTerminado }) => {
    const router = useRouter();
    const [isOpen] = useState(true);
    const modalRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");
    const [isVictory, setIsVictory] = useState(false);
    const [contador, setContador] = useState();
     const inputRef = useRef(null);
    useEffect(() => {
         inputRef.current?.focus();
        if (!juegoTerminado) {

            handleObtenerPuntosDeSala();
        }
    }, [roomId, juegoTerminado]);
 

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAdivinarPelicula();
        }
    };
    useEffect(() => {
     
        //buscarPelicula();
        handleObtenerPuntosDeSala();

    }, [roomId]);

    useEffect(() => {
        if (isVictory) {
            const timer = setTimeout(() => {
                setIsVictory(false);

            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isVictory]);

    const handleObtenerPuntosDeSala = async () => {
        try {
            const response = await obtenerPuntosPorSala(roomId);
            setContador(response);
            
        } catch (error) {
            router.push("/page/errorSala");
            console.error("Error al obtener los puntos de sala", error);

        }
    }
    const handleAdivinarPelicula = async () => {
        if (juegoTerminado) return;
         if (!guess.trim()) return;
        try {
            const response = await adivinarPelicula(roomId, guess, usoAyuda);
            setResult(response);
            
/*
            const newMessage = {
                usuario: "Ultimo intento",
                mensaje: guess,
            };
            */
            //setMessages((prevMessages) => [newMessage]);
            setGuess("");
            if (response === "Correcto") {
                setIsVictory(true);
                playFestejoSound();
                buscarPelicula();
                setMessages([]);
                handleObtenerPuntosDeSala();

            }
        } catch (error) {
            console.error("Error al adivinar la película:", error);
        }
    };
    const playFestejoSound = () => {
        const festejoSound = new Audio("/sonidos/festejo.mp3");
        festejoSound.play();
    };
    return (
        <div className="z-50 pointer-events-none ">
            <div className="fixed inset-0 z-50 pointer-events-none">
                {isVictory && (
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        numberOfPieces={200}
                        gravity={0.2}
                        initialVelocityY={20}
                    />
                )}
            </div>

            {isOpen && (
                <div className="cursor-move">
                    <Draggable handle=".modal-header" nodeRef={modalRef}>
                        <div
                            ref={modalRef}
                            className="relative bg-cover bg-no-repeat pointer-events-auto cursor-move bg-emerald-700 p-6 rounded-lg shadow-lg w-72 flex flex-col items-center justify-center"
                            style={{ backgroundImage: "url('/image/Cine.webp')" }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"></div>
                            <div className="relative z-10 modal-header cursor-move flex flex-col items-center justify-center w-full p-1">
                                <div className="text-lg text-white font-semibold">Puntos</div>
                                <div className="text-lg text-white font-semibold">{contador}</div>

                                <div className="flex justify-between items-center border-b pb-2">
                                    <div className="mt-4">

                                        <div>

                                            {messages.map((msg, index) => (
                                                <div key={index}>
                                                    <strong>{msg.usuario}:</strong> {msg.mensaje}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-2 flex flex-col items-center justify-center">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                value={guess}
                                                onChange={(e) => setGuess(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                placeholder="Adivina la pelicula..."
                                                className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 items-center justify-center"
                                            />
                                            <button
                                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                                onClick={handleAdivinarPelicula}
                                            >
                                                Adivinar
                                            </button>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            {result && <h2 className="text-green-700 text-lg">{result}</h2>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="mt-4">
                                        <p>¿No podes adivinar la pelicula?</p>
                                    </div>
                                    <button
                                        onClick={buscarPelicula}
                                        className="bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-opacity-90 rounded-md px-5 py-2 transition"
                                    >
                                        Otra pelicula
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Draggable>
                </div>
            )}
        </div>
    );
};

export default DraggableModal;

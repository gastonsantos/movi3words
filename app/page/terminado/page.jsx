"use client"
import { useSearchParams } from "next/navigation";
import BotonComenzar from "@/components/modo/botonComenzar";
import Footer from "@/components/footer/footer";
import styles from "@/styles/Home.module.css";
import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Confetti from "react-confetti";
import "antd/dist/reset.css";
import { useRouter } from "next/navigation";

const Terminado = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const modalRef = useRef(null);
    const [isVictory, setIsVictory] = useState(true);
    const [currentUrl, setCurrentUrl] = useState('');
    const rawPuntos = searchParams.get("puntos");
    const puntos = rawPuntos === "undefined" || rawPuntos === null ? 0 : parseInt(rawPuntos, 10);
    const [contador, setContador] = useState(puntos);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
        if (isVictory) {
            const timer = setTimeout(() => {
                setIsVictory(true);

            }, 5000);


        }
    }, [isVictory]);

    const volverAJugar=()=>{
         router.push("/page/modo");
    }
    return (
        <>
         <section className="min-h-dvh  relative ezy__about9 light py-6 md:py-6 bg-cover bg-no-repeat text-zinc-900 dark:text-white"
			style={{ backgroundImage: "url('/image/Fondo.webp')" }}
		>
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

            </div>
            </section>
        </>

    );
};
export default Terminado;

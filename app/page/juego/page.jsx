"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
//import { usePelicula } from '@/contexts/peliculaContext';
import WaveAnimation from "@/components/waveAnimation";
const SalaPrincipal = () => {
    //const { setPelicula } = usePelicula();
    const [roomId, setRoomId] = useState(null);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");

    const [stompClient, setStompClient] = useState(null);
    const router = useRouter();
  
    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/chat-socket");
        const client = new Client({
            webSocketFactory: () => socket,
            onConnect: () => {
                console.log("Conectado al WebSocket");
                setStompClient(client);

                
                client.subscribe("/topic/roomCreated", (message) => {
                    const data = JSON.parse(message.body);
                    console.log("DATA", data);
                    const newRoomId = data.sala;
                    setPelicula(data.pelicula);
                    setRoomId(newRoomId);
                    router.push(`/page/juego/${newRoomId}`);
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

    
    const handleCrearSala = () => {
        if (stompClient) {

            stompClient.publish({
                destination: "/app/createRoom",
                body: "",

            });

        }
    };

   
    const handleUnirseSala = () => {
        if (stompClient && roomId && guess) {
            stompClient.publish({
                destination: "/app/joinRoom",
                body: `${roomId}:${guess}`,
            });
        }
    };

    return (
        <div className=" relative w-full min-h-screen bg-blue-500">
            <div className="">

                <div className="text-center w-full">
                    <h2>Sala Principal</h2>

                    <button
                        onClick={handleCrearSala}
                        className="third-step py-2 px-6 rounded bg-orange-600 hover:bg-orange-600 text-white"
                    >
                        Crear una Sala de juego
                    </button>

                    {roomId && (
                        <div style={{ marginTop: "20px" }}>
                            <p>ID de Sala: {roomId}</p>
                            <input
                                type="text"
                                placeholder="Adivina la palabra"
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)}
                                style={{ marginRight: "10px", padding: "5px" }}
                            />
                            <button
                                onClick={handleUnirseSala}
                                className="third-step py-2 px-6 rounded bg-orange-600 hover:bg-orange-600 text-white"
                            >
                                Unirme a una Sala de juego
                            </button>
                        </div>
                    )}

                    {result && <p style={{ marginTop: "20px" }}>{result}</p>}

                    <div className="w-full">
                      
                        <div className="inset-0 z-10">
                            <WaveAnimation color="#29B7C9" />
                        </div>
                       
                        <div className=" inset-0 z-20 -mt-40 md:-mt-10 sm:mt-0">
                            <WaveAnimation color="#FF5733" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SalaPrincipal;
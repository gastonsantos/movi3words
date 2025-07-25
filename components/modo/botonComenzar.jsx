import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { crearSalaJuego } from "@/services/peliculas/api";
import { usePelicula } from "@/contexts/PeliculaContext";
const BotonComenzar = ({ dificultad }) => {
    
    const { setPelicula } = usePelicula();
    const router = useRouter();
    const [roomId, setRoomId] = useState(null);

    const handleCrearSala = async () => {
        try {
               const response =  await crearSalaJuego(dificultad);
                setPelicula(response.pelicula);
                router.push(`/page/modo/${response.sala}`);
        } catch (error) {
            console.error("Error al crear sala", error);
        }


    };

    return (

        <button

            className="w-32 mt-12 px-4 py-2 bg-red-400 rounded-lg text-md font-medium text-white tracking-wide flex items-center justify-center"
            onClick={handleCrearSala}
        >

            <span className="ml-2">Jugar</span>
            <span>📥</span>
        </button>
    );
}

export default BotonComenzar;
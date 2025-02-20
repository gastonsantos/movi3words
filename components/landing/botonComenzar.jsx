import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const BotonComenzar = () => {
    
    const router = useRouter();
   
    // Función para crear una sala
    const handleCrearSala = () => {
        router.push(`/page/modo/`);
    };


    return (

        <button

            className="w-32 px-4 py-2 bg-red-400 rounded-lg text-md font-medium text-white tracking-wide flex items-center justify-center"
            onClick={handleCrearSala}
        >

            <span className="ml-2">Comenzar</span>
            <span>📥</span>
        </button>
    );
}

export default BotonComenzar;
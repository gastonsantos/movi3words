"use client"
import { createContext, useContext, useState } from "react";

const peliculaContext = createContext();

export const peliculaProvider = ({ children }) => {
    const [pelicula, setPelicula] = useState(null);

    return (
        <peliculaContext.Provider value={{ pelicula, setPelicula }}>
            {children}
        </peliculaContext.Provider>
    );
};

export const usePelicula = () => useContext(peliculaContext);

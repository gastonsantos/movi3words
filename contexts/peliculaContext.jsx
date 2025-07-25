"use client"
import { createContext, useContext, useState } from "react";

const PeliculaContext = createContext();

export const PeliculaProvider = ({ children }) => {
    const [pelicula, setPelicula] = useState(null);

    return (
        <PeliculaContext.Provider value={{ pelicula, setPelicula }}>
            {children}
        </PeliculaContext.Provider>
    );
};

export const usePelicula = () => useContext(PeliculaContext);

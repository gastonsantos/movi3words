"use client"
import { useRouter } from "next/navigation"; 
import { eliminarSala } from "@/services/peliculas/api";

export default function Navbar() {
  const router = useRouter();
/*
   const eliminarSalaJuego = async (roomId) => {
        try {
             await eliminarSala(roomId);
        } catch (error) {
            console.error("Error al eliminar Sala", error);
        }
    };
  const volverAlIniciio= async()=>{
    await eliminarSalaJuego();
    router.push("/");
  }
    */
     const volverAlIniciio= async()=>{
    
    router.push("/");
    }
  return (
    

    <nav className="fixed top-0 left-0 w-full bg-cyan-500 shadow-md p-2 z-50">
    <div className="container mx-auto flex items-center justify-center space-x-2">
      <img src="/image/Logo4.png" className="w-10 h-14" />
      <button className="text-xl font-bold text-black"
      onClick={volverAlIniciio}
      >Movi3Words</button>
     
      <img src="/image/Logo4.png" className="w-10 h-14" />
    </div>
  </nav>
  
    
  );
}

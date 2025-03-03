"use client"
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { obtenerPelicula } from "@/services/peliculas/api";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/landing/footer";
import ContainerImage from "@/components/imagenComponent";
import BotonComenzar from "@/components/landing/botonComenzar";
import PrimeraSeccion from "@/components/landing/primeraSeccion";
import SegundaSeccion from "@/components/landing/segundaSeccion";
const ChatRoom = () => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId"); // Obtener roomId desde la URL
  const [pelicula, setPelicula] = useState("");
 
  return (
    <div className="mt-10">
      <div className={`${styles.container}`}>
        
        <div>
          <div className="min-h-[75vh]" style={{ backgroundColor: "#282447" }}>
            <section className={`${styles.section}`} style={{ backgroundColor: "#282447" }}>
              

              <ContainerImage />
              <BotonComenzar />
            </section>
          </div>
          <svg viewBox="0 0 1440 320" className={styles.wave} preserveAspectRatio="none" style={{ backgroundColor: "#ad2472" }}>
            <path
              fill="#282447"
              fillOpacity="1"
              d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                        M0,160L48,170C96,180,192,200,288,210C384,220,480,220,576,200C672,180,768,140,864,120C960,100,1056,100,1152,120C1248,140,1344,180,1392,200L1440,220L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                        M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </path>
          </svg>
        </div>
        {/* Sección 2 */}
        <PrimeraSeccion />
        {/* Sección 3 */}
       <SegundaSeccion/>
        <div className={styles.waveContainer}>
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default ChatRoom;

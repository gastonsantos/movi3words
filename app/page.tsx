"use client"
import React from "react";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/footer/footer";
import PrimeraSeccion from "@/components/landing/primeraSeccion";
import SegundaSeccion from "@/components/landing/segundaSeccion";
import Cabezera from "@/components/landing/cabezera";
const ChatRoom = () => {

  
 
  return (
    <div className="mt-10">
      <div className={`${styles.container}`}>
        
      
       <Cabezera/>
       <PrimeraSeccion />
       <SegundaSeccion/>
        <div className={styles.waveContainer}>
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default ChatRoom;

import React from 'react';
import styles from "@/styles/image.module.css";
const ImagenComponent = () => {
  return (
    <div className={styles.containerImage}>
      <div className={styles.imagecontainer}>
        <img className={styles.manzdev} src="https://manz.dev/manz-logo.png" alt="ManzDev" />
        <div className={styles.gradient}></div>
      </div>
     
    </div>
  );
};

export default ImagenComponent;
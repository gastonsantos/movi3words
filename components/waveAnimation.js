import React from "react";
import styles from "@/styles/waveAnimation.module.css"; 
const WaveAnimation = ({color="#29B7C9" }) => {
  console.log("Styles", styles.emailSignupWave)
  return (
    <div className="w-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 712 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.emailSignupWave}
          d="M 0 17.023 C 118.66666666666666 28.709 118.66666666666666 28.709 237.33333333333331 22.866 C 356 17.023 356 17.023 474.66666666666663 24.222 C 593.3333333333333 31.425 593.3333333333333 31.425 712 24.32 L 712 4688.03125 L 0 4688.03125 Z"
          fill={color}
          
        />
      </svg>
    </div>
  );
};

export default WaveAnimation;
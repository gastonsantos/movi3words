"use client"

import ErrorDeSala from "@/components/errorDeSala/errorDeSala";
const ErrorSala = () => {

   
   

    return (
        <section className="min-h-dvh  relative ezy__about9 light py-6 md:py-6 bg-cover bg-no-repeat text-zinc-900 dark:text-white"
			style={{ backgroundImage: "url('/image/Fondo.webp')" }}
		>
         <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div> 
         <div className="relative z-5"> 
            <ErrorDeSala/>
            </div>
        
       
        </section>
       
    );
};

export default ErrorSala;
import React from "react";

const ComoJugar = () => {
  return (
    <div className="container px-4 mx-auto mt-10">
      <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
      <div className="bg-transparent text-white p-6 rounded-2xl shadow-sm max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">
            🎬 ¿Listo para el desafío cinéfilo? 🍿
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Imagina que estás frente a una cartelera de cine... pero hay un misterio por resolver.
            Tu misión es <span className="font-bold text-yellow-300">adivinar la película</span> con solo
            <span className="font-bold text-yellow-300"> tres palabras</span>
          </p>
          <ul className="list-none list-inside text-gray-300 mb-4">
            <li>🎭 Recibirás <span className="text-yellow-300 font-bold">tres palabras clave</span> que describen la película.</li>
            <li>🖼️ Además, verás varias <span className="text-yellow-300 font-bold">imagenes borrosas</span> de la película como pista visual.</li>
            <li>❓ Si <span className="text-red-500 font-bold">No</span> logras adivinarla, puedes pedir más ayuda... ¡pero te costará puntos!</li>
          </ul>
          <div className="bg-transparent p-4 rounded-lg mb-4">
            <p className="text-yellow-300 font-bold">Opciones de ayuda:</p>
            <ul className="list-none text-gray-300">
              <li>📌 <span className="font-bold">Género de la película</span> (- puntos)</li>
              <li>📜 <span className="font-bold">Sinopsis</span> (- más puntos)</li>
              <li>🎥 <span className="font-bold">Póster oficial</span> (última pista)</li>
            </ul>
          </div>
          <p className="text-lg text-center text-gray-300">
            ¿Podrás descubrir la película antes de quedarte sin puntos? 🎞️
          </p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:block">
        <img src="/image/panavision.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComoJugar;

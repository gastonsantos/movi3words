
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { obtenerPelicula, obtenerPeliculaPorSala, obtenerPuntosPorSala,eliminarSala } from "@/services/peliculas/api";
import { usePelicula } from "@/contexts/peliculaContext";

import ImageSlider from "@/components/juego/ImageSlider";
import ModalAdivinar from "@/components/juego/modalAdivinar";
import Timer from "@/components/juego/timer";

const JuegoBase = ({ pelicula = {}, roomId }) => {

	const { setPelicula } = usePelicula();	
	const [visible, setVisible] = useState(false);
	const [juegoTerminado, setJuegoTerminado] = useState(false);
	const [puntos, setPuntos] = useState();

	useEffect(() => {
		if (!pelicula && roomId) {
			obtenerPeliculaDeSala();
		}
	}, [pelicula, roomId]);

	const obtenerPeliculaDeSala = async () => {
		setVisible(false);

		try {
			const response = await obtenerPeliculaPorSala(roomId);

			if (response) {
				const data = response;
				setPelicula(data);

			} else {
				setPelicula({});
			}
		} catch (error) {
			console.error("Error al obtener la pelicula", error);
			setPelicula({});
		}
	}

	const handleBuscarPelicula = async () => {
		setVisible(false);
		try {
			const response = await obtenerPelicula(roomId);

			if (response) {
				const data = response;
				setPelicula(data);

			} else {
				setPelicula({});
			}
		} catch (error) {
			console.error("Error al obtener la pelicula", error);
			setPelicula({});
		}

	}

	const terminoElJuego = async () => {
		const response = await obtenerPuntosPorSala(roomId);
		await eliminarSala(roomId);
		setPuntos(response);
		
		setJuegoTerminado(true);
		return response;
	}
	return (
		<section className="min-h-dvh  relative ezy__about9 light py-6 md:py-6 bg-cover bg-no-repeat text-zinc-900 dark:text-white"
			style={{ backgroundImage: "url('/image/Fondo.webp')" }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

			<div className="container px-4">

				<div className="">
					<Timer roomId={roomId} terminoElJuego={terminoElJuego} juegoTerminado={juegoTerminado} puntos={puntos} />
				</div>

				<div className="grid grid-cols-12 items-center gap-4 mb-12">



					<div className="col-span-12 lg:col-span-6 h-full  items-center justify-center relative">



						<h1 className="text-3xl leading-none font-bold p-3 tracking-wider mb-2">
							¿Podrás adivinar la película?
						</h1>

						<p className="font-bold text-sm">Palabras Clave:</p><span className="font-bold text-lg"> {pelicula?.palabras || "Cargando..."}</span>



						<div className="relative mt-6 mb-6">
							<div className="mt-12 lg:mt-0 max-w-md md:max-w-lg lg:max-w-xl relative">
								<div className={`w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl transition ${visible ? "blur-none" : "blur-xl"}`}>
									<ImageSlider imagenes={pelicula?.imagenes || []} />
								</div>


								{!visible && (
									<button
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-opacity-90 rounded-full p-3 transition"
										onClick={() => setVisible(true)}
									>
										<FontAwesomeIcon icon={faEye} size="lg" />
									</button>
								)}
							</div>
						</div>


					</div>

					<div className="col-span-12 lg:col-span-6 h-full flex items-center justify-center relative">
						<div className="mt-12 lg:mt-0 max-w-md md:max-w-lg lg:max-w-xl relative">
							< ModalAdivinar roomId={roomId} buscarPelicula={handleBuscarPelicula} usoAyuda={visible} juegoTerminado={juegoTerminado} />
						</div>
					</div>


				</div>
			</div>



		</section>
	);
};
export default JuegoBase
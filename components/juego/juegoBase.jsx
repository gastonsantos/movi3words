import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Chat from "@/components/webSocket";
import { obtenerPelicula } from "@/services/peliculas/api";
import { usePelicula } from "@/contexts/PeliculaContext";
import { useRouter } from "next/navigation";
const JuegoBase = ({ pelicula, roomId }) => {
	const router = useRouter();
	const { setPelicula } = usePelicula();
	//const { pelicula } = usePelicula();
	const [visible, setVisible] = useState(false);
	const [visibleGenero, setVisibleGenero] = useState(false);
	const [visibleSinopsis, setVisibleSinopsis] = useState(false);

	useEffect(() => {
		console.log("QUE trae Pelicula", pelicula)
		if (!pelicula) {
			// Si no hay película en el contexto, redirigir de vuelta a la sala principal
			//router.push("/page/sala-principal");

		}
	}, [pelicula, router]);

	const handleBuscarPelicula = async () => {
		setVisible(false);
		setVisibleGenero(false);
		setVisibleSinopsis(false);
		try {
			const response = await obtenerPelicula(roomId);
			console.log("ROOM ID", roomId)
			if (response) {
				const data = response;
				setPelicula(data);
				console.log("LAAAAAa nueva pelicula es: ", data)
			}
		} catch (error) {
			console.error("Error al obtener la pelicula", error);
		}

	}
	return (
		<section className="ezy__about9 light py-6 md:py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 items-center gap-4 mb-12">
					<div className="col-span-12 lg:col-span-6 h-full  items-center justify-center relative">
						<h6 className="font-medium opacity-70 mb-2">Hola, bienvenido a la Cartelera!!</h6>
						<h1 className="text-3xl leading-none font-bold  tracking-wider mb-2">
							¿Podrás adivinar la película?
						</h1>
						<hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
						<p>Palabras Clave:</p><span className="font-bold text-lg"> {pelicula.palabras}</span>
						
						<div className="relative mt-6">
							<hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
							<p className={`opacity-70 mb-2 transition select-none ${visibleGenero ? "blur-none" : "blur-md"}`}
								style={{ userSelect: "none" }} >
								Género: {pelicula.genero}</p>
							{!visibleGenero && (
								<button
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-opacity-90 rounded-full p-3 transition"
									onClick={() => setVisibleGenero(true)}
								>
									<FontAwesomeIcon icon={faEye} size="lg" />
								</button>
							)}
						</div>

						<div className="relative mt-6 mb-6">
							<hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
							<p
								className={`opacity-70 mb-2 transition select-none ${visibleSinopsis ? "blur-none" : "blur-md"}`}
								style={{ userSelect: "none" }} // Asegura que no se pueda copiar
							>
								{pelicula.sinopsis}
							</p>

							{!visibleSinopsis && (
								<button
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-opacity-90 rounded-full p-3 transition"
									onClick={() => setVisibleSinopsis(true)}
								>
									<FontAwesomeIcon icon={faEye} size="lg" />
								</button>
							)}
						</div>
						<Chat roomId={roomId} buscarPelicula={handleBuscarPelicula}/>
						<div className="mt-12">
							<button
								onClick={handleBuscarPelicula}
								className="bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-opacity-90 rounded-md px-5 py-2 transition">
								Otra pelicula
							</button>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6 h-full flex items-center justify-center relative">
						<div className="mt-12 lg:mt-0 max-w-xs md:max-w-sm relative">
							<img
								src={pelicula.imagenes[3]}
								alt=""
								className={`w-full h-auto rounded-2xl transition ${visible ? "blur-none" : "blur-md"}`}
							/>

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
			</div>

		</section>
	);
};
export default JuegoBase
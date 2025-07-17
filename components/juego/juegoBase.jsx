
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { obtenerPelicula, obtenerPeliculaPorSala } from "@/services/peliculas/api";
import { usePelicula } from "@/contexts/PeliculaContext";
import { useRouter } from "next/navigation";
import ImageSlider from "@/components/juego/ImageSlider";
import ModalAdivinar from "@/components/juego/modalAdivinar";
import Timer from "@/components/juego/timer";
const JuegoBase = ({ pelicula = {}, roomId }) => {
	const router = useRouter();
	const { setPelicula } = usePelicula();
	const [verAdivinar, setVerAdivinar] = useState(false);
	const [visible, setVisible] = useState(false);
	const [visibleGenero, setVisibleGenero] = useState(false);
	const [visibleSinopsis, setVisibleSinopsis] = useState(false);
	const [imagenes, setImagenes] = useState([]);
	useEffect(() => {
		if (!pelicula && roomId) {
			obtenerPeliculaDeSala();

		}
	}, [pelicula, roomId]);

	useEffect(() => {
		setImagenes([...pelicula?.imagenes || []]);
	}, [pelicula]);

	useEffect(() => {
		if (Array.isArray(pelicula?.imagenes)) {
			setImagenes(pelicula.imagenes);
		} else {
			setImagenes([]);
		}
	}, [pelicula]);

	const obtenerPeliculaDeSala = async () => {
		setVisible(false);
		setVisibleGenero(false);
		setVisibleSinopsis(false);
		try {
			const response = await obtenerPeliculaPorSala(roomId);

			if (response) {
				const data = response;
				setPelicula(data);

			} else {
				setPelicula({});
			}
		} catch (error) {

			setPelicula({});
		}
	}

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
			} else {
				setPelicula({});
			}
		} catch (error) {
			console.error("Error al obtener la pelicula", error);
			setPelicula({});
		}

	}
	const handleVerAdivinar = () => {
		setVerAdivinar(!verAdivinar);
	}
	const terminoElJuego = () => {
		setVerAdivinar(false);
	}
	return (
		<section className="min-h-dvh  relative ezy__about9 light py-6 md:py-6 bg-cover bg-no-repeat text-zinc-900 dark:text-white"
			style={{ backgroundImage: "url('/image/Fondo.webp')" }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

			<div className="container px-4">
				<div className="m-6">
					{!verAdivinar ? (
						<button className="absolute top-0 z-40 right-0 mt-3 px-4 py-2.5  rounded-full bg-gradient-to-br from-violet-600 to-teal-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr"
							onClick={handleVerAdivinar}
						>
							Adivinar
						</button>
					) : (
						<button className="absolute top-0 z-40 right-0 mt-4 px-4 py-2.5  rounded-full bg-gradient-to-br from-red-500 to-slate-800 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr"
							onClick={handleVerAdivinar}
						>
							Ocultar
						</button>

					)}
				</div>
				<div className="">
					<Timer roomId={roomId} terminoElJuego={terminoElJuego} />
				</div>

				<div className="grid grid-cols-12 items-center gap-4 mb-12">



					<div className="col-span-12 lg:col-span-6 h-full  items-center justify-center relative">



						<h1 className="text-3xl leading-none font-bold p-3 tracking-wider mb-2">
							¿Podrás adivinar la película?
						</h1>
						<hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
						<p>Palabras Clave:</p><span className="font-bold text-lg"> {pelicula?.palabras || "Cargando..."}</span>

						<div className="relative mt-6">
							<hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
							<p className={` mb-2 transition select-none font-bold text-lg ${visibleGenero ? "blur-none" : "blur-md"}`}
								style={{ userSelect: "none" }} >
								Género: {pelicula?.genero || "Cargando..."}</p>
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
								className={`font-bold text-lg mb-2 transition select-none ${visibleSinopsis ? "blur-none" : "blur-md"}`}
								style={{ userSelect: "none" }}
							>
								{pelicula?.sinopsis || "Cargando..."}
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


					</div>

					<div className="col-span-12 lg:col-span-6 h-full flex items-center justify-center relative">
						<div className="mt-12 lg:mt-0 max-w-md md:max-w-lg lg:max-w-xl relative">
							<div className={`w-full h-auto rounded-2xl transition ${visible ? "blur-none" : "blur-xl "}`}

							>
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
			</div>
			{verAdivinar && (
				<div className="">

					< ModalAdivinar roomId={roomId} buscarPelicula={handleBuscarPelicula} />
				</div>
			)}

		</section>
	);
};
export default JuegoBase
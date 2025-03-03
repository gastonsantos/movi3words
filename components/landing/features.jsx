import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faGamepad,
	faPencilRuler,
	faPoll,
	faFilm,
	faTicket,
	faRobot,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const features = [
	{
		icon: faRobot,
		title: "IA",
		description:
			"Con el uso de la IA, para generar las 3 palabagras que hacen referencia a las peliculas.",
	},
	{
		icon: faFilm,
		title: "Peliculas",
		description:
			"Innumerable peliculas gracias a la API MovieDb.",
	},
	{
		icon: faCamera,
		title: "Imágenes",
		description:
			"Imagenes de las peliculas.",
	},
	{
		icon: faTicket,
		title: "Peliculas populares",
		description:
			"Si no eres un gran cinefilo, podras jugar con las peliculas mas famosas",
	},
	{
		icon: faGamepad,
		title: "Descarga la App",
		description:
			"Lo podras descargar en tun celular como una app para jugar desde tu celular.",
	},
	{
		icon: faPencilRuler,
		title: "Diseño",
		description:
			"Un diseño innovador e intuitivo para que puedas disfrutar de la mejor manera nuestro juego.",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="xl:p-6">
			<div className="w-[42px] h-[42px] bg-white bg-opacity-20 text-white rounded-full text-[32px] inline-flex items-center justify-center mb-6">
			{<FontAwesomeIcon icon={feature.icon} className="text-white filter contrast-200" style={{ imageRendering: "pixelated" }} />} 

			</div>
			<h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
			<p>{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature1 = () => {
	return (
		<section className="">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 text-center gap-y-6 md:gap-x-6">
					{features.map((feature, i) => (
						<div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
							<FeatureItem feature={feature} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Feature1;
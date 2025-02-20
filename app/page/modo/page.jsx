"use client"
import React from "react";
import BotonComenzar from "@/components/modo/botonComenzar";
const cardsData = [
	{
		id: 1,
		bgClass: "bg-orange-400",
		imageSrc: "/image/infantil2.webp",
		title: "Infantíl",
		buttonClass: "text-orange-500",
		buttonLabel: "Jugar",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact1.png",
	},
	{
		id: 2,
		bgClass: "bg-red-600",
		imageSrc: "/image/cinefilo2.webp",
		title: "Cinéfilo",
		buttonClass: "text-red-600",
		buttonLabel: "Jugar",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact2.png",
	},
	{
		id: 3,
		bgClass: "bg-blue-900",
		imageSrc: "/image/friki3.jpg",
		title: "Friki",
		buttonClass: "text-white",
		buttonLabel: "Jugar",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact.png",
	},
];

const Modo = () => {
	return (
		<section className="ezy__epcategory11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6">
					<div className="w-full lg:w-1/2 ">
						<div className="gap-6 p-0">
							{cardsData.slice(0, 2).map((card) => (
								<div key={card.id}>
									<div
										className={`${card.bgClass} rounded-xl min-h-[280px] text-white flex items-center relative p-6 lg:p-12 mb-6 z-10 bg-cover bg-center transform shadow-xl transition duration-300 hover:scale-105`}
										style={{ backgroundImage: `url(${card.imageSrc})` }}
									>
										<div className="grid grid-cols-12">
											<div className="col-span-6">
												<h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
													{card.title}
												</h1>
											
												<BotonComenzar dificultad={card.id} />
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="w-full lg:w-1/2">
						<div
							className={`${cardsData[2].bgClass} rounded-xl min-h-[585px] text-white flex items-center relative p-6 lg:p-12 z-10 bg-cover bg-center transform shadow-xl transition duration-300 hover:scale-105`}
							style={{ backgroundImage: `url(${cardsData[2].imageSrc})` }}
						>
							<div className="grid grid-cols-12">
								<div className="col-span-6">
									<h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
										{cardsData[2].title}
									</h1>
									
									<BotonComenzar dificultad={cardsData[2].id}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Modo;

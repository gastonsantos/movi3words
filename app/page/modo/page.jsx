"use client"
import React from "react";
import BotonComenzar from "@/components/modo/botonComenzar";
import Footer from "@/components/footer/footer";
import styles from '@/styles/home.module.css';
//import styles from '../../../styles/home.module.css';
const cardsData = [
	{
		id: 1,
		bgClass: "bg-orange-400",
		imageSrc: "/image/infantil.webp",
		title: "Infantíl",
		buttonClass: "text-orange-500",
		buttonLabel: "Jugar",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact1.png",
	},
	{
		id: 2,
		bgClass: "bg-red-600",
		imageSrc: "/image/accion.webp",
		title: "Variado",
		buttonClass: "text-red-600",
		buttonLabel: "Jugar",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact2.png",
	},
	{
		id: 3,
		bgClass: "bg-blue-900",
		imageSrc: "/image/cinefilo.webp",
		title: "Cinéfilo",
		buttonClass: "text-white",
		buttonLabel: "Jugar",
		childImageSrc: "https://cdn.easyfrontend.com/pictures/child-abstact.png",
	},
];

const Modo = () => {
	return (
		<div className={`${styles.container} `}>

			<div>
				<div className="min-h-[75vh] mt-10" style={{ backgroundColor: "#282447" }}>
					<section className={`${styles.section} py-14 overflow-hidden z-10`} style={{ backgroundColor: "#282447" }}>


						<div className="container px-4 mx-auto mt-10">

							<div className="flex flex-col lg:flex-row gap-6">

								<div className="w-full lg:w-1/2">

									<div className="gap-6 p-0">
										{cardsData.slice(0, 2).map((card) => (
											<div key={card.id}>
												<div
													className={`${card.bgClass} rounded-xl min-h-[280px] text-white flex items-center relative p-6 lg:p-12 mb-6 z-10 bg-cover bg-center transform shadow-xl transition duration-300 hover:scale-105`}
													style={{ backgroundImage: `url(${card.imageSrc})` }}
												>
													
													<div className="grid grid-cols-12 z-10">
														<div className="col-span-6">
															<h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
																{card.title}
															</h1>

															<BotonComenzar dificultad={card.id} />
														</div>
													</div>
													<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
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
											<div className="col-span-6 z-10">
												<h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
													{cardsData[2].title}
												</h1>

												<BotonComenzar dificultad={cardsData[2].id} />

											</div>
										</div>
										<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
									</div>

								</div>

							</div>

						</div>


					</section>
					<svg viewBox="0 0 1440 320" className={styles.wave} preserveAspectRatio="none" style={{ backgroundColor: "#263e73" }}>
						<path
							fill="#282447"
							fillOpacity="1"
							d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
						>
							<animate
								attributeName="d"
								dur="5s"
								repeatCount="indefinite"
								values="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                        M0,160L48,170C96,180,192,200,288,210C384,220,480,220,576,200C672,180,768,140,864,120C960,100,1056,100,1152,120C1248,140,1344,180,1392,200L1440,220L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                        M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
							/>
						</path>
					</svg>
				</div>

			</div>
			<div className={styles.waveContainer}>
				<Footer />
			</div>
		</div>

	);
};
export default Modo;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import features from "@/data/features";


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
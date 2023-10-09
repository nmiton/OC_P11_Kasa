import React, { useState } from "react";
import ArrowCarrousel from "../../assets/img/arrow-carrousel.png";

export default function Carrousel(props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	/**
	 * Function to show next img
	 */
	const goToNextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % props.pictures.length);
	};
	/**
	 * Function to show previous img
	 */
	const goToPrevImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1));
	};

	const currentPage = currentIndex + 1;
	const totalPages = props.pictures.length;

	return (
		<div className="carrousel">
			<img src={props.pictures[currentIndex]} alt="Carrousel" />
			{totalPages > 1 && (
				<>
					<span className="carrousel__pagination">
						{currentPage}/{totalPages}
					</span>
					<img src={ArrowCarrousel} alt="Previous" className="carrousel__arrow carrousel__prev" onClick={goToPrevImage} />
					<img src={ArrowCarrousel} alt="Next" onClick={goToNextImage} className="carrousel__arrow carrousel__next" />
				</>
			)}
		</div>
	);
}

import React from "react";
import starActive from "../../assets/img/star-active.png";
import star from "../../assets/img/star.png";

export default function Rate(props) {
	const numberOfStars = 5;

	const stars = Array.from({ length: numberOfStars }, (_, index) => (
		<img key={index} src={index < props.rating ? starActive : star} alt="star" className={index < props.rating ? "star__active" : "star"} />
	));

	return <div className="rental__rate">{stars}</div>;
}

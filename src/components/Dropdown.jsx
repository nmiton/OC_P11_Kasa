import React, { useState } from "react";
import Arrow from "../assets/img/arrow-dropdown.png";

export default function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(false);

	/**
	 * Function to update isOpen
	 */
	const handleClickDropdown = () => {
		setIsOpen(!isOpen);
	};

	if (isOpen) {
		return (
			<div className="dropdown" onClick={handleClickDropdown}>
				<div className="dropdown__header">
					<div className="dropdown__label">{props.label}</div>
					<img src={Arrow} alt="Arrow" className="dropdown__icon" />
				</div>
				<div className="dropdown__body">
					{Array.isArray(props.details) ? (
						props.details.map((item, index) => (
							<div className="dropdown__item" key={index}>
								{item}
							</div>
						))
					) : (
						<div className="dropdown__item">{props.details}</div>
					)}
				</div>
			</div>
		);
	} else {
		return (
			<div className="dropdown" onClick={handleClickDropdown}>
				<div className="dropdown__header">
					<div className="dropdown__label">{props.label}</div>
					<img src={Arrow} alt="Arrow" className="dropdown__icon icon__close" />
				</div>
			</div>
		);
	}
}

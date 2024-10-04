import React, { useState } from "react";
import Arrow from "../assets/img/arrow-dropdown.png";

export default function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
			<div className="dropdown__header">
				<div className="dropdown__label">{props.label}</div>
				<img src={Arrow} alt="Arrow" className={`dropdown__icon ${isOpen ? "" : "icon__close"}`} />
			</div>

			{isOpen && (
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
			)}
		</div>
	);
}

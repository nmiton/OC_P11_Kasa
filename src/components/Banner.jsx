import React from "react";

export default function Banner({ src, alt, children }) {
	return (
		<div className="banner">
			<img src={src} alt={alt} />
			<span>{children}</span>
		</div>
	);
}

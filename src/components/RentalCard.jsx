import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RentalCard(props) {
	// eslint-disable-next-line no-unused-vars
	const [rental, setRental] = useState(props.rental);
	const navigate = useNavigate();

	useEffect(() => {
		setRental(props.rental);
	}, [props.rental]);

	return (
		<div className="rental__card" onClick={() => navigate(`/logement/${rental.id}`)}>
			<img className="rental__cover" alt={rental.title} src={rental.cover} />
			<span className="rental__title">{rental.title}</span>
		</div>
	);
}

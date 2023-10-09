import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RentalCard(props) {
	// eslint-disable-next-line no-unused-vars
	const [rental, setRental] = useState(props.rental);
	const navigate = useNavigate();

	useEffect(() => {
		setRental(props.rental);
	}, [props.rental]);

	/**
	 * Function to redirect to rental page
	 */
	const handleClickRentalCard = () => {
		navigate(`/logement/${rental.id}`);
	};

	return (
		<div className="rental__card" onClick={handleClickRentalCard}>
			<img className="rental__cover" alt={rental.title} src={rental.cover} />
			<span className="rental__title">{rental.title}</span>
		</div>
	);
}

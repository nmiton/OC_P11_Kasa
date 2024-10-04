import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carrousel from "./Rental/Carrousel";
import Title from "./Rental/Title";
import Host from "./Rental/Host";
import Tags from "./Rental/Tags";
import Rate from "./Rental/Rate";
import Dropdown from "./Dropdown";
import ErrorPage from "../pages/ErrorPage";

export default function Rental() {
	const { id } = useParams();
	const [rental, setRental] = useState(null);

	/**
	 * UEF to find rental in data
	 */
	useEffect(() => {
		logements.forEach((rental) => {
			if (rental.id === id) setRental(rental);
		});
	}, [id]);

	if (rental) {
		return (
			<div className="rental__item">
				<Carrousel pictures={rental.pictures} />
				<div className="rental__infos">
					<div className="rental__infos__location">
						<Title title={rental.title} location={rental.location} />
						<Tags tags={rental.tags} />
					</div>
					<div className="rental__infos__host">
						<Host host={rental.host} />
						<Rate rating={rental.rating} />
					</div>
					<Dropdown label="Description" details={rental.description} />
					<Dropdown label="Équipements" details={rental.equipments} />
				</div>
			</div>
		);
	} else {
		return <ErrorPage />;
	}
}

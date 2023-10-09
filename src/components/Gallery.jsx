import RentalCard from "./RentalCard";
import logements from "../data/logements.json";

export default function Gallery() {
	return (
		<div className="gallery__rentals">
			{logements?.map((rental) => (
				<RentalCard key={rental.id} rental={rental} />
			))}
		</div>
	);
}

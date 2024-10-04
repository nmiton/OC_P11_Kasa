import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

export default function AboutUs() {
	const detailsFiabilite =
		"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
	const detailsRespect =
		"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

	const detailsService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";

	const detailsSecurite =
		"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

	return (
		<div className="about__page">
			<Banner src="assets/img/banner_img_2.png" alt="Chez vous, partout et ailleurs" />
			<div className="dropdown__container">
				<Dropdown label="Fiabilité" details={detailsFiabilite} />
				<Dropdown label="Respect" details={detailsRespect} />
				<Dropdown label="Service" details={detailsService} />
				<Dropdown label="Sécurité" details={detailsSecurite} />
			</div>
		</div>
	);
}

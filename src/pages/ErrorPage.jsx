import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<section className="error__page">
			<span>404</span>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/">Retourner sur la page d'accueil</Link>
		</section>
	);
}

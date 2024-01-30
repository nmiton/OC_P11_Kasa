import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";

export default function Header() {
	const navigate = useNavigate();

	/**
	 * Function on click icon
	 */
	const handleClickIcon = () => {
		navigate("/");
	};

	return (
		<header>
			<img src={Logo} alt="Logo Kasa" className="header__img" onClick={handleClickIcon} />

			<nav className="header__navigation">
				<NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : null)}>
					Accueil
				</NavLink>
				<NavLink to="/a-propos" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : null)}>
					A Propos
				</NavLink>
			</nav>
		</header>
	);
}

import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";

export default function Header() {
	const navigate = useNavigate();

	return (
		<header>
			<img src={Logo} alt="Logo Kasa" className="header__img" onClick={() => navigate("/")} />

			<nav className="header__navigation">
				<ul>
					<li>
						<NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink to="/a-propos" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
							A Propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

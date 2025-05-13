import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<span className=" navtext navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn-navbar">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container h-100 vh-100">
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="me-5 text-center">
					<img
						className="imageHome"
						src="https://th.bing.com/th/id/OIP.CxsXZmv7nXLNR7ScxZowrQHaHO?w=217&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
						alt="Characters"
					/>
					<br />
					<Link to="/Personajes">
						<button className="buttonHome">Characters</button>
					</Link>
				</div>
				<div className="me-5 text-center">
					<img
						className="imageHome"
						src="https://th.bing.com/th/id/OIP.VoLqOLslwhAjajC13PPtygAAAA?rs=1&pid=ImgDetMain"
						alt="Planets"
					/>
					<br />
					<Link to="/planetas">
						<button className="buttonHome">Planets</button>
					</Link>
				</div>
				<div className="me-5 text-center">
					<img
						className="imageHome"
						src="https://th.bing.com/th/id/OIP.-30NwPWQJI6bFqA0WZ55_wAAAA?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
						alt="Vehicles"
					/>
					<br />
					<Link to="/vehículos">
						<button className="buttonHome">Vehicles</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
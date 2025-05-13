import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

export const Demo = () => {

  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container">
      <h1 className="mt-3">Favorites</h1>
      <div className="row mt-3">
        {store.favorites.length > 0 ? (
          store.favorites.map((item, index) => (
            <div className="col-4" key={index}>
              <Card name={item.name} link={item.link} />
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>

      <Link to="/">
        <button className="btn">Back home</button>
      </Link>
    </div>
  );
};

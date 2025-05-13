import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

const Card = ({ name, link }) => {

  const { store, dispatch } = useGlobalReducer();


  const isFavorite = store.favorites.some(item => item.name === name);


  const marcarComoFavorito = () => {
    if (isFavorite) {
      dispatch({ type: 'Remove', payload: { name } })
    } else {
      dispatch({ type: 'Add', payload: { name, link } })
    }
  }


  return (
    <div className="card" style={{ width: '18rem', marginBottom: '30px' }}>
      <img src="https://th.bing.com/th/id/OIP.NXsMkejiyMC2ZbEpKxeuPgHaEe?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card’s content.
        </p>
        <div className="d-flex justify-content-between">
          <Link to={link} className="btn">
            <strong>Read more!</strong>
          </Link>
          <Link className="botonFav" onClick={marcarComoFavorito}>
            {isFavorite ? "❤️" : "🤍"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
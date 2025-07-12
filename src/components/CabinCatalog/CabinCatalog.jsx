import React from 'react';
import { Link } from 'react-router-dom';
import './CabinCatalog.css';

const cabins = [
  {
    id: 1,
    name: "Cabaña La Montaña",
    price: 1200,
    detail: "Acogedora cabaña en el bosque con chimenea y jacuzzi",
    image: "/cabin1.jpeg",
  },
  {
    id: 2,
    name: "Cabaña Lago Azul",
    price: 900,
    detail: "Vista al lago, ideal para descansar en familia",
    image: "/cabin2.jpeg",
  },
  {
    id: 3,
    name: "Cabaña Las Flores",
    price: 1500,
    detail: "Perfecta para relajarse rodeado de naturaleza",
    image: "/cabin3.jpg",
  },
  {
    id: 4,
    name: "Cabaña Sol y Arena",
    price: 1100,
    detail: "A pasos de la playa, con todas las comodidades",
    image: "/cabin4.jpg",
  },
  {
    id: 5,
    name: "Cabaña Nido del Águila",
    price: 1350,
    detail: "Ubicada en lo alto de la montaña, con vistas panorámicas",
    image: "/cabin5.jpg",
  }
];

const CabinCatalog = () => {
  return (
    <div className="catalog-container">
      {cabins.map(cabin => (
        <Link to={`/cabanas/${cabin.id}`} key={cabin.id} className="cabin-card-link">
          <div className="cabin-card">
            <img src={cabin.image} alt={cabin.name} className="cabin-image" />
            <div className="cabin-info">
              <h3>{cabin.name}</h3>
              <p>{cabin.detail}</p>
              <span className="price">${cabin.price} MXN / noche</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CabinCatalog;

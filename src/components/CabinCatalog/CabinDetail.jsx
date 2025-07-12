import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaWifi, FaHotTub, FaUtensils, FaTree, FaSwimmer } from 'react-icons/fa';

const cabins = [
  {
    id: 1,
    name: "Cabaña La Montaña",
    price: 1200,
    detail: "Acogedora cabaña en el bosque con chimenea y jacuzzi",
    image: "/cabin1.jpeg",
    description: "Hermosa cabaña equipada con todo lo necesario para una escapada romántica en el bosque. Incluye cocina, WiFi, y jacuzzi privado.",
    features: [
      { icon: <FaHotTub />, text: 'Jacuzzi privado' },
      { icon: <FaWifi />, text: 'WiFi gratis' },
      { icon: <FaUtensils />, text: 'Cocina equipada' },
    ]
  },
  {
    id: 2,
    name: "Cabaña Lago Azul",
    price: 900,
    detail: "Vista al lago, ideal para descansar en familia",
    image: "/cabin2.jpeg",
    description: "Amplia cabaña con terraza frente al lago, perfecta para días en familia. Parrilla, hamacas y juegos disponibles.",
    features: [
      { icon: <FaMapMarkerAlt />, text: 'Frente al lago' },
      { icon: <FaUtensils />, text: 'Parrilla disponible' },
      { icon: <FaTree />, text: 'Hamacas y juegos' },
    ]
  },
  {
    id: 3,
    name: "Cabaña Las Flores",
    price: 1500,
    detail: "Perfecta para relajarse rodeado de naturaleza",
    image: "/cabin3.jpg",
    description: "Relájate rodeado de vegetación, senderos y tranquilidad. Ideal para quienes buscan desconectarse.",
    features: [
      { icon: <FaTree />, text: 'Senderos naturales' },
      { icon: <FaWifi />, text: 'WiFi gratis' },
      { icon: <FaHotTub />, text: 'Jacuzzi' },
    ]
  },
  {
    id: 4,
    name: "Cabaña Sol y Arena",
    price: 1100,
    detail: "A pasos de la playa, con todas las comodidades",
    image: "/cabin4.jpg",
    description: "Disfruta la brisa marina en esta cabaña ubicada a pocos metros del mar. Incluye aire acondicionado y cocina completa.",
    features: [
      { icon: <FaSwimmer />, text: 'A pasos de la playa' },
      { icon: <FaUtensils />, text: 'Cocina completa' },
      { icon: <FaWifi />, text: 'WiFi' },
    ]
  },
  {
    id: 5,
    name: "Cabaña Nido del Águila",
    price: 1350,
    detail: "Ubicada en lo alto de la montaña, con vistas panorámicas",
    image: "/cabin5.jpg",
    description: "Espectaculares vistas desde la cima. Perfecta para observadores de aves y amantes de la aventura.",
    features: [
      { icon: <FaMapMarkerAlt />, text: 'Vista panorámica' },
      { icon: <FaTree />, text: 'Observación de aves' },
      { icon: <FaHotTub />, text: 'Jacuzzi' },
    ]
  }
];

const CabinDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cabin = cabins.find(c => c.id === parseInt(id));

  if (!cabin) return <h2 style={{ padding: '2rem' }}>Cabaña no encontrada</h2>;

  const handleReservation = () => {
    const existingReservations = JSON.parse(localStorage.getItem('userReservations')) || [];

    const newReservation = {
      id: Date.now().toString(),
      cabinName: cabin.name,
      arrivalDate: new Date().toISOString().split('T')[0],
      arrivalTime: '15:00',
      nights: 1,
      photo: cabin.image,
      description: cabin.detail,
    };

    localStorage.setItem('userReservations', JSON.stringify([...existingReservations, newReservation]));

    alert(`Has reservado: ${cabin.name}`);

    navigate('/reservas');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Link to="/cabanas" style={{ marginBottom: '1rem', display: 'inline-block', color: '#16a085', textDecoration: 'none', fontWeight: '600' }}>
        ← Volver al catálogo
      </Link>

      <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem', color: '#2c3e50' }}>{cabin.name}</h1>
      <p style={{ fontStyle: 'italic', color: '#7f8c8d', marginBottom: '1rem' }}>{cabin.detail}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: '1 1 300px', maxWidth: '400px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
          <img
            src={cabin.image}
            alt={cabin.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div style={{ flex: '2 1 400px' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#34495e' }}>
            {cabin.description}
          </p>

          <h3 style={{ color: '#16a085', fontWeight: '700', marginBottom: '1rem' }}>
            Precio: ${cabin.price} MXN por noche
          </h3>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {cabin.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#e0f2f1',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  color: '#00796b',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'default',
                  userSelect: 'none',
                }}
              >
                <span style={{ marginRight: '0.5rem', fontSize: '1.3rem' }}>{feature.icon}</span> {feature.text}
              </div>
            ))}
          </div>

          <button
            onClick={handleReservation}
            style={{
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              padding: '0.9rem 2rem',
              fontSize: '1.1rem',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 5px 15px rgba(39, 174, 96, 0.5)',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#219150')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#27ae60')}
            aria-label={`Reservar ${cabin.name}`}
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CabinDetail;

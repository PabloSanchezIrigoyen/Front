import React, { useEffect, useState } from 'react';

const UserReservations = () => {
  const [reservations, setReservations] = useState([]);

  // Carga inicial desde localStorage
  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('userReservations'));
    if (savedReservations && savedReservations.length > 0) {
      setReservations(savedReservations);
    }
  }, []);

  // Guarda cambios en localStorage
  useEffect(() => {
    localStorage.setItem('userReservations', JSON.stringify(reservations));
  }, [reservations]);

  const handleDelete = (id) => {
    const confirmed = window.confirm('¿Seguro que quieres eliminar esta reserva?');
    if (confirmed) {
      setReservations(reservations.filter(res => res.id !== id));
    }
  };

  const handleEditNights = (id, newNights) => {
    if (newNights < 1) return; // mínimo 1 noche
    setReservations(reservations.map(res => res.id === id ? {...res, nights: newNights} : res));
  };

  if (reservations.length === 0) {
    return (
      <p style={{padding: '2rem', textAlign: 'center', fontSize: '1.2rem'}}>
        No tienes reservas aún. <br />
        <a href="/cabanas" style={{color: '#16a085', textDecoration: 'underline'}}>
          ¡Explora nuestras cabañas!
        </a>
      </p>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Mis Reservas</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {reservations.map((res) => (
          <div key={res.id} style={{
            display: 'flex',
            gap: '1rem',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}>
            <img
              src={res.photo}
              alt={res.cabinName}
              style={{ width: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem', flex: '1' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{res.cabinName}</h3>
              <p><strong>Fecha de llegada:</strong> {res.arrivalDate}</p>
              <p><strong>Hora de llegada:</strong> {res.arrivalTime}</p>
              
              <p>
                <strong>Noches:</strong>{' '}
                <input
                  type="number"
                  min={1}
                  value={res.nights}
                  onChange={(e) => handleEditNights(res.id, parseInt(e.target.value))}
                  style={{
                    width: '60px',
                    padding: '3px 6px',
                    fontSize: '1rem',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginLeft: '0.5rem'
                  }}
                />
              </p>

              <p style={{ marginTop: '1rem', color: '#555' }}>{res.description}</p>
              
              <button
                onClick={() => handleDelete(res.id)}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = '#e74c3c')}
              >
                Eliminar Reserva
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReservations;

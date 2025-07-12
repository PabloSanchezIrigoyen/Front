import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';

const USER_STORAGE_KEY = 'userProfileData';

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    image: null,
  });

  // Cargar datos al iniciar (si existen en localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    alert('Perfil actualizado correctamente');
    navigate('/'); // Redirigir al inicio
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-button"
          onClick={() => navigate('/')}
          aria-label="Cerrar"
        >
          ×
        </button>

        <h2>Mi Perfil</h2>

        <div className="profile-image-container">
          <label htmlFor="image-upload" className="image-label">
            {user.image ? (
              <img src={user.image} alt="Preview" className="profile-image" />
            ) : (
              <div className="placeholder-image">Subir Foto</div>
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={user.phone}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="save-button">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default UserProfile;

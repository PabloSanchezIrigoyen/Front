import React, { useState } from "react";
import "./LoginMultiForm.css";

const LoginMultiForm = ({ onLoginSuccess }) => {
  const [activeForm, setActiveForm] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const adminUser = { username: "admin", password: "123" };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminUser.username && password === adminUser.password) {
      setError("");
      onLoginSuccess();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Usuario registrado exitosamente (demo)");
    setActiveForm("login");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    alert("Correo de recuperación enviado (demo)");
    setActiveForm("login");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        {/* Aquí va el logo dentro del JSX */}
        <img src="/public/Logo.png" alt="Logo" className="form-logo" />

        <div className="form-toggle">
          <button
            onClick={() => setActiveForm("login")}
            className={activeForm === "login" ? "active" : ""}
          >
            Login
          </button>
          <button
            onClick={() => setActiveForm("register")}
            className={activeForm === "register" ? "active" : ""}
          >
            Registro
          </button>
          <button
            onClick={() => setActiveForm("forgot")}
            className={activeForm === "forgot" ? "active" : ""}
          >
            ¿Olvidaste?
          </button>
        </div>

        {activeForm === "login" && (
          <form onSubmit={handleLogin}>
            <label>Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Iniciar sesión</button>
          </form>
        )}

        {activeForm === "register" && (
          <form onSubmit={handleRegister}>
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Registrarse</button>
          </form>
        )}

        {activeForm === "forgot" && (
          <form onSubmit={handleForgot}>
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Enviar recuperación</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginMultiForm;

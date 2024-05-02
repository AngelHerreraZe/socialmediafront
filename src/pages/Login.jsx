import React, { Component, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);
  const token = localStorage.getItem("clonstagram-token")
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect (() => {
    if(token) {
      navigate("/home")
    }
  },[token])

  const submit = (data) => {
    if (login === false) {
      axios
        .post("https://socialmedia-production-6fef.up.railway.app/api/v1/users", data)
        .then((res) => navigate("/"))
        .catch(error => console.log(error));
    } else {
        axios.post("https://socialmedia-production-6fef.up.railway.app/api/v1/users/login", data)
        .then(res => {
            localStorage.setItem("clonstagram-token", res.data.token)
            navigate("/")
        })
        .catch(error => {
            if (error.response.status === 401) {
                alert("Credenciales incorrectas")
            } else {
                console.log(error);
            }
        })
    }
  };

  const changeView = () => {
    setLogin(!login);
  };

  return (
    <div className="home">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <h2 style={{marginTop: "2rem"}}>Regístrate para ver fotos y videos de tus amigos</h2>
      </header>
      <main>
        {login === true ? (
          <form className="form login" onSubmit={handleSubmit(submit)}>
            <input
              className="field"
              type="text"
              {...register("userInfo", { required: true })}
              placeholder="Username or email"
            />
            <input
              className="field"
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <input className="btn-send" type="submit" value="Inicia sesión" />
          </form>
        ) : (
          <form className="form" onSubmit={handleSubmit(submit)}>
            <input
              className="field"
              type="text"
              {...register("username", { required: true })}
              placeholder="Username"
            />
            <input
              className="field"
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            <input
              className="field"
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            <input
              className="field"
              type="text"
              {...register("lastname", { required: true })}
              placeholder="Last name"
            />
            <input
              className="field"
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <p className="register-announce">
              Es posible que las personas que usan nuestro servicio hayan subido
              tu información de contacto a Instagram.{" "}
              <span className="link">Más Información</span>
            </p>
            <p className="register-announce">
              Al registrarte, aceptas nuestras{" "}
              <span className="link">Condiciones</span>, la{" "}
              <span className="link">Política de privacidad</span> y la{" "}
              <span className="link">Política de cookies</span>
            </p>
            <input className="btn-send" type="submit" value="Registrarte" />
          </form>
        )}
        <p className="text-login">
          {login ? "¿No tienes una cuenta? " : "¿Tienes una cuenta? "}{" "}
          <span className="link" onClick={() => changeView()}>{login ? "Regístrate" : "Inicia Sesión"}</span>
        </p>
      </main>
    </div>
  );
};

export default Login;
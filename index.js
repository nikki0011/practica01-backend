// const express = require('express')
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from 'path';
import { fileURLToPath } from "url";


const app = express();
const PORT = 3000; 

//agregar los middlewares
app.use(cors()); // permite conexiones remotas
app.use(express.json()); //permite interpretar los datos que llegan en la solicitud en formato json
app.use(morgan("dev"));
const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname + '/public')
// cargar eñ siguiente archivo en forma estatica
app.use(express.static(__dirname + '/public'))


console.log("Este backend ya escucha");

// endpoints
//http://localhost:3000/api/saludo
app.get("/api/saludo", (req, res) => {
  console.log("me llego una solicitud nueva");
  const comida = ["manzana", "pera", "otra manzana"];
  res.json({
    mensaje: "Conexion creada",
    saludo: "Bienvenido a nuestro backend",
    comida,
  });
});
//http://localhost:3000/api/productos
app.get("/api/productos", (req, res) => {
  console.log("me llego una solicitud nueva");
  const productos = ["Cappuccino", "Medialuna", "Tostado de jamón y queso"];
  res.json({
    productos,
  });
});
//http://localhost:3000/api/promo
app.get("/api/promo", (req, res) => {
  console.log("me llego una solicitud nueva");
  res.json("¡Hoy 2x1 en licuados de frutilla!");
});
//http://localhost:3000/api/horarios
app.get("/api/horarios", (req, res) => {
  console.log("me llego una solicitud nueva");
  const horarios =`
  De lunes a sabados de 08.00hs a 02.00hs- Domingos de 08.00hs a 00.00hs` 
  res.json({
    horarios},
  );
});

app.listen(PORT, () => {
  console.info(`Servidor activo en el puerto ${PORT}`);
});

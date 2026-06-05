// const express = require('express')
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

//agregar los middlewares
app.use(cors())// permite conexiones remotas
app.use(express.json())//permite interpretar los datos que llegan en la solicitud en formato json
// agregar el otro middleware morgan

console.log('Este backend ya escucha')

app.listen(PORT,()=>{console.info(`Servidor activo en el puerto ${PORT}`)})
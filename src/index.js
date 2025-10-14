import express from "express";
import { connectDB } from "./db.js";
import { Card } from "../models/cards.js";

connectDB();
const app = express();

app.use(express.json());

app.post("/CreateCards", async (req, res) => {
    try {
        const card = await Card.create(req.body);
        console.log(card);
        res.status(201).send("Card created succesfully")
    } catch (error) {
        console.log(error);
        
    }
} )

app.get("/getAllCards", async (req, res) => {
    try {
        const card = await Card.find();
        res.status(200).json(card).send("Card created succesfully");
    } catch (error) {
        console.log(error);
        
    }
} )

app.get("/getCard/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const cards = await Card.findById(req.params.id);
        res.status(200).json(cards);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
} )

app.delete("/deleteCard/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const cards = await Card.deleteOne(req.params.id);
        res.status(200).json(cards);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
} )



app.post("/send", (req, res) => {
    const {user, email} = req.body;
    // por defaul hace una destructuracion JSONN
    //{"user": "UnUsuario"}
    console.log("Datos recibidos: " + user + " " + email);
    res.status(200).send("Data received succesfuly");
})


app.get("/hellow", (req, res) => {
    res.status(200).send("Hello World desde Node.js");
});

app.get("/bonjour", (req, res) => {
    res.status(200).send("Bonjour tote le mond!");
});

app.listen(3000, () => {
    console.log("Servidor Ejecutandose en http://localhost:3000");
});
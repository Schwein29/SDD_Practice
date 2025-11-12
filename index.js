import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/cards.js";
import cors from "cors";
import { Cal } from "./models/cal.js";

const app = express();
app.use(cors());
connectDB();


app.use(express.json());

app.post("/createCards", async (req, res) => {
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
        res.status(200).json(card);
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
        const { id } = req.params;
        const deletedCard = await Card.findByIdAndDelete(id);
        res.status(200).json({ message: "Card deleted successfully" });
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
} )

app.patch("/updateCard/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCard = await Card.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        });
        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
} )

app.put("/updateCard/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, link, description } = req.body;

        if (!name || !link) {
         return res.status(400).json({ message: "Los campos 'name' y 'link' son obligatorios." });
        }

        const card = await Card.findById(id);
        if (!card) {
        return res.status(404).json({ message: "Card no encontrada." });
        }

        card.name = name;
        card.link = link;

        if (Object.hasOwn(req.body, "description")) {
        card.description = description;
        } else {
        card.description = undefined;
        }

        await card.save();

        res.json(card);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
} )


app.get("/endpoints", (req, res) => {
  const template = [
    {
      path: "https://sdd-practice.onrender.com/getAllCards",
      method: "GET",
      description: "Obtiene todas las tarjetas almacenadas en la base de datos"
    },
    {
      path: "https://sdd-practice.onrender.com/getCard/:id",
      method: "GET",
      description: "Obtiene una tarjeta específica por su ID"
    },
    {
      path: "https://sdd-practice.onrender.com/createCards",
      method: "POST",
      description: "Crea una nueva tarjeta en la base de datos"
    },
    {
      path: "https://sdd-practice.onrender.com/updateCard/:id",
      method: "PUT",
      description: "Reemplaza completamente una tarjeta por ID"
    },
    {
      path: "https://sdd-practice.onrender.com/updateCard/:id",
      method: "PATCH",
      description: "Actualiza parcialmente una tarjeta existente por ID"
    },
    {
      path: "https://sdd-practice.onrender.com/deleteCard/:id",
      method: "DELETE",
      description: "Elimina una tarjeta existente por ID"
    }
  ];

  res.status(200).json({
    baseURL: "https://sdd-practice.onrender.com",
    endpoints: template
  });
});



app.post("/send", (req, res) => {
    const {user, email} = req.body;
    // por defaul hace una destructuracion JSONN
    //{"user": "UnUsuario"}
    console.log("Datos recibidos: " + user + " " + email);
    res.status(200).send("Data received succesfuly");
})


app.get("/hello", (req, res) => {
    res.status(200).send("Hello World desde Node.js");
});

app.get("/bonjour", (req, res) => {
    res.status(200).send("Bonjour tote le mond!");
});

app.post("/addCal", async (req, res) => {
    try {
        const cal = await Cal.create(req.body);
        console.log(cal);
        res.status(201).send("Student cal add")
    } catch (error) {
        console.log(error);
        
    }
} )

app.get("/getAllCal", async (req, res) => {
    try {
        const cal = await Cal.find();
        res.status(200).json(cal);
    } catch (error) {
        console.log(error);
        
    }
} )

app.listen(3000, () => {
    console.log("Servidor Ejecutandose en http://localhost:3000");
});
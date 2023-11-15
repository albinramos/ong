import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import router from "./routes/router.js";

dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie: {
        secure:false,
        maxAge: 1000 * 60 * 20
    }
}))

// Configura el middleware para servir archivos estáticos desde el directorio "public".
app.use(express.static("public"));
//Vistas

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home");
});

app.use("/",router);


app.listen(process.env.PORT, () => console.log("Servidor web en marcha en puerto 3012."));
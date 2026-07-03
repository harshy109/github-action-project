const express = require("express")
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello from Harshy's server")
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on my ${PORT}`)
})
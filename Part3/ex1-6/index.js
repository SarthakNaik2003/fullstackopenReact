const express = require("express")
const app = express();
const router = require("./router/auth-route.js")

app.use(express.json())


app.use("/api", router);



const Port = 3001;

app.listen(Port, () => {
    console.log(`server running to ${Port} port`);
})
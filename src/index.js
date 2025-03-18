import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);

    })
})
.catch((err) => {
    console.log("MONGO DB Connections Failed !!!", err);
})

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the VideoTube API!" });
// });
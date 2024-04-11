const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const postsRouter = require('./routes/posts.router')
const authRouter = require('./routes/auth.router')

app.use("/api/v1/posts", postsRouter)
app.use("/api/v1/auth", authRouter)

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server Working Fine" });
});

const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
    next();
});

app.listen(PORT, () => {
    console.log("Server is running....")
})
const express = require("express");
const cors = require('cors');
const db = require("./db");

const app = express();

app.use(express.json());

app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://kuppi.s3-website-us-east-1.amazonaws.com"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

app.get("", async (req, res) => {
    //const cars = ["Saab", "Volvo", "BMW"];
    db.query("select name from new_table", (err, result) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(result);
        }
    })
    //res.send(cars);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
const express = require("express");
const cors = require('cors');
// const db = require("../helpers/db");

const app = express();

app.use(express.json());

app.get("", async (req, res) => {
    const cars = ["Saab", "Volvo", "BMW"];
    // db.query("select * from Employee", (err, result) => {
    //     if (err) {
    //         res.json({ error: err });
    //     } else {
    //         db.query("insert into activity(IP,userId,userName,log) values(?,?,?,?)", [req.ip, req.user.id, req.user.username, "view all Employee"], (err, response) => { });
    //         res.json(result);
    //     }
    // })
    res.send(cars);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
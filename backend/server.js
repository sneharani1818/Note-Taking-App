const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require('mongoose');
const userModel = require("./modals/user.js");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello11222")
});

app.post('/', async (req, res) => {
    console.log(req.body)
    const user = await userModel.create({ email: req.body.email, password: req.body.password, username: req.body.username, contact: req.body.contact });
    res.json({
        success: true,
        msg: "account created"
    })
});

app.post('/login', async (req, res) => {
    const user = await userModel.find({ email: req.body.email })
    var token = jwt.sign({ email: user[0].email }, 'hashingPassword');
    if (req.body.email == user[0].email && req.body.password == user[0].password) {
        res.json({
            success: true,
            token: token,
            msg: 'Loging succesfull'
        })
    }
    else {
        res.json({success:false, msg:"Invalid email or password"})
    }
})

mongoose.connect('mongodb://localhost:27017/notetaking').then(() => {
    console.log('-------- Database Connected --------');
});

app.listen(3001, () => {
    console.log('----------- App Started -----------')
});
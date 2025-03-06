import express, { json } from 'express';
import User from '../db/models/user.js'

const app = express();
app.use(json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send({message: "hello backend"});
})

app.get('/api', (req, res) => {
    res.send({message: "hello api"});
})

app.post('/api/login', (req, res) => {
    res.send({message: "hello api login"});
})

app.put('/api/user', async (req, res) => {
  const { username, password } = req.body;
    try {
        await User.create({username, password});
        res.send({message: "user created"})
    } catch (error) {
        res.status(403).send({message: "user not created"})
    }
})

const port = 6543;
app
.listen(port, () => {
    console.log(`backend is running on port: ${port}`)
})
.on('error', (e) => {
    console.error(`backend failed to run on port: ${port}`)
})
import express, { json } from 'express';
import { userRouter } from '../router/routers.js';
import sequelize from '../db/sequelize.js';

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send({message: "hello backend"});
})

app.get('/api', (req, res) => {
    res.send({message: "hello api"});
})

const port = process.env.PORT;
app
.listen(port, () => {
    console.log(`backend is running on port: ${port}`)
})
.on('error', (e) => {
    console.error(`backend failed to run on port: ${port}`)
})
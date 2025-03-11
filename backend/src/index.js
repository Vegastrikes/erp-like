import express, { json } from 'express';
import session from 'express-session';
import { userRouter } from '../router/routers.js';

const app = express();
app.use(function(req, res, next) {
    const corsWhitelist = [
        'http://localhost:5173',
        'http://localhost:4173',
    ];
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
        res.header("Access-Control-Allow-Credentials", true);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
});

app.use(express.json());
app.use(session({
    secret: "secter",
    name: "sessionId",
    cookie: {
        httpOnly: true,
        maxAge: 5 * 60 * 1000 // 5 minutes
    },
    resave: false,
    saveUninitialized: false,
}))

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
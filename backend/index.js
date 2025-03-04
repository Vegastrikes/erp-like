import express from 'express'

const app = express();

app.use('/', (req, res) => {
    console.log('hello api')
})

const port = 6543;
app
.listen(port, () => {
    console.log(`backend is running on port: ${port}`)
})
.on('error', (e) => {
    console.error(`backend failed to run on port: ${port}`)
})
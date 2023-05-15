const express = require('express');
const app = express();

const rooms = ['general', 'tech', 'finance', 'crypto'];
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const PORT = 5001;
const ip = require('socket.io')(server, {
    cors: {
        origin: 'https://localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, ()=> {
    console.log('listening to port', PORT)
})
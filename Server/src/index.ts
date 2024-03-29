import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import http from 'http';

const app = express();
const server = createServer(http);
const io = new Server(server);



io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
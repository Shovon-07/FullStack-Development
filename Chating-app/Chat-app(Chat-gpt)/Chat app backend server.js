//===> Chat app backend <===//
// server.js (Backend - Express.js & Socket.io)

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// User & Message Models
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}));

const Message = mongoose.model('Message', new mongoose.Schema({
  sender: String,
  content: String,
  room: String,
  timestamp: { type: Date, default: Date.now }
}));

// JWT Authentication
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Socket.io Logic with JWT Authentication
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error('Authentication error'));
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(new Error('Authentication error'));
    socket.username = decoded.username;
    next();
  });
});

io.on('connection', (socket) => {
  console.log('User Connected:', socket.username);

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User ${socket.username} joined room ${room}`);
  });

  socket.on('sendMessage', async (data) => {
    const newMessage = new Message({ ...data, sender: socket.username });
    await newMessage.save();
    io.to(data.room).emit('receiveMessage', { ...data, sender: socket.username });
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected:', socket.username);
  });
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});

// Tailwind CSS Setup Guide for Frontend
// 1. Install Tailwind: npm install -D tailwindcss postcss autoprefixer
// 2. Initialize Tailwind: npx tailwindcss init -p
// 3. Configure tailwind.config.js for purge paths
// 4. Import Tailwind in index.css: @tailwind base; @tailwind components; @tailwind utilities;


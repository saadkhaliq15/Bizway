const express = require('express');
const app = express();
const users = require('./routes/users');
const auth = require('./routes/auth');

// Middleware
app.use(express.json());

// Routes
app.use('/users', users);
app.use('/auth', auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

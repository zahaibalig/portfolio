const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const authMiddleware = require('./authMiddleware');  // Import the authentication middleware
require('dotenv').config();  // Load environment variables from .env file

// Initialize app and middleware
const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// MongoDB Connection
const dbURI = process.env.MONGO_URI;  // Use environment variable for MongoDB connection string
mongoose.set('bufferCommands', false);
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Contact Schema (if needed)
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
});
const Project = mongoose.model('Project', projectSchema);

// Dummy admin credentials (in production, replace with a real user database)
const adminUser = {
  username: 'admin',
  password: bcrypt.hashSync('password', 10),  // hashed password for 'password'
};

// Admin login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate credentials
  if (username !== adminUser.username) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  const validPassword = bcrypt.compareSync(password, adminUser.password);
  if (!validPassword) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ username: adminUser.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',  // Token expires in 1 hour
  });

  res.json({ token });
});

// Protected route to create a new project
app.post('/api/projects', authMiddleware, async (req, res) => {
  const { title, description, technologies } = req.body;
  const project = new Project({ title, description, technologies });
  try {
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: 'Error saving project' });
  }
});

// Protected route to update a project
app.put('/api/projects/:id', authMiddleware, async (req, res) => {
  const { title, description, technologies } = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, { title, description, technologies }, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: 'Error updating project' });
  }
});

// Protected route to delete a project
app.delete('/api/projects/:id', authMiddleware, async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting project' });
  }
});

// Public route to get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();  // Fetch all projects from the database
    res.json(projects);  // Return the list of projects as JSON
  } catch (error) {
    res.status(400).json({ error: 'Error fetching projects' });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
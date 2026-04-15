const express = require('express')
const app = express()
const PORT = 3000

// Middleware to parse JSON request bodies
app.use(express.json())

// Students array OUTSIDE the routes
let students = [
  { id: 1, name: 'Juan dela Cruz', course: 'BSIT' },
  { id: 2, name: 'Maria Santos', course: 'BSIT' },
]

// Route 1: GET / - Welcome message
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Express.js!',
    timestamp: new Date().toISOString()
  })
})

// Route 2: GET /api/students
app.get('/api/students', (req, res) => {
  res.json({ data: students, count: students.length })
})

// Route 3: POST /api/students - Add a new student
app.post('/api/students', (req, res) => {
  const { name } = req.body
  const newStudent = {
    id: students.length + 1,
    name: name,
    course: 'BSIT'
  }
  students.push(newStudent)
  res.json({ message: 'Student added!', data: newStudent })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
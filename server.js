// server.js
require('dotenv').config() // Load environment variables from .env
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors()) // Enable CORS for all routes
app.use(express.static('public'))

const openaiApiKey = process.env.OPENAI_API_KEY
const questionHistory = [] // Initialize questionHistory as an empty array

app.post('/api/chat', async (req, res) => {
  try {
    const { conversation } = req.body
    console.log('Request Data:', { conversation })

    // Make API call to OpenAI GPT-3.5
    const apiUrl = 'https://api.openai.com/v1/chat/completions'
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + openaiApiKey
      },
      body: JSON.stringify({
        messages: conversation,
        model: 'gpt-3.5-turbo'
      })
    })

    const responseData = await response.json() // Read the response body once

    // Log the response data
    console.log('Response Data:', responseData)

    if (!response.ok) {
      throw new Error('API request failed: ' + response.statusText)
    }

    const serverResponse = {
      answer: responseData.choices[0].message.content,
      questionHistory // Include the questionHistory in the response
    }

    res.json(serverResponse)
  } catch (error) {
    console.error('Error handling API request:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

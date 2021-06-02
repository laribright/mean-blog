import express from 'express'
import cors from 'cors'

import postsRoute from './routes/posts.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/posts', postsRoute)

export default app
import express from 'express'

import postsRoute from './routes/posts.js'

const app = express()

app.use('/api/v1/posts', postsRoute)

export default app
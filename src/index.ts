import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import routes from './routes'

dotenv.config({path: '/home/denis/Documentos/developer/projects/azunyan-project-backend/.env'})

const port = process.env.PORT || 9000
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`The server is listening on port ${port}`))

export default app

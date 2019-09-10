import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import router from './routes'

const app = express()
// Pretty Print JSON
app.set('json spaces', 2)

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

export default app

import express from 'express'
import cors from 'cors'
import { Application, Request, Response } from 'express'
import userRouter from './app/modules/user/users.route'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  })
)

// Routes
app.use('/api/v1/users/', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Welcome to the University Management System')
})

export default app

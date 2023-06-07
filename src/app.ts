import express, { NextFunction } from 'express'
import cors from 'cors'
import { Application, Request, Response } from 'express'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorhandler from './app/middlewares/globalErrorHandler'
// import ApiError from './errors/ApiError'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//Application Routes
app.use('/api/v1/users/', UserRoutes)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  //   Promise.reject(new Error('Unhandled Promise Rejection'))
  // res.send('Welcome to the University Management System')
  // throw new ApiError(400, 'Ore Baba Error!')
  next('Ore Baba Error!')
})

// Global Error Handler
app.use(globalErrorhandler)

export default app

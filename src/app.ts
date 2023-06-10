import express, { Request, Response } from 'express';
import cors from 'cors';
import { Application, NextFunction } from 'express';
// import { UserRoutes } from './app/modules/user/user.route';
import globalErrorhandler from './app/middlewares/globalErrorHandler';
// import ApiError from './errors/ApiError'
// import { AcademicSemesterRoute } from './app/modules/academicSemister/academicSemester.route';
import routes from './app/routes/index';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

//Application Routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoute);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'))
// res.send('Welcome to the University Management System')
// throw new ApiError(400, 'Ore Baba Error!')
//   next('Ore Baba Error!');
// });

// Global Error Handler Middleware
app.use(globalErrorhandler);

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route Not Found',
    errorMessuages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });

  next();
});

export default app;

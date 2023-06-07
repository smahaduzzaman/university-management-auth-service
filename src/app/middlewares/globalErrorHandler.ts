/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import config from './../../config';
import { ErrorRequestHandler } from 'express';
import { IGenericErrorMessages } from '../../interfaces/error';
import handleValidationError from './../../errors/handleValidationError';
import ApiError from './../../errors/ApiError';
import { errorlogger } from '../../shared/logger';
import { ZodError } from 'zod';
import handleZodError from './../../errors/handleZodError';

const globalErrorhandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('globalErrorHandler', error)
    : errorlogger.error('globalErrorhandler', error);

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessages[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    // stack: config.env !== 'production' ? error?.stack : undefin ved,
    stack: process.env.NODE_ENV === 'production' ? null : error?.stack,
  });

  next();
};

export default globalErrorhandler;

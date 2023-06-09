import { Request, Response, NextFunction } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.services';
import sendResponse from './../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    next();

    sendResponse(res, {
      statusCode: httpStatus.OK || 200,
      success: true,
      message: 'Academic Semester Created successfully',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};

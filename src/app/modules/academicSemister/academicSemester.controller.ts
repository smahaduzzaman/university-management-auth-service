import { Request, Response, NextFunction } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    res.status(200).json({
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });

    next();
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
};

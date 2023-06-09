import express from 'express';
import { UserRoutes } from './../modules/user/user.route';
import { AcademicSemesterRoute } from './../modules/academicSemister/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters/', AcademicSemesterRoute);

export default router;

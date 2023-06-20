import { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Loader } from "@/components";
import { ROUTES } from "@/constants";
import { Layout } from "@/modules";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";
import {
  Plans,
  Reset,
  SignIn,
  Salary,
  // Settings,
  CheckCode,
  SendEmail,
  Durations,
  AllTutors,
  Dashboard,
  AllVideos,
  AllCourses,
  AllReports,
  AllStudents,
  CreateCourse,
  Configuration,
  SalaryDetails,
  TutorRequests,
  CourseDetails,
  PaymentHistory,
  TutorsAllDetails,
  TutorRequestDetails,
} from "./lazy";

export const Routes = ({ isAuth }) =>
  useRoutes([
    {
      element: <ProtectedRoutes isAuth={isAuth} />,
      children: [
        {
          path: ROUTES.home,
          element: <Layout />,
          children: [
            {
              path: '*',
              element: <Navigate to={ROUTES.dashboard} />,
            },
            {
              index: true,
              element: <Navigate to={ROUTES.dashboard} replace />,
            },
            {
              path: ROUTES.dashboard,
              element: (
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              ),
            },
            {
              path: ROUTES.tutors,
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <AllTutors />
                    </Suspense>
                  ),
                },
                {
                  path: ROUTES.tutorDetails,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <TutorsAllDetails />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: ROUTES.tutorRequests,
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <TutorRequests />
                    </Suspense>
                  ),
                },
                {
                  path: ROUTES.tutorRequestDetails,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <TutorRequestDetails />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: ROUTES.courses,
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <AllCourses />
                    </Suspense>
                  ),
                },
                {
                  path: ROUTES.courseDetails,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <CourseDetails />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: ROUTES.addCourse,
              element: (
                <Suspense fallback={<Loader />}>
                  <CreateCourse />
                </Suspense>
              ),
            },
            {
              path: ROUTES.students,
              children: [
                {
                  path: ROUTES.students,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <AllStudents />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: ROUTES.paymentHistory,
              children: [
                {
                  path: ROUTES.paymentHistory,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <PaymentHistory />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: ROUTES.videos,
              children: [
                {
                  path: ROUTES.videos,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <AllVideos />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: ROUTES.reports,
              element: (
                <Suspense fallback={<Loader />}>
                  <AllReports />
                </Suspense>
              ),
            },
            {
              path: ROUTES.salary,
              children: [
                {
                  path: ROUTES.salary,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Salary />
                    </Suspense>
                  ),
                },
                {
                  path: ROUTES.salaryDetails,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <SalaryDetails />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: ROUTES.settings,
              children: [
                {
                  path: ROUTES.configurations,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Configuration />
                    </Suspense>
                  ),
                },
                {
                  path: ROUTES.plans,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Plans />
                    </Suspense>
                  ),
                },
                {
                  path: ROUTES.lessonDuration,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Durations />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      element: <PublicRoutes isAuth={isAuth} />,
      children: [
        {
          index: true,
          path: ROUTES.signIn,
          element: (
            <Suspense fallback={<Loader />}>
              <SignIn />
            </Suspense>
          ),
        },
        {
          path: ROUTES.email,
          element: (
            <Suspense fallback={<Loader />}>
              <SendEmail />
            </Suspense>
          ),
        },
        {
          path: ROUTES.check,
          element: (
            <Suspense fallback={<Loader />}>
              <CheckCode />
            </Suspense>
          ),
        },
        {
          path: ROUTES.reset,
          element: (
            <Suspense fallback={<Loader />}>
              <Reset />
            </Suspense>
          ),
        },
      ],
    },
  ]);

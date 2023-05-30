import { lazy } from "react";
import { Loader } from "@/components";

const handleCatchChunkError = () => {
  window.location.reload();

  return { default: Loader };
};

// DASHBOARD
export const Dashboard = lazy(() =>
  import("@/pages")
    .then(({ Dashboard }) => ({ default: Dashboard }))
    .catch(handleCatchChunkError)
);

// AUTH
export const SignIn = lazy(() =>
  import("@/pages")
    .then(({ SignIn }) => ({ default: SignIn }))
    .catch(handleCatchChunkError)
);

export const Reset = lazy(() =>
  import("@/pages")
    .then(({ Reset }) => ({ default: Reset }))
    .catch(handleCatchChunkError)
);

export const Forgot = lazy(() =>
  import("@/pages")
    .then(({ Forgot }) => ({ default: Forgot }))
    .catch(handleCatchChunkError)
);

export const Home = lazy(() =>
  import("@/pages")
    .then(({ Home }) => ({ default: Home }))
    .catch(handleCatchChunkError)
);

// TUTORS
export const TutorRequests = lazy(() =>
  import("@/pages")
    .then(({ TutorRequests }) => ({ default: TutorRequests }))
    .catch(handleCatchChunkError)
);

export const AllTutors = lazy(() =>
  import("@/pages")
    .then(({ AllTutors }) => ({ default: AllTutors }))
    .catch(handleCatchChunkError)
);

// COURSES
export const AllCourses = lazy(() =>
  import("@/pages")
    .then(({ AllCourses }) => ({ default: AllCourses }))
    .catch(handleCatchChunkError)
);

export const CreateCourse = lazy(() =>
  import("@/pages")
    .then(({ CreateCourse }) => ({ default: CreateCourse }))
    .catch(handleCatchChunkError)
);

export const CourseDetails = lazy(() =>
  import("@/pages")
    .then(({ CourseDetails }) => ({ default: CourseDetails }))
    .catch(handleCatchChunkError)
);

export const AllVideos = lazy(() =>
  import("@/pages")
    .then(({ AllVideos }) => ({ default: AllVideos }))
    .catch(handleCatchChunkError)
);

export const TutorRequestDetails = lazy(() =>
  import("@/pages")
    .then(({ TutorRequestDetails }) => ({ default: TutorRequestDetails }))
    .catch(handleCatchChunkError)
);

export const TutorsAllDetails = lazy(() =>
  import("@/pages")
    .then(({ TutorsAllDetails }) => ({
      default: TutorsAllDetails,
    }))
    .catch(handleCatchChunkError)
);

export const AllStudents = lazy(
  () => import("@/pages").then(({ AllStudents }) => ({ default: AllStudents }))
  // .catch(handleCatchChunkError)
);

export const PaymentHistory = lazy(
  () =>
    import("@/pages").then(({ PaymentHistory }) => ({
      default: PaymentHistory,
    }))
  // .catch(handleCatchChunkError)
);

export const AllReports = lazy(() =>
  import("@/pages")
    .then(({ AllReports }) => ({ default: AllReports }))
    .catch(handleCatchChunkError)
);

export const Salary = lazy(() =>
  import("@/pages")
    .then(({ Salary }) => ({ default: Salary }))
    .catch(handleCatchChunkError)
);
export const SalaryDetails = lazy(() =>
  import("@/pages")
    .then(({ SalaryDetails }) => ({ default: SalaryDetails }))
    .catch(handleCatchChunkError)
);

export const Settings = lazy(() =>
  import("@/pages")
    .then(({ Settings }) => ({ default: Settings }))
    .catch(handleCatchChunkError)
);

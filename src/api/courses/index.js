import { Instance } from "../instance";
import { endpoints } from "../endpoints";
// import { dictionaryWithKeys } from "../../utils/intl";

const config = {
  baseURL: endpoints.courses,
};

class CoursesApi extends Instance {
  constructor(config) {
    super(config);
  }

  getCourses = (params) => this.get(endpoints.empty, { params });

  getSingleCourse = (id) => this.get(`/${id}`);

  createCourse = (params) => this.post(endpoints.empty, params);

  updateCourse = (params) => this.patch(`/${params.id}`, params);

  deleteCourse = (id) => this.delete(`/${id}`);
}

export const coursesApi = new CoursesApi(config);

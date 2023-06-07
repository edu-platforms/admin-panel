import { Instance } from "../instance";
import { endpoints } from "../endpoints";
import { dictionaryWithKeys } from "../../utils/intl";

const config = {
  baseURL: endpoints.courses,
};

class CoursesApi extends Instance {
  constructor(config) {
    super(config);
  }

  getCourses = (params) => this.get(endpoints.empty, { params });

  getSingleCourse = (params) => this.get(dictionaryWithKeys(endpoints.param, {
    param: params.id,
  }));

  createCourse = (params) => this.post(endpoints.empty, params);

  updateCourse = (params) => this.put(dictionaryWithKeys(endpoints.param, {
    param: params.id,
  }), params);

  deleteCourse = (params) => this.delete(dictionaryWithKeys(endpoints.param, {
    param: params.id,
  }));
}

export const coursesApi = new CoursesApi(config);

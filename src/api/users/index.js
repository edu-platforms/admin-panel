import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.users,
};

class UsersApi extends Instance {
  constructor(config) {
    super(config);
  }

  getTutorRequests = (params) => this.get(endpoints.empty, { params });

  getSingleCourse = (id) => this.get(`/${id}`);

  createCourse = (params) => this.post(endpoints.empty, params);

  updateCourse = (params) => this.patch(`/${params.id}`, params);

  deleteCourse = (id) => this.delete(`/${id}`);
}

export const usersApi = new UsersApi(config);

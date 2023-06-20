import { Instance } from "../instance";
import { endpoints } from "../endpoints";
import { dictionaryWithKeys } from "@/utils";

const config = {
  baseURL: endpoints.user,
};

class UsersApi extends Instance {
  constructor(config) {
    super(config);
  }

  getDashboard = () => this.get(endpoints.dashboard);

  getTutors = (params) => this.get(endpoints.tutors, { params });

  getTutorDetails = (params) =>
    this.get(dictionaryWithKeys(`${endpoints.tutors}/${endpoints.param}`, {
      param: params.id,
    }));

  getTutorRequests = (params) => this.get(endpoints.tutorRequests, { params });

  getStudents = (params) => this.get(endpoints.students, { params });

  getOne = (params) =>
    this.get(dictionaryWithKeys(endpoints.param, {
      param: params.id,
    }));

  acceptReject = (params) => this.put(dictionaryWithKeys(endpoints.acceptReject, {
    param: params.id,
  }), params);

}

export const usersApi = new UsersApi(config);

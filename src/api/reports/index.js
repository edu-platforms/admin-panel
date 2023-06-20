import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.reports,
};

class ReportsApi extends Instance {
  constructor(config) {
    super(config);
  }

  getReports = (params) => this.get(endpoints.empty, { params });

  solveReport = (params) => this.put(`/${params.id}`, params);
}

export const reportsApi = new ReportsApi(config);

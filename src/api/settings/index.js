import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.empty,
};

class SettingsApi extends Instance {
  constructor(config) {
    super(config);
  }

  getPlans = () => this.get(endpoints.plans);
  createPlan = (params) => this.post(endpoints.plans, params);
  updatePlan = (params) => this.put(`${endpoints.plans}/${params.id}`, params);

  getConfigurations = () => this.get(endpoints.configurations);
  updateConfiguration = (params) => this.put(`${endpoints.configurations}/${params.id}`, params);

  getLessonDurationWeek = () => this.get(endpoints.lessonDurationWeek);
  createLessonDurationWeek = (params) => this.post(endpoints.lessonDurationWeek, params);
  updateLessonDurationWeek = (params) => this.put(`${endpoints.lessonDurationWeek}/${params.id}`, params);
}

export const settingsApi = new SettingsApi(config);

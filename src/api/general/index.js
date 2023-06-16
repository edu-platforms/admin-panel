import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.empty,
};

class GeneralApi extends Instance {
  constructor(config) {
    super(config);
  }

  getLessonDurationWeek = () => this.get(endpoints.lessonDurationWeek);
}

export const generalApi = new GeneralApi(config);

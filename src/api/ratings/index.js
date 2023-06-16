import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.rating,
};

class RatingsApi extends Instance {
  constructor(config) {
    super(config);
  }

  getRatings = (params) =>
    this.get(`/${params.id}`, {
      params: { page: params.page, limit: params.limit },
    });
}

export const ratingsApi = new RatingsApi(config);

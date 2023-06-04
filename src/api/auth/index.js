import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.user,
};

class AuthApi extends Instance {
  constructor(config) {
    super(config);
  }

  signIn = (params) => this.post(endpoints.signIn, params);

  sendEmail = (params) => this.post(endpoints.sendEmail, params);

  checkCode = (params) => this.post(endpoints.checkCode, params);

  changePsw = (params) => this.post(endpoints.changePsw, params);
}

export const authApi = new AuthApi(config);

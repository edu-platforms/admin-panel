import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.admin,
};

class AuthApi extends Instance {
  constructor(config) {
    super(config);
  }

  signIn = (params) => this.post(endpoints.signIn, params);

  resetPassword = (params) => this.post(endpoints.resetPsw, params);

  changePassword = (params) => this.post(endpoints.changePsw, params);

  resetVerify = (params) => this.post(endpoints.resetVerify, params);
}

export const authApi = new AuthApi(config);

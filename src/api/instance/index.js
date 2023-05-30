import axios from "axios";
import { stage } from "@/config";
import { endpoints } from "../endpoints";
import { getLocalStorage, clearLocalStorage } from "@/utils";

export class Instance {
  instance;
  baseURL = "";

  constructor({ baseURL = endpoints.base, headers, timeout = 65000 }) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers,
    });
    this.instance.interceptors.request.use(this.handleRequest);
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleResponseError
    );
    this.baseURL = baseURL;
  }

  handleResponse = (response) => response;

  handleResponseError = (error) => {
    if (error.response?.status === 401) {
      clearLocalStorage();
    }

    throw error;
  };

  handleRequest = async ({ headers, ...restConfig }) => {
    const accessToken = getLocalStorage("access-token");

    return {
      headers: {
        ...headers,
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
      },
      ...restConfig,
    };
  };

  async send(method, url, params, config) {
    const { data } = await this.instance[method](url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });

    return data;
  }

  async get(url, params) {
    const { data } = await this.instance.get(url, {
      ...params,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });

    return data;
  }

  async post(url, params, config) {
    const { data } = await this.instance.post(url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });

    return data;
  }

  async delete(url, config) {
    const { data } = await this.instance.delete(url, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });

    return data;
  }

  async put(url, params, config) {
    const { data } = await this.instance.put(url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });

    return data;
  }

  async patch(url, params, config) {
    const { data } = await this.instance.patch(url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });

    return data;
  }
}

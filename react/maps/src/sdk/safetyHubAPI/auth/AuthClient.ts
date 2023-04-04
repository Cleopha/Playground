import { AxiosInstance, AxiosResponse } from "axios";
import { IProfile } from "./types";

export class AuthClient {
  private apiClient: AxiosInstance;

  private route: string;

  constructor(apiClient: AxiosInstance, route = "/auth") {
    this.apiClient = apiClient;
    this.route = route;
  }

  public async login(email: string, password: string): Promise<AxiosResponse> {
    return this.apiClient.post(`${this.route}/login`, {
      email,
      password,
    });
  }

  public async logout(): Promise<AxiosResponse> {
    return this.apiClient.post(`${this.route}/logout`, {});
  }

  public async register(
    email: string,
    password: string,
    covidAlerts?: boolean,
    fireAlerts?: boolean,
    securityAlerts?: boolean
  ): Promise<AxiosResponse> {
    const data = Object.fromEntries(
      Object.entries({
        email,
        password,
        covidAlerts,
        fireAlerts,
        securityAlerts,
      }).filter(([_, value]) => value != null)
    );
    return this.apiClient.post(`${this.route}/register`, data);
  }

  public async getProfile(): Promise<IProfile> {
    const res = await this.apiClient.get(`${this.route}/profile`);
    return res.data;
  }
}

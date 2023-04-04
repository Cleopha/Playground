import { AxiosInstance, AxiosResponse } from "axios";
import { User } from "./types";

export class UserClient {
  private apiClient: AxiosInstance;

  private route: string;

  constructor(apiClient: AxiosInstance, route = "/users") {
    this.apiClient = apiClient;
    this.route = route;
  }

  public async createUser(
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
    return this.apiClient.post(`${this.route}`, data);
  }

  public async getUsers(): Promise<User[]> {
    const response = await this.apiClient.get<User[]>(`${this.route}`);
    return response.data;
  }

  public async getUser(UserID: string): Promise<User> {
    const response = await this.apiClient.get<User>(`${this.route}/${UserID}`);
    return response.data;
  }

  // TODO Add Patch

  public async deleteUser(UserID: string): Promise<AxiosResponse> {
    return this.apiClient.delete(`${this.route}/${UserID}`);
  }
}

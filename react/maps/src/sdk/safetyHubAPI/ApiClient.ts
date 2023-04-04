import axios, { AxiosInstance } from "axios";
import { AlertsClient } from "./alerts/AlertsClient";
import { AuthClient } from "./auth/AuthClient";
import { UserClient } from "./user/UserClient";

export class ApiClient {
  private apiClient: AxiosInstance;

  public user: UserClient;

  public auth: AuthClient;

  public alert: AlertsClient;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.user = new UserClient(this.apiClient);
    this.auth = new AuthClient(this.apiClient);
    this.alert = new AlertsClient(this.apiClient);
  }

  public async getHealth(): Promise<string> {
    const response = await this.apiClient.get<string>("/health");
    return response.data;
  }
}

const baseURL = "https://saferity.quartz.technology/api";
const apiClient = new ApiClient(baseURL);

export default apiClient;

import { AxiosInstance, AxiosResponse } from "axios";
import { IAlert, ISearchAlert } from "./types";

export class AlertsClient {
  private apiClient: AxiosInstance;

  private route: string;

  constructor(apiClient: AxiosInstance, route = "/alerts") {
    this.apiClient = apiClient;
    this.route = route;
  }

  public async searchAlerts(
    query: string,
    type?: string
  ): Promise<ISearchAlert> {
    const params = { query, ...(type ? { type } : {}) };
    const response = await this.apiClient.get<ISearchAlert>(
      `${this.route}/search`,
      { params }
    );
    return response.data;
  }

  public async createAlert(
    countyID: string,
    message: string,
    type: string
  ): Promise<AxiosResponse> {
    return this.apiClient.post(`${this.route}?type=${type}`, {
      county_id: countyID,
      message,
    });
  }

  public async getAlerts(type: string): Promise<IAlert[]> {
    const response = await this.apiClient.get<IAlert[]>(
      `${this.route}?type=${type}`
    );
    return response.data;
  }

  public async getAlert(UserID: string, type: string): Promise<IAlert> {
    const response = await this.apiClient.get<IAlert>(
      `${this.route}/${UserID}?type=${type}`
    );
    return response.data;
  }

  // TODO Add Patch

  public async deleteUser(
    UserID: string,
    type: string
  ): Promise<AxiosResponse> {
    return this.apiClient.delete(`${this.route}/${UserID}?type=${type}`);
  }
}

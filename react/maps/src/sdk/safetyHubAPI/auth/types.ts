export interface IProfile {
  id: string;
  email: string;
  password: string;
  covid_alerts: boolean;
  fire_alerts: boolean;
  security_alerts: boolean;
  user_type: string;
  county_id: string;
}

enum UserRoles {
  USER,
  ADMIN,
}

export interface User {
  id: string;
  email: string;
  password: string;
  covid_alerts: boolean;
  fire_alerts: boolean;
  security_alerts: boolean;
  user_type: UserRoles;
  county_id: string;
}

export interface IAlert {
  id: string;
  message: string;
  created_at: string;
  county_id: string;
}

export interface ISearchAlert {
  covidAlerts?: IAlert[];
  fireAlerts?: IAlert[];
  securityAlerts?: IAlert[];
}

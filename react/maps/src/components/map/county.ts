import { alertData } from "../fakeData/alert";
import { IAlert } from "../utils/alert";
import { LegendMapThresholds } from "./mapConfig";

export const countyName: string[] = [
  "Alameda",
  "Alpine",
  "Amador",
  "Butte",
  "Calaveras",
  "Colusa",
  "Contra Costa",
  "Del Norte",
  "El Dorado",
  "Fresno",
  "Glenn",
  "Humboldt",
  "Imperial",
  "Inyo",
  "Kern",
  "Kings",
  "Lake",
  "Lassen",
  "Los Angeles",
  "Madera",
  "Marin",
  "Mariposa",
  "Mendocino",
  "Merced",
  "Modoc",
  "Mono",
  "Monterey",
  "Napa",
  "Nevada",
  "Orange",
  "Placer",
  "Plumas",
  "Riverside",
  "Sacramento",
  "San Benito",
  "San Bernardino",
  "San Diego",
  "San Francisco",
  "San Joaquin",
  "San Luis Obispo",
  "San Mateo",
  "Santa Barbara",
  "Santa Clara",
  "Santa Cruz",
  "Shasta",
  "Sierra",
  "Siskiyou",
  "Solano",
  "Sonoma",
  "Stanislaus",
  "Sutter",
  "Tehama",
  "Trinity",
  "Tulare",
  "Tuolumne",
  "Ventura",
  "Yolo",
  "Yuba",
];

function countDepartmentOccurrences(alerts: IAlert[]): Record<string, number> {
  const departmentOccurrences: Record<string, number> = {};

  alerts.forEach((alert) => {
    const { department } = alert;
    if (departmentOccurrences[department]) {
      departmentOccurrences[department] += 1;
    } else {
      departmentOccurrences[department] = 1;
    }
  });

  return departmentOccurrences;
}

export const departmentOccurrences = countDepartmentOccurrences(alertData);

export const getColorByThreshold = (number: number) => {
  for (let i = 0; i < LegendMapThresholds.length; i += 1) {
    const { color, rangeColor } = LegendMapThresholds[i];
    if (number >= rangeColor[0] && number <= rangeColor[1]) {
      return color;
    }
  }
  return "transparent";
};

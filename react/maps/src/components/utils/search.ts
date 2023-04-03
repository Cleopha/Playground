export interface ISearchOptionMap {
  checkboxes: { [key: string]: boolean };
  input: string;
  multiselect: string[];
}

export const defaultSearchOption: ISearchOptionMap = {
  checkboxes: {
    WEATHER: true,
    SECURITY: true,
    FIRE: true,
    HEALTH: true,
  },
  input: "",
  multiselect: ["Option 1"],
};

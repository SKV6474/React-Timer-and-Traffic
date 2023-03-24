import { action, observable } from "mobx";

class Theme {
  @observable isLightMode = true;

  @action
  toggleThemeMode = () => {
    this.isLightMode = !this.isLightMode;
  };
}

export const toggleTheme = new Theme();

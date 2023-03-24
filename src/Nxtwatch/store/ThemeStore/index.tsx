import { action, observable } from "mobx";

class Theme {
  @observable Theme = "light";

  @action
  toggleThemeMode = () => {
    if (this.Theme === "light") {
      this.Theme = "dark";
    } else {
      this.Theme = "light";
    }
  };
}

export default Theme;

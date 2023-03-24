import Cookies from "js-cookie";
import { action, observable } from "mobx";

import { ApiStatus, GameObject } from "../../interface";

class GameList {
  @observable GamingList: GameObject[] = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;

  @action.bound
  fetchGameData = async () => {
    const response = await fetch("https://apis.ccbp.in/videos/gaming", {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });
    if (response.ok) {
      const data = await response.json();
      this.GamingList = data.videos;
      this.ApiStatus = ApiStatus.success;
    } else {
      this.ApiStatus = ApiStatus.failure;
    }
  };
}

export default GameList;

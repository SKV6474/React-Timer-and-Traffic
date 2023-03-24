import Cookies from "js-cookie";
import { action, observable } from "mobx";

import { ApiStatus, TrendingOrSaved } from "../../interface";

class TrendingList {
  @observable TrendingList: TrendingOrSaved[] = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;

  @action.bound
  fetchTrendingData = async () => {
    const response = await fetch("https://apis.ccbp.in/videos/trending", {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });
    if (response.ok) {
      const data = await response.json();
      this.TrendingList = data.videos;
      this.ApiStatus = ApiStatus.success;
    } else {
      this.ApiStatus = ApiStatus.failure;
    }
  };
}

export default TrendingList;

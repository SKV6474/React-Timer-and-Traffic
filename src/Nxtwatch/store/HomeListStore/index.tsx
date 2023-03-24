import Cookies from "js-cookie";
import { action, observable } from "mobx";

import { ApiStatus, VideosList } from "../../interface";

class HomeList {
  @observable HomeList: VideosList[] = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;

  @action.bound
  fetchHomeData = async (input: string) => {
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${input}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
      }
    );
    if (response.ok) {
      const data = await response.json();
      this.HomeList = data.videos;
      this.ApiStatus = ApiStatus.success;
    } else {
      this.ApiStatus = ApiStatus.failure;
    }
  };
}

export default HomeList;

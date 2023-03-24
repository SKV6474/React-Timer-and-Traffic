import Cookies from "js-cookie";
import { action, observable } from "mobx";

import { GameObject, TrendingOrSaved, videosList } from "../../interface";

class Store {
  SavedVideoList: TrendingOrSaved[] = [];

  @observable HomeList: videosList[] = [];
  ApiStatusHome: boolean = false;
  @observable isLoadingHomeAPI: boolean = true;

  @observable TrendingList: TrendingOrSaved[] = [];
  ApiStatusTrending: boolean = false;
  @observable isLoadingTrendingAPI: boolean = true;

  @observable GamingList: GameObject[] = [];
  ApiStatusGame: boolean = false;
  @observable isLoadingGameAPI: boolean = true;

  @action.bound
  addNewSaveList = (object: TrendingOrSaved) => {
    this.SavedVideoList = [...this.SavedVideoList, object];
  };

  @action.bound
  removeSavedVideo = (index: number) => {
    this.SavedVideoList.splice(index, 1);
  };

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
      this.ApiStatusHome = true;
      this.isLoadingHomeAPI = false;
    } else {
      this.ApiStatusHome = false;
      this.isLoadingHomeAPI = false;
    }
  };

  @action.bound
  fetchTrendingData = async () => {
    const response = await fetch("https://apis.ccbp.in/videos/trending", {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });
    if (response.ok) {
      const data = await response.json();
      this.TrendingList = data.videos;
      this.ApiStatusTrending = true;
      this.isLoadingTrendingAPI = false;
    } else {
      this.ApiStatusTrending = false;
      this.isLoadingTrendingAPI = false;
    }
  };

  @action.bound
  fetchGameData = async () => {
    const response = await fetch("https://apis.ccbp.in/videos/gaming", {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });
    if (response.ok) {
      const data = await response.json();
      this.GamingList = data.videos;
      this.ApiStatusGame = true;
      this.isLoadingGameAPI = false;
    } else {
      this.ApiStatusGame = false;
      this.isLoadingGameAPI = false;
    }
  };
}

const SaveStore = new Store();

export { SaveStore };

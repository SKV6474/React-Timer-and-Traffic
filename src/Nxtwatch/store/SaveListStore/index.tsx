import { action } from "mobx";

import { TrendingOrSaved } from "../../interface";

class SaveList {
  SavedVideoList: TrendingOrSaved[] = [];

  @action.bound
  addNewSaveList = (object: TrendingOrSaved) => {
    this.SavedVideoList = [...this.SavedVideoList, object];
  };

  @action.bound
  removeSavedVideo = (index: number) => {
    this.SavedVideoList.splice(index, 1);
  };
}

export default SaveList;

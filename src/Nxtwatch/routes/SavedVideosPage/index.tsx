import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import SideBarHeader from "../../../Common/components/sideBarHeader";
import TrendingSavedUI from "../../../Common/components/trendingSavedUI";

import NoSavedVideosRoute from "../../components/NoSavedVideo";

import { SaveStore } from "../../store/ListStore";
import { inject, observer } from "mobx-react";

import { SideContentContainer } from "../../styledComponent";

const SavedVideosRoute = inject("SaveStore")(
  observer(() => {
    const SavedList = SaveStore.SavedVideoList;

    return (
      <>
        <SideContentContainer>
          {SavedList.length > 0 ? (
            <>
              <SideBarHeader type="saved-videos" />
              <TrendingSavedUI DataList={SavedList} />
            </>
          ) : (
            <NoSavedVideosRoute />
          )}
        </SideContentContainer>
      </>
    );
  })
);

export default WithHeader(WithSideBar(SavedVideosRoute));

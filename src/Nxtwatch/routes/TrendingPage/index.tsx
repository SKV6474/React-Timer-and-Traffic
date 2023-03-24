import { useEffect } from "react";

import SideBarHeader from "../../../Common/components/sideBarHeader";
import TrendingSavedUI from "../../../Common/components/trendingSavedUI";
import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";

import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import { SaveStore } from "../../store/ListStore";
import { inject, observer } from "mobx-react";
import * as mobx from "mobx";

import { LoaderContainer, SideContentContainer } from "../../styledComponent";

const TrendingRoute = inject("SaveStore")(
  observer(() => {
    const trendingList = mobx.toJS(SaveStore.TrendingList);

    const isResponse = SaveStore.ApiStatusTrending;

    const isLoading = SaveStore.isLoadingTrendingAPI;

    useEffect(() => {
      if (SaveStore.TrendingList.length === 0) {
        SaveStore.fetchTrendingData();
      }
    }, []);
    return (
      <>
        <SideContentContainer>
          <>
            <SideBarHeader type="trending" />
            {isResponse && !isLoading && trendingList.length !== 0 && (
              <TrendingSavedUI DataList={trendingList} />
            )}
            {!isResponse && isLoading && (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            )}
          </>
          {!isResponse && !isLoading && <Failure />}
        </SideContentContainer>
      </>
    );
  })
);

export default WithHeader(WithSideBar(TrendingRoute));

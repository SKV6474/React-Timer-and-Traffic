import { useEffect } from "react";

import SideBarHeader from "../../../Common/components/sideBarHeader";
import TrendingSavedUI from "../../../Common/components/trendingSavedUI";
import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import LoadingWrapper from "../../../Common/components/LoadingWrapper";

import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import { trendingList } from "../../store";
import { observer } from "mobx-react";

import { LoaderContainer, SideContentContainer } from "../../styledComponent";

const TrendingRoute = observer(() => {
  const trendList = trendingList.TrendingList;

  useEffect(() => {
    if (
      trendingList.ApiStatus === "loading" ||
      trendingList.ApiStatus === "failure"
    ) {
      trendingList.fetchTrendingData();
    }
  }, []);

  const renderTrendingList = () => {
    return (
      <>
        <SideBarHeader type="trending" />
        <TrendingSavedUI DataList={trendList} />
      </>
    );
  };

  const renderLoadingView = () => {
    return (
      <>
        <SideBarHeader type="trending" />
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </>
    );
  };

  const renderFailureView = () => {
    return <Failure />;
  };

  return (
    <>
      <SideContentContainer>
        <LoadingWrapper
          apiStatus={trendingList.ApiStatus}
          renderLoadingUi={renderLoadingView}
          renderFailureUi={renderFailureView}
          renderSuccessUi={renderTrendingList}
        ></LoadingWrapper>
      </SideContentContainer>
    </>
  );
});
export default WithHeader(WithSideBar(TrendingRoute));

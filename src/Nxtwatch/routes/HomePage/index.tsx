import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import WithHeader from "../../hocs/withHeaderHoc";
import WithSideBar from "../../hocs/withSideBarHoc";

import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import LoadingWrapper from "../../../Common/components/LoadingWrapper";

import HomeBanner from "../../components/HomeBanner";
import VideoCard from "../../components/HomeVideoLinkCard";
import NoSearchResults from "../../components/NoSearchsResults";

import { VideosList } from "../../interface";

import { observer } from "mobx-react";
import { homeList } from "../../store";

import {
  SearchVideoListContainer,
  SearchBar,
  SearchInput,
  SearchImg,
  AllCardContainer,
  VideoLink,
  HomeLoaderContianer,
  SideContentContainer,
} from "../../styledComponent";

const HomeRoute = observer(() => {
  const { t } = useTranslation();
  const [isBannerClose, setIsBannerClose] = useState(false);

  const videoList = homeList.HomeList;

  const handleRemoveBanner = () => {
    setIsBannerClose(true);
  };

  useEffect(() => {
    if (homeList.ApiStatus === "failure" || homeList.ApiStatus === "loading") {
      homeList.fetchHomeData("");
    }
  }, []);

  const handleSearchFetch = () => {
    const input: string = (
      document.getElementById("SearchInput") as HTMLInputElement
    ).value;
    homeList.fetchHomeData(input);
  };

  const handleRetrySearch = () => {
    (document.getElementById("SearchInput") as HTMLInputElement).value = "";
    (document.getElementById("SearchInput") as HTMLInputElement).focus();
  };

  let VideoList:
    | string
    | number
    | boolean
    | JSX.Element[]
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | null
    | undefined;

  if (videoList.length > 0) {
    VideoList = videoList.map((ele: VideosList) => (
      <VideoLink to={`/videos/${ele.id}`}>
        <VideoCard key={ele.id} object={ele} />
      </VideoLink>
    ));
  }

  const renderGamingList = () => {
    return <AllCardContainer>{VideoList}</AllCardContainer>;
  };

  const renderLoadingView = () => {
    return (
      <HomeLoaderContianer>
        <Loader />
      </HomeLoaderContianer>
    );
  };

  const renderFailureView = () => {
    return <Failure />;
  };

  return (
    <SideContentContainer>
      {!isBannerClose && <HomeBanner handleCloseEvent={handleRemoveBanner} />}
      <SearchVideoListContainer>
        <SearchBar>
          <SearchInput
            type="search"
            placeholder={t("search") + ""}
            id="SearchInput"
          />
          <SearchImg
            onClick={handleSearchFetch}
            className="fa-solid fa-magnifying-glass"
          ></SearchImg>
        </SearchBar>
        <LoadingWrapper
          apiStatus={homeList.ApiStatus}
          renderLoadingUi={renderLoadingView}
          renderFailureUi={renderFailureView}
          renderSuccessUi={renderGamingList}
        ></LoadingWrapper>
        {videoList.length === 0 && homeList.ApiStatus === "success" && (
          <NoSearchResults onChange={handleRetrySearch} />
        )}
      </SearchVideoListContainer>
    </SideContentContainer>
  );
});

export default WithHeader(WithSideBar(HomeRoute));

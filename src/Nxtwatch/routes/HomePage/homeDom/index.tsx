import React, { useEffect, useState } from "react";

import Failure from "../../../../Common/components/Failure";
import Loader from "../../../../Common/components/Loader";

import VideoCard from "../videoLinkCard";
import NoSearchResults from "../noSearchResults";

import { videosList } from "../../../interface";

import { SaveStore } from "../../../store/ListStore";
import { inject, observer } from "mobx-react";
import * as mobx from "mobx";

import {
  HeaderImage,
  ImgStyle,
  ContentDiv,
  GetItNowBtn,
  RemoveImg,
  ImgContainer,
  SearchVideoListContainer,
  SearchBar,
  SearchInput,
  SearchImg,
  AllCardContainer,
  VideoLink,
  HomeLoaderContianer,
} from "../../../styledComponent";
import { useTranslation } from "react-i18next";

const Home = inject("SaveStore")(
  observer(() => {
    const { t } = useTranslation();

    const [isClosed, setClose] = useState(false);

    const videoList = mobx.toJS(SaveStore.HomeList);

    const response = SaveStore.ApiStatusHome;

    const isLoading = SaveStore.isLoadingHomeAPI;

    const handleCloseEvent = () => {
      setClose(true);
    };

    useEffect(() => {
      if (SaveStore.HomeList.length === 0) {
        SaveStore.fetchHomeData("");
      }
    }, []);

    const handleSearchFetch = () => {
      const input: string = (
        document.getElementById("SearchInput") as HTMLInputElement
      ).value;
      SaveStore.fetchHomeData(input);
    };

    const handleRetrySearch = () => {
      (document.getElementById("SearchInput") as HTMLInputElement).value = "";
      (document.getElementById("SearchInput") as HTMLInputElement).focus();
    };

    let VideoList;
    if (videoList.length > 0) {
      VideoList = videoList.map((ele: videosList) => (
        <VideoLink to={`/videos/${ele.id}`}>
          <VideoCard key={ele.id} object={ele} />
        </VideoLink>
      ));
    }

    return (
      <>
        {!isClosed && (
          <HeaderImage>
            <ImgContainer>
              <ImgStyle
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="Img Style"
              />
              <RemoveImg
                onClick={handleCloseEvent}
                src="https://i.ibb.co/DWt3ZqC/icons8-close-15.png"
                alt="close"
              />
            </ImgContainer>
            <ContentDiv>{t("Pre_paid")}</ContentDiv>
            <GetItNowBtn>{t("get_it_now")}</GetItNowBtn>
          </HeaderImage>
        )}
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
          {isLoading && (
            <HomeLoaderContianer>
              <Loader />
            </HomeLoaderContianer>
          )}
          {response && videoList.length > 0 && (
            <AllCardContainer>{VideoList}</AllCardContainer>
          )}{" "}
          {!response && !isLoading && <Failure />}
          {videoList.length === 0 && response && (
            <NoSearchResults onChange={handleRetrySearch} />
          )}
        </SearchVideoListContainer>
      </>
    );
  })
);

export default Home;

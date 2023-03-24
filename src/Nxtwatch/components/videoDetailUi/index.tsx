import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { OfVideoDetails } from "../../interface";

import { SaveStore } from "../../store/ListStore";
import { inject } from "mobx-react";

import Loader from "../../../Common/components/Loader";
import { getTime } from "../../../Nxtwatch/utils";

import {
  BlanklineDiv,
  ChannelName,
  ChannelProfile,
  ChannelProfileContainer,
  ChannelSubscriber,
  DataContainer,
  Dot,
  VideoChannelContainer,
  VideoDescriptionContainer,
  VideoDetailContainer,
  VideoDetailIntractionContainer,
  VideoIntraction,
  VideoLoaderContainer,
  VideoPlayer,
  VideoTitle,
} from "../../../Nxtwatch/styledComponent";

import { useTranslation } from "react-i18next";

const VideoDetail = inject("SaveStore")((props: { id: string }) => {
  const { t } = useTranslation();

  const { id } = props;

  const index = SaveStore.SavedVideoList.findIndex((ele) => ele.id === id);

  const [videoDetails, setVideoDetails] = useState<OfVideoDetails>();
  const [isLike, setIsLike] = useState<boolean>();
  const [isSave, setIsSave] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
      });
      if (response.ok) {
        const data = await response.json();
        setVideoDetails(data.video_details);
        setIsLoading(false);
      }
    };

    if (index !== -1) {
      setIsSave(true);
    }

    fetchData();
  }, [id, index]);

  const handleLike = () => {
    if (isLike === undefined || isLike === false) {
      setIsLike(true);
    }
  };

  const handleDislike = () => {
    if (isLike === undefined || isLike === true) {
      setIsLike(false);
    }
  };

  const handleSave = () => {
    const toSaveObject = {
      channel: {
        name: videoDetails?.channel.name,
        profile_image_url: videoDetails?.channel.profile_image_url,
      },
      id: videoDetails?.id,
      published_at: videoDetails?.published_at,

      thumbnail_url: videoDetails?.thumbnail_url,
      title: videoDetails?.title,
      view_count: videoDetails?.view_count,
    };

    if (isSave === false || isSave === undefined) {
      SaveStore.addNewSaveList(toSaveObject);
    } else {
      SaveStore.removeSavedVideo(index);
    }
    setIsSave(!isSave);
  };

  return (
    <VideoDetailContainer>
      {isLoading ? (
        <VideoLoaderContainer>
          <Loader />
        </VideoLoaderContainer>
      ) : (
        <>
          <VideoPlayer>
            <ReactPlayer
              url={videoDetails?.video_url}
              width="100%"
              height="100%"
            />
          </VideoPlayer>
          <VideoTitle>{videoDetails?.title}</VideoTitle>
          <VideoDetailIntractionContainer>
            <DataContainer>
              {`${videoDetails?.view_count}`} {t("views")} <Dot />
              {`${getTime(videoDetails?.published_at)}`} {t("years ago")}{" "}
            </DataContainer>
            <VideoIntraction>
              <div
                style={{
                  color: isLike ? "#3b82f6" : "",
                  width: "70px",
                  height: "22px",
                  textAlign: "center",
                }}
                onClick={handleLike}
              >
                <i className="fa-regular fa-thumbs-up"></i> {t("Like")}
              </div>
              <div
                style={{
                  color:
                    isLike === undefined || isLike === true ? "" : "#3b82f6",
                  textAlign: "center",
                }}
                onClick={handleDislike}
              >
                <i className="fa-regular fa-thumbs-down"></i> {t("Dislike")}
              </div>
              <div
                style={{ color: isSave ? "#3b82f6" : "", textAlign: "center" }}
              >
                <i className="fa-solid fa-bookmark" onClick={handleSave}></i>{" "}
                {t("Save")}
              </div>
            </VideoIntraction>
          </VideoDetailIntractionContainer>
          <BlanklineDiv />
          <VideoChannelContainer>
            <ChannelProfileContainer>
              <ChannelProfile
                src={videoDetails?.channel.profile_image_url}
              ></ChannelProfile>
            </ChannelProfileContainer>
            <div>
              <ChannelName>{videoDetails?.channel.name}</ChannelName>
              <ChannelSubscriber>
                {`${videoDetails?.channel.subscriber_count}`} {t("subscribers")}
              </ChannelSubscriber>
            </div>
          </VideoChannelContainer>
          <VideoDescriptionContainer>
            {videoDetails?.description}
          </VideoDescriptionContainer>
        </>
      )}
    </VideoDetailContainer>
  );
});

export default VideoDetail;

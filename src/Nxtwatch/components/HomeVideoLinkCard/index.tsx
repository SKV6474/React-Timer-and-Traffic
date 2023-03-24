import React from "react";
import { VideosList } from "../../interface";
import { getTime } from "../../utils";
import {
  ThumbUrl,
  ChannelProfileContainer,
  ChannelProfile,
  VideoDataContainer,
  DataContainer,
  Card,
  Dot,
} from "../../styledComponent";
import { useTranslation } from "react-i18next";

const VideoCard = (props: { object: VideosList }) => {
  const { t } = useTranslation();
  const { object } = props;

  const timeline = getTime(object.published_at);

  return (
    <Card>
      <ThumbUrl src={object.thumbnail_url} alt="thumbanil"></ThumbUrl>
      <VideoDataContainer>
        <ChannelProfileContainer>
          <ChannelProfile
            src={object.channel.profile_image_url}
            alt="channel"
          ></ChannelProfile>
        </ChannelProfileContainer>
        <div>
          <div>{object.title}</div>
          <DataContainer>{object.channel.name}</DataContainer>
          <DataContainer>
            {`${object.view_count}`} {t("views")} <Dot /> {`${timeline}`}{" "}
            {t("years ago")}
          </DataContainer>
        </div>
      </VideoDataContainer>
    </Card>
  );
};

export default VideoCard;

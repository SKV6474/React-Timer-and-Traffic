import React from "react";
import { useTranslation } from "react-i18next";
import { TrendingOrSaved } from "../../../../Nxtwatch/interface";
import {
  CardContainer,
  ChannelProfile,
  ChennelInfo,
  Dot,
  DotUpper,
  ThumnUrlImg,
  ToHideProfile,
  VideoCardData,
  VideoTitleStyle,
  ViewsandTime,
} from "../../../../Nxtwatch/styledComponent";

import { getTime } from "../../../../Nxtwatch/utils";

const VideoDescriptionCard = (props: { Data: TrendingOrSaved }) => {
  const { Data } = props;

  const { t } = useTranslation();

  return (
    <CardContainer>
      <ThumnUrlImg src={Data.thumbnail_url} alt="thumbUrl"></ThumnUrlImg>
      <ChennelInfo>
        <ToHideProfile>
          <ChannelProfile src={Data.channel.profile_image_url}></ChannelProfile>
        </ToHideProfile>
        <div>
          <VideoTitleStyle>{Data.title}</VideoTitleStyle>
          <VideoCardData>
            <div>{Data.channel.name}</div>
            <DotUpper>
              <Dot />
            </DotUpper>
            <ViewsandTime>
              {`${Data.view_count}`} {t("views")}
              <Dot />
              {`${getTime(Data.published_at)}`} {t("years ago")}
            </ViewsandTime>
          </VideoCardData>
        </div>
      </ChennelInfo>
    </CardContainer>
  );
};

export default VideoDescriptionCard;

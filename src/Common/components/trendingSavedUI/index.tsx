import React from "react";
import { TrendingOrSaved } from "../../../Nxtwatch/interface";

import VideoDescriptionCard from "./videoDescriptionCard";

import {
  TrendingSavedUIContainer,
  VideoLink,
} from "../../../Nxtwatch/styledComponent";

// props will be list of object for both saved and trending

const TrendingSavedUI = (props: { DataList: TrendingOrSaved[] }) => {
  const { DataList } = props;

  const CardVideoList = DataList.map((ele) => (
    <VideoLink to={`/videos/${ele.id}`}>
      <VideoDescriptionCard key={ele.id} Data={ele} />
    </VideoLink>
  ));

  return <TrendingSavedUIContainer>{CardVideoList}</TrendingSavedUIContainer>;
};

export default TrendingSavedUI;

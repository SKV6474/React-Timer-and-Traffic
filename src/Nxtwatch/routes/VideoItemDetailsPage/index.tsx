import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import VideoDetail from "../../components/videoDetailUi";

import {
  SideContentContainer,
  VideoDetailContainer,
  VideoFetchFailureContainer,
  VideoLoaderContainer,
} from "../../styledComponent";
import { ApiStatus, OfVideoDetails, Props } from "../../interface";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "../../../Common/components/Loader";
import LoadingWrapper from "../../../Common/components/LoadingWrapper";
import Failure from "../../../Common/components/Failure";
import { saveList } from "../../store";

const VideoItemDetailsRoute = (props: Props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const [videoDetails, setVideoDetails] = useState<OfVideoDetails>();
  const [apiStatus, setApiStatus] = useState(ApiStatus.loading);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
      });

      if (response.ok) {
        const data = await response.json();
        setVideoDetails(data.video_details);
        setApiStatus(ApiStatus.success);
      } else {
        setApiStatus(ApiStatus.failure);
      }
    };
    fetchData();
  }, [id]);

  const index = saveList.SavedVideoList.findIndex((ele) => ele.id === id);

  const renderVideoList = () => {
    return <VideoDetail videoDetails={videoDetails} index={index} />;
  };

  const renderLoadingView = () => {
    return (
      <VideoLoaderContainer>
        <Loader />
      </VideoLoaderContainer>
    );
  };

  const renderFailureView = () => {
    return (
      <VideoFetchFailureContainer>
        <Failure />
      </VideoFetchFailureContainer>
    );
  };

  return (
    <>
      <SideContentContainer>
        <VideoDetailContainer>
          <LoadingWrapper
            apiStatus={apiStatus}
            renderLoadingUi={renderLoadingView}
            renderFailureUi={renderFailureView}
            renderSuccessUi={renderVideoList}
          />
        </VideoDetailContainer>
      </SideContentContainer>
    </>
  );
};
export default WithHeader(WithSideBar(VideoItemDetailsRoute));

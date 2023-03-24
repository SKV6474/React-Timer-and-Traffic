import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import VideoDetail from "../../components/videoDetailUi";

import { SideContentContainer } from "../../styledComponent";
import { Props } from "../../interface";

const VideoItemDetailsRoute = (props: Props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  return (
    <>
      <SideContentContainer>
        <VideoDetail id={id} />
      </SideContentContainer>
    </>
  );
};
export default WithHeader(WithSideBar(VideoItemDetailsRoute));

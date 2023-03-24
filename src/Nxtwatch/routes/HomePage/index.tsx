import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import Home from "./homeDom";

import { SideContentContainer } from "../../styledComponent";

const HomeContainer = () => {
  return (
    <>
      <SideContentContainer>
        <Home />
      </SideContentContainer>
    </>
  );
};
export default WithHeader(WithSideBar(HomeContainer));

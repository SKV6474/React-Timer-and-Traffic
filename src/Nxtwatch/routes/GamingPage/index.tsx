import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  useEffect,
} from "react";

import SideBarHeader from "../../../Common/components/sideBarHeader";
import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import LoadingWrapper from "../../../Common/components/LoadingWrapper";

import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import GamingCard from "../../components/GamingCard";

import { gameList } from "../../store";
import { observer } from "mobx-react";

import {
  GameRouteContainer,
  GameVideoLink,
  LoaderContainer,
  SideContentContainer,
} from "../../styledComponent";

const GamingRoute = observer(() => {
  const gamingList = gameList.GamingList;

  useEffect(() => {
    if (gameList.ApiStatus === "failure" || gameList.ApiStatus === "loading") {
      gameList.fetchGameData();
    }
  }, []);

  let GamingCardList:
    | string
    | number
    | boolean
    | JSX.Element[]
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | null
    | undefined;

  if (gamingList.length !== 0) {
    GamingCardList = gamingList?.map((ele) => (
      <GameVideoLink to={`/videos/${ele.id}`}>
        <GamingCard key={ele.id} GameData={ele} />
      </GameVideoLink>
    ));
  }

  const renderGamingList = () => {
    return (
      <>
        <SideBarHeader type="gaming" />
        <GameRouteContainer>{GamingCardList}</GameRouteContainer>
      </>
    );
  };

  const renderLoadingView = () => {
    return (
      <>
        <SideBarHeader type="gaming" />
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
          apiStatus={gameList.ApiStatus}
          renderLoadingUi={renderLoadingView}
          renderFailureUi={renderFailureView}
          renderSuccessUi={renderGamingList}
        ></LoadingWrapper>
      </SideContentContainer>
    </>
  );
});

export default WithHeader(WithSideBar(GamingRoute));

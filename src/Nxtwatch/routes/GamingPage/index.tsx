import { useEffect } from "react";

import SideBarHeader from "../../../Common/components/sideBarHeader";
import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";

import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import GamingCard from "../../components/GamingCard";

import { inject, observer } from "mobx-react";
import * as mobx from "mobx";
import { SaveStore } from "../../store/ListStore";

import {
  GameRouteContainer,
  GameVideoLink,
  LoaderContainer,
  SideContentContainer,
} from "../../styledComponent";

const GamingRoute = inject("SaveStore")(
  observer(() => {
    const gamingList = mobx.toJS(SaveStore.GamingList);

    const response = SaveStore.ApiStatusGame;

    const isLoading = SaveStore.isLoadingGameAPI;

    useEffect(() => {
      if (SaveStore.GamingList.length === 0) {
        SaveStore.fetchGameData();
      }
    }, []);

    let GamingCardList;

    if (gamingList.length !== 0) {
      GamingCardList = gamingList?.map((ele) => (
        <GameVideoLink to={`/videos/${ele.id}`}>
          <GamingCard key={ele.id} GameData={ele} />
        </GameVideoLink>
      ));
    }

    return (
      <>
        <SideContentContainer>
          <>
            <SideBarHeader type="gaming" />
            {response && !isLoading && (
              <GameRouteContainer>{GamingCardList}</GameRouteContainer>
            )}
            {!response && isLoading && (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            )}
          </>
          {!response && !isLoading && <Failure />}
        </SideContentContainer>
      </>
    );
  })
);

export default WithHeader(WithSideBar(GamingRoute));

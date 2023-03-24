import React from "react";
import { GameObject } from "../../interface";
import {
  GameCard,
  GameDataCardDiv,
  GameThumbUrl,
  ShortDataGame,
  ShortDataGamUpper,
} from "../../../Nxtwatch/styledComponent";
import { useTranslation } from "react-i18next";

const GamingCard = (props: { GameData: GameObject }) => {
  const { t } = useTranslation();

  const { GameData } = props;
  return (
    <GameCard>
      <GameThumbUrl src={GameData.thumbnail_url} alt="ThumbUrl"></GameThumbUrl>
      <GameDataCardDiv>
        <div>{GameData.title}</div>
        <ShortDataGame>
          <ShortDataGamUpper>
            {GameData.view_count} {t("Watching")}
          </ShortDataGamUpper>
          <div> {t("Worldwide")}</div>
        </ShortDataGame>
      </GameDataCardDiv>
    </GameCard>
  );
};

export default GamingCard;

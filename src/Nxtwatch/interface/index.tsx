import { WithTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router-dom";

export type userDeatailsType = {
  username: string;
  password: string;
};

export type videosList = {
  channel: { name: string; profile_image_url: string };
  id: string;
  published_at: string;
  thumbnail_url: string;
  title: string;
  view_count: string;
};

export type OfVideoDetails = {
  channel: {
    name: string;
    profile_image_url: string;
    subscriber_count: string;
  };
  description: string;
  id: string;
  published_at: string;
  thumbnail_url: string;
  title: string;
  video_url: string;
  view_count: string;
};

export type GameObject = {
  view_count: string;
  id: string;
  thumbnail_url: string;
  title: string;
};

export type TrendingOrSaved = {
  channel: { name: string | undefined; profile_image_url: string | undefined };
  id: string | undefined;
  published_at: string | undefined;
  thumbnail_url: string | undefined;
  title: string | undefined;
  view_count: string | undefined;
};

export type LogoutFunctions = {
  onConfirm: () => void;
  onCancel: () => void;
};

export type MenuCloseFunc = {
  onChange: () => void;
};

export type Props = WithTranslation & RouteComponentProps<{ id: string }>;
export interface State {
  isLogoutPop: boolean;
  isLinkPop: boolean;
}

import { RouteComponentProps } from "react-router-dom";

export type UserDeatailsType = {
  username: string;
  password: string;
};

export type VideosList = {
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

export type Props = RouteComponentProps<{ id: string }>;

export enum ApiStatus {
  initial = "initial",
  loading = "loading",
  success = "success",
  failure = "failure",
}

export type LoadingWrapperProp = {
  apiStatus: ApiStatus;
  renderLoadingUi: () => JSX.Element;
  renderFailureUi: () => JSX.Element;
  renderSuccessUi: () => JSX.Element;
};

export type LoginSubmit = {
  onSubmitForm: (userDetails: UserDeatailsType) => void;
};

export type BannerProp = {
  handleCloseEvent: () => void;
};

export type VideoDetailProps = {
  videoDetails: OfVideoDetails | undefined;
  index: number;
};

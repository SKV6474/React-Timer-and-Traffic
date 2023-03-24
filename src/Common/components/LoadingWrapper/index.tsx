import { LoadingWrapperProp } from "../../../Nxtwatch/interface";

const LoadingWrapper = (props: LoadingWrapperProp): any => {
  const { apiStatus, renderLoadingUi, renderFailureUi, renderSuccessUi } =
    props;

  const renderRespectiveViewOfLoading = () => {
    switch (apiStatus) {
      case "initial":
      case "loading":
        return renderLoadingUi();
      case "success":
        return renderSuccessUi();
      case "failure":
        return renderFailureUi();
    }
  };
  return renderRespectiveViewOfLoading();
};

export default LoadingWrapper;

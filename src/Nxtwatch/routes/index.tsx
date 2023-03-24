import ProtectedRoute from "../../Authentication/components/ProtectedRoute";

import HomeRoute from "./HomePage/index";
import VideoItemDetailsRoute from "./VideoItemDetailsPage/index";
import TrendingRoute from "./TrendingPage/index";
import GamingRoute from "./GamingPage/index";
import SavedVideosRoute from "./SavedVideosPage/index";
import NotFoundPage from "../../Common/components/NotFoundPage";

const NxtWatchRouteContainer = [
  <ProtectedRoute exact path="/" component={HomeRoute} />,
  <ProtectedRoute exact path="/videos/:id" component={VideoItemDetailsRoute} />,
  <ProtectedRoute exact path="/trending" component={TrendingRoute} />,
  <ProtectedRoute exact path="/gaming" component={GamingRoute} />,
  <ProtectedRoute exact path="/saved-videos" component={SavedVideosRoute} />,
  <ProtectedRoute exact path="/not-found" component={NotFoundPage} />,
];

export { NxtWatchRouteContainer };

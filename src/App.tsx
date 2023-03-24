import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./Authentication/components/ProtectedRoute";

import Login from "./Nxtwatch/routes/LoginPage/index";
import HomeContainer from "./Nxtwatch/routes/HomePage";
import VideoItemDetailsRoute from "./Nxtwatch/routes/VideoItemDetailsPage";
import TrendingRoute from "./Nxtwatch/routes/TrendingPage";
import GamingRoute from "./Nxtwatch/routes/GamingPage/index";
import SavedVideosRoute from "./Nxtwatch/routes/SavedVideosPage/index";
import NotFoundPage from "./Nxtwatch/routes/NotFoundPage";

import { toggleTheme } from "./Nxtwatch/store/Theme";
import { SaveStore } from "./Nxtwatch/store/ListStore";

import { Provider } from "mobx-react";

//NOTE: App Component

const App = () => {
  return (
    <Provider SaveStore={SaveStore} toggleTheme={toggleTheme}>
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={HomeContainer} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetailsRoute}
            />
            <ProtectedRoute exact path="/trending" component={TrendingRoute} />
            <ProtectedRoute exact path="/gaming" component={GamingRoute} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosRoute}
            />
            <ProtectedRoute exact path="/not-found" component={NotFoundPage} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </>
    </Provider>
  );
};

export default App;

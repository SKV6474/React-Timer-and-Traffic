import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import { NxtWatchRouteContainer } from "./Nxtwatch/routes";
import { AuthenticationRoute } from "./Authentication/routes";

import { toggleTheme } from "./Nxtwatch/store";
import { saveList } from "./Nxtwatch/store";

import { Provider } from "mobx-react";

const App = () => (
  <Provider saveList={saveList} toggleTheme={toggleTheme}>
    <>
      <BrowserRouter>
        <Switch>
          {AuthenticationRoute}
          {NxtWatchRouteContainer}
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  </Provider>
);

export default App;

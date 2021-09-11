import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import PageRender from "./PageRender";
import { Footer, Header, NewsLetter } from "./components";
import { Alert } from "./components/alert/Alert";

import { refreshToken } from "./redux/actions/authAction";
import { getCategory } from "./redux/actions/categoryAction";
import { getHomeBlogs } from "./redux/actions/blogAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeBlogs())
    dispatch(getCategory());
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <div className="">
      <Router>
        <Header />
        <Alert />
        <div className="py-3 app-content-section">
          <div className="container pt-3">
            <Switch>
              <Route exact path="/" component={PageRender} />
              <Route exact path="/:page" component={PageRender} />
              <Route exact path="/:page/:slug" component={PageRender} />
            </Switch>
          </div>
        </div>

        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

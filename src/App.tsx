import Layout from "components/layout";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "route";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {routes.map((routeProps, index) => (
          <Route exact {...routeProps} key={index} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;

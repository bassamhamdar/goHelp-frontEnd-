import Login from "./components/Login";
import { Wrapper } from "./style/login";
import { SideNav } from "./components/SideNav";
import { Dashboard } from "./pages/admin/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UsersDashboard } from "./pages/admin/UsersDashboard";
import { OrgDashboard } from "./pages/admin/OrgDashboard";
import { FaqDashboard } from "./pages/admin/FaqDashboard";
import { AboutDashboard } from "./pages/admin/AboutDashboard";
function App() {
  return (
    <Router>
      <Wrapper>
        <SideNav />
        <Switch>
          <Route path="/admin" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/user" component={UsersDashboard} />
          <Route path="/org" exact component={OrgDashboard} />
          <Route path="/faq" component={FaqDashboard} />
          <Route path="/about" component={AboutDashboard} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;

import Login from "./components/Login";
import { SideNav } from "./components/SideNav";
import { Wrapper } from "./style/adminLogin";
import { Dashboard } from "./pages/admin/Dashboard";
import { UsersDashboard } from "./pages/admin/UsersDashboard";
import { OrgDashboard } from "./pages/admin/OrgDashboard";
import { FaqDashboard } from "./pages/admin/FaqDashboard";
import { AboutDashboard } from "./pages/admin/AboutDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Wrapper>
        <SideNav />
        <Switch>
          <Route path="/admin" exact component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/admin/user" exact component={UsersDashboard} />
          <Route path="/admin/org" exact component={OrgDashboard} />
          <Route path="/admin/faq" exact component={FaqDashboard} />
          <Route path="/admin/about" exact component={AboutDashboard} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;

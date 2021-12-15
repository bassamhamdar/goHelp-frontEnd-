import AdminLogin from "./components/AdminLogin";
import UserLogin from "./pages/user/UserLogin";
import { Wrapper } from "./style/login";
import { SideNav } from "./components/SideNav";
import { Dashboard } from "./pages/admin/Dashboard";
import { Route, Switch, useHistory } from "react-router-dom";
import { UserProfile } from "./pages/user/UserProfile";
import { Home } from "./pages/home/Home";
import { Nav } from "./components/Nav";
import { UserRegister } from "./pages/user/UserRegister";
import { OrgTable } from "./pages/user/OrgTable";
import { Organization } from "./pages/user/Organization";
import { OrgRegister } from "./pages/org/OrgRegister";
import { Posts } from "./pages/user/Posts";

function App() {
  const history = useHistory();
  const path = history.location.pathname;
  const condition = path.split("/", 2)[1];
  return (
    <Wrapper>
      {condition === "dashboard" ? <SideNav /> : null}
      {condition === "dashboard" || condition === "admin" ? null : <Nav />}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/register" component={UserRegister} />
        <Route path="/user/login" component={UserLogin} />
        <Route path="/user/org/profile/:id" exact component={Organization} />
        <Route path="/user/org" component={OrgTable} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/user/posts" component={Posts} />
        <Route path="/org/register" component={OrgRegister} />
        <Route path="/admin" component={AdminLogin} />
        <Dashboard />
      </Switch>
    </Wrapper>
  );
}

export default App;

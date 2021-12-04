import Login from "./components/Login";
import UserLogin from "./components/UserLogin";
import { Wrapper } from "./style/login";
import { SideNav } from "./components/SideNav";
import { Dashboard } from "./pages/admin/Dashboard";
import { Route, Switch, useHistory } from "react-router-dom";
import { UserProfile } from "./pages/user/UserProfile";
import { Home } from "./pages/home/Home";
import { Nav } from "./components/Nav";
function App() {
  const history = useHistory();
  const path = history.location.pathname;
  const condition = path.split("/", 2)[1];
  return (
    <Wrapper>
      {condition === "dashboard" ? <SideNav /> : null}
      {condition === "dashboard" || condition === "admin" ? null : <Nav />}
      {console.log("cond", condition)}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/login" component={UserLogin} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/admin" component={Login} />
        <Dashboard />
      </Switch>
    </Wrapper>
  );
}

export default App;

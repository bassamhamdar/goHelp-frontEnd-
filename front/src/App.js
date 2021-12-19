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
import { ToastContainer } from "react-toastify";
import { OrgProfile } from "./pages/org/OrgProfile";
import "react-toastify/dist/ReactToastify.css";
import { UserProtectedRoute } from "./components/UserProtectedRoute";
import { User } from "./pages/user/User";
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
        <Route path="/org/register" component={OrgRegister} />
        <Route path="/org/profile" component={OrgProfile} />
        <Route path="/admin" component={AdminLogin} />
        <UserProtectedRoute path="/user" component={User} />
        <Dashboard />
      </Switch>
      <ToastContainer />
    </Wrapper>
  );
}

export default App;

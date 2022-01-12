import AdminLogin from "./components/AdminLogin";
import UserLogin from "./pages/user/UserLogin";
import { Wrapper } from "./style/login";
import { SideNav } from "./components/SideNav";
import { Dashboard } from "./pages/admin/Dashboard";
import { Route, Switch, useHistory } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { UserRegister } from "./pages/user/UserRegister";
import { OrgRegister } from "./pages/org/OrgRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProtectedRoute } from "./components/UserProtectedRoute";
import { User } from "./pages/user/User";
import { OrgLogin } from "./pages/org/OrgLogin";
import { OrgProtectedRoute } from "./components/OrgProtectedRoute";
import { Org } from "./pages/org/Org";
import { Nav } from "./components/Nav";
import { useSelector } from "react-redux";
function App() {
  const user_token = useSelector((state) => state.users.user_token);
  const org_token = useSelector((state) => state.orgs.org_token);
  const history = useHistory();
  const path = history.location.pathname;
  const condition = path.split("/", 2)[1];
  return (
    <Wrapper>
      {condition === "dashboard" && <SideNav />}
      {condition !== "dashboard" && (
        <Nav user_token={user_token} org_token={org_token} />
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/register" component={UserRegister} />
        <Route path="/user/login" component={UserLogin} />
        <Route path="/org/login" exact component={OrgLogin} />
        <Route path="/org/register" component={OrgRegister} />

        <Route path="/admin" component={AdminLogin} />
        <OrgProtectedRoute path="/org" component={Org} />
        <UserProtectedRoute path="/user" component={User} />
        <Dashboard />
      </Switch>
      <ToastContainer />
    </Wrapper>
  );
}

export default App;

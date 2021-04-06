import { Route, Switch } from 'react-router-dom';
import Demands from '../Pages/Demands';
import ListDemands from '../Pages/ListDemands';
import Login from '../Pages/Login';
import RegisterCompany from '../Pages/RegisterCompany';
import RegisterFreela from '../Pages/RegisterFreela';
import PrivateRoutes from './PrivateRoutes';


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/users" exact component={RegisterFreela} />
            <Route path="/companys" exact component={RegisterCompany} />
            <PrivateRoutes path="/demands" exact component={Demands} role="ROLE_ADMIN" />
            <PrivateRoutes path="/list" exact component={ListDemands} role="ROLE_ADMIN" />

            {/* <PrivateRoutes path="/profile" exact component={ListDemands} role="ROLE_USER" />
            <PrivateRoutes path="/demands" exact component={Demands} role="ROLE_USER" />
            {console.log("Rotas", PrivateRoutes)} */}

            {/* <PrivateRoutes path="/demands" exact component={Demands} role="ROLE_USER" />
            <PrivateRoutes path="/profile" exact component={ListDemands} role="ROLE_USER" /> */}
        </Switch>
    )

}

export default Routes;
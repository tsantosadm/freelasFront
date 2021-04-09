import { Route, Switch } from 'react-router-dom';
import HeaderBar from '../components/HeaderBar';
import { Grid } from '../components/Layout/styles';
import UserData from '../components/UserData';
import UserList from '../components/UserList';
import Demands from '../Pages/Demands';
import ListDemands from '../Pages/ListDemands';
import Login from '../Pages/Login';
import RegisterCompany from '../Pages/RegisterCompany';
import RegisterFreela from '../Pages/RegisterFreela';
import PrivateRoutes from './PrivateRoutes';


const Routes =
    () => {
        return (
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/users" exact component={RegisterFreela} />
                <Route path="/companys" exact component={RegisterCompany} />
                <Grid>
                    <HeaderBar />
                    <UserData />

                    {/* <PrivateRoutes path="/demands" exact component={Demands} role="ROLE_ADMIN" />
                    <PrivateRoutes path="/list" exact component={ListDemands} role="ROLE_ADMIN" /> */}

                    <PrivateRoutes path="/demands" exact component={Demands} role="ROLE_USER" />
                    <PrivateRoutes path="/profile" exact component={ListDemands} role="ROLE_USER" />

                    <UserList />


                </Grid>

            </Switch>
        )

    }

export default Routes;
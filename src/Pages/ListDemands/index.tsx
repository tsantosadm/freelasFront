import React from 'react';
import ChannelListUser from '../../components/ChannelListUser';
import ChannelProfile from '../../components/ChannelProfile';
import HeaderBar from '../../components/HeaderBar';
import { Grid } from '../../components/Layout/styles';
import PermissionComponent from '../../components/PermissionComponent';
import UserData from '../../components/UserData';
import UserList from '../../components/UserList';



const ListDemands: React.FC = () => {


    return (
        <>
            <Grid>
                <HeaderBar />
                <UserData />
                <PermissionComponent role="ROLE_ADMIN">
                    <ChannelListUser />
                </PermissionComponent>
                <PermissionComponent role="ROLE_USER">
                    <ChannelProfile />
                </PermissionComponent>
                <UserList />
            </Grid>



        </>
    );
}

export default ListDemands;
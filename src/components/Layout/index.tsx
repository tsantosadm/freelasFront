import React from 'react';
import ChannelData from '../ChannelData';
import HeaderBar from '../HeaderBar';
import UserData from '../UserData';
import UserList from '../UserList';

import { Grid } from './styles'

const Layout: React.FC = () => {
    return (
        <Grid>
            <HeaderBar />
            <UserData />
            <ChannelData />
            <UserList />
        </Grid>

    )
}

export default Layout;
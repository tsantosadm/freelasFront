import React from 'react';
import ChannelData from '../../components/ChannelData';
import HeaderBar from '../../components/HeaderBar';
import { Grid } from '../../components/Layout/styles';
import UserData from '../../components/UserData';
import UserList from '../../components/UserList';
// import HeaderBar from '../../components/HeaderBar';
// import { Grid } from '../../components/Layout/styles';
// import UserData from '../../components/UserData';
// import UserList from '../../components/UserList';


import './styles.css';

const Demands: React.FC = () => {

    return (
        <>
            <Grid>
                <HeaderBar />
                <UserData />
                <ChannelData />
                <UserList />
            </Grid>
            {/* <ChannelData />
            {console.log("Não sei", ChannelData)} */}

            {/* <List /> */}
        </>
    );
}

export default Demands;
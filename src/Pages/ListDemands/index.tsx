import React from 'react';
import ChannelListUser from '../../components/ChannelListUser';
import ChannelProfile from '../../components/ChannelProfile';
import PermissionComponent from '../../components/PermissionComponent';




const ListDemands: React.FC = () => {


    return (
        <>
            <PermissionComponent role="ROLE_ADMIN">
                <ChannelListUser />
            </PermissionComponent>
            <PermissionComponent role="ROLE_USER">
                <ChannelProfile />
            </PermissionComponent>

        </>
    );
}

export default ListDemands;
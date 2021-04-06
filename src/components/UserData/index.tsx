import React from 'react';
import DataButton from '../DataButton';

import ButtonData from '../ButtonData'

import { Container, Separator } from './styles';
import PermissionComponent from '../PermissionComponent';


const UserData: React.FC = () => {
    return (
        <Container>
            <DataButton isUser />

            <Separator />
            <PermissionComponent role="ROLE_ADMIN">
                <a href="/demands" ><ButtonData dataName="TEXTOS" /></a>
                <a href="/list"><ButtonData dataName="FREELAS" /></a>
            </PermissionComponent>
            <PermissionComponent role="ROLE_USER">
                <a href="/profile"><ButtonData dataName="PERFIL" /></a>
                <a href="/demands"><ButtonData dataName="PEDIDOS" /></a>
            </PermissionComponent>
        </Container>
    )
}

export default UserData;
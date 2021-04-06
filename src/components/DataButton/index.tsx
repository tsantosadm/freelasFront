import React from 'react';

import use from '../../assets/images/use.svg';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isUser?: boolean;
}

const DataButton: React.FC<Props> = ({
    selected,
    isUser
}) => {
    return (
        <Button
            isUser={isUser}
            className={selected ? 'active' : ''}
        >
            {isUser && <img src={use} alt="user" width="24" height="24" />}
        </Button>
    )
}

export default DataButton;
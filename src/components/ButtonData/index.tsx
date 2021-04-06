import React from 'react';

import { Container } from './styles';

export interface Props {
    dataName: string;
    selected?: boolean;
}

const ButtonData: React.FC<Props> = ({ dataName, selected }) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>

                <span>{dataName}</span>
            </div>
        </Container>
    )
}

export default ButtonData;
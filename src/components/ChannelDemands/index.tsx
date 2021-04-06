
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
// import PermissionComponent from '../../components/PermissionComponent';

import api from '../../services/api';
import PermissionComponent from '../PermissionComponent';

interface DemandData {
    id: string;
    title: string;
    description: string;
    created_at: Date;
}


const ChannelDemands: React.FC = () => {
    const [demands, setDemands] = useState<DemandData[]>([] as DemandData[]);
    useEffect(() => {
        api.get("demands").then((reponse) => setDemands(reponse.data));
    }, []);




    return (
        <>
            <Container>
                <div className="Card">
                    {demands.map((demand) => (

                        <div key={demand.id}>
                            <p />
                            <span>Título: {demand.title}</span>
                            <br />
                            <span>Detalhes: {demand.description}</span>
                            <br />
                            <span> {(demand.created_at)}</span>

                            <br />
                            <PermissionComponent role="ROLE_ADMIN">
                                <button>Editar</button>
                                <button>Apagar</button>
                            </PermissionComponent>
                            <PermissionComponent role="ROLE_USER">
                                <button>Aceitar</button>
                                <button>Negar</button>
                            </PermissionComponent>
                            <button>ABERTO</button>
                            <hr />

                        </div>

                    )
                    )}
                </div>

            </Container>
        </>
    )
}

export default ChannelDemands;
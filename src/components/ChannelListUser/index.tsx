
import React, { useEffect, useState } from 'react';
import { Container, Pedidos } from './styles';

import api from '../../services/api';

interface FreelaData {
    id: string;
    name: string;
    formation: string;
    linkedin: string;
    whatsapp: string;
    email: string;
    special: string;
    cpf: string;
}


const ChannelListUser: React.FC = () => {
    const [freelas, setFreelas] = useState<FreelaData[]>([] as FreelaData[]);
    useEffect(() => {
        api.get("users").then((reponse) => setFreelas(reponse.data));
    }, []);


    return (

        <>

            <Container>
                <Pedidos>
                    <div className="divline">
                        <div className="line">
                            <div>FREELAS</div>
                        </div>
                    </div>
                </Pedidos>

                <div className="Card">
                    {freelas.map((freela) => (

                        <div key={freela.id}>
                            <p />
                            <div>
                                <span>Nome: {freela.name}</span>
                            </div>

                            <br />
                            <p />
                            <span>Formação: {freela.formation}</span>
                            <br />
                            <span>Linkedin: {freela.linkedin}</span>
                            <br />
                            <span>Whatsapp: {(freela.whatsapp)}</span>
                            <br />
                            <span>Email: {freela.email}</span>
                            <br />
                            <span>Especialidade: {(freela.special)}</span>
                            <br />


                            <hr />
                        </div>

                    )
                    )}
                </div>

            </Container>
        </>
    )
}

export default ChannelListUser;
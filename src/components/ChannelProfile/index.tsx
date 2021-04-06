
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
        api.put("users/id").then((reponse) => setFreelas(reponse.data));
    }, []);
    console.log(freelas);


    return (

        <>

            <Container>
                <Pedidos>
                    <div className="divline">
                        <div className="line">
                            <div>PERFIL</div>
                        </div>
                    </div>
                </Pedidos>

                <div className="Card">
                    {freelas.findIndex((freela) => (

                        <div key={freela.id}>
                            <p />
                            <div>
                                <input>
                                    <span>Nome: {freela.name}</span>
                                </input>
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
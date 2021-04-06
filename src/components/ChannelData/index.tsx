import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import ChannelDemands from '../ChannelDemands';
import PermissionComponent from '../PermissionComponent';
import Select from 'react-select'
import { skillOptions } from '../../data';

import { Container, Demands, DemandsF, Pedidos, Selection } from './styles';


const ChannelData: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // const handleSubmit = useCallback(async (event) => {
    //     event.preventDefault();

    //     await signIn({ email, password });
    //     history.push("demands");

    // }, [email, history, password, signIn]);

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await api.post('/demands', {
            title, description
        })


    }, [title, description])

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <Container>
                <PermissionComponent role="ROLE_ADMIN">
                    <div className="form-container">
                        <form className="form-text" onSubmit={handleSubmit}>
                            <div className="div-formT">
                                <span>Titulo:</span>
                                <div className="form-input">
                                    <input type="text" onChange={event => setTitle(event.target.value)} />
                                </div>
                            </div>
                            <div className="options">
                                <span>Skills:</span>
                                <Selection>
                                    <Select
                                        defaultValue={[skillOptions[2], skillOptions[3]]}
                                        isMulti
                                        options={skillOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </Selection>
                            </div>

                            <div className="div-form">
                                <span>Destalhes:</span>
                                <div className="form-input">
                                    <textarea rows={10} cols={61} onChange={event => setDescription(event?.target.value)} />
                                </div>
                            </div>

                            <div className="div-button">
                                <button type="submit" onClick={refreshPage}>ENVIAR</button>
                            </div>
                        </form>
                    </div>

                </PermissionComponent >
                <Pedidos>
                    <div className="divline">
                        <div className="line">
                            <div>PEDIDOS</div>
                        </div>
                    </div>
                </Pedidos>
                <PermissionComponent role="ROLE_ADMIN">
                    <Demands>
                        <ChannelDemands />
                    </Demands>
                </PermissionComponent>

                <PermissionComponent role="ROLE_USER">
                    <DemandsF>
                        <ChannelDemands />
                    </DemandsF>
                </PermissionComponent>

            </Container>
        </>
    )
}

export default ChannelData;
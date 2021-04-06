/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { MdBusinessCenter, MdCardMembership, MdEmail, MdLock } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import login from '../../assets/images/login.png'
import api from '../../services/api';

const RegisterCompany: React.FC = () => {
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState([
        "0cf538b1-a13b-4ca3-907b-3713a5d3e4f1"]);
    const [show, setShow] = useState(false);

    const history = useHistory();

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await api.post('/companys', {
            name, cnpj, email, password, roles
        })

        history.push("/");

    }, [name, cnpj, email, password, roles, history])

    const handleClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShow(!show);
    }


    return (
        <div className="login">
            <div className="login-logo">
                <img src={login} alt="login" />
            </div>

            <form className="login-right" onSubmit={handleSubmit}>
                <h1>Cadastro na Plataforma</h1>

                <div className="login-loginInputEmail">
                    <MdBusinessCenter />
                    <input type="name"
                        placeholder="Nome da Empresa"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <MdCardMembership />
                    <input type="cnpj"
                        placeholder="Informe o CNPJ"
                        value={cnpj}
                        onChange={event => setCnpj(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input type="email"
                        placeholder="Informe o email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                        type="password"
                        placeholder="Digite sua Senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye
                                onClick={handleClick}
                                size={20}
                            />
                        ) : (
                            <HiEyeOff
                                onClick={handleClick}
                                size={20}
                            />
                        )}
                    </div>
                </div>
                <input id="setRoles" name="roleId" type="hidden" value={roles} />
                <button type="submit"> Cadastrar </button>

            </form>


        </div>
    );
}

export default RegisterCompany;
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import login from '../../assets/images/login.png'

import { MdEmail, MdLocationCity, MdLock, MdPerson } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { ImProfile, ImWhatsapp } from 'react-icons/im';
import { AiFillLinkedin, AiOutlineIdcard } from 'react-icons/ai';
import { BsFillAwardFill } from 'react-icons/bs';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import Select from 'react-select/src/Select';
import { skillOptions } from '../../data';

const RegisterFreela: React.FC = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [formation, setFormation] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [special, setSpecial] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState("88676dbc-7860-4263-81c5-530639e789fc");
    const [show, setShow] = useState(false);

    const history = useHistory();

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await api.post('/users', {
            name, city, formation, linkedin, whatsapp, email, special, cpf, password, roles
        })
        history.push("/");

    }, [name, city, formation, linkedin, whatsapp, email, special, cpf, password, roles, history])

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
                    <MdPerson />
                    <input type="name"
                        placeholder="Digite seu Nome"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <MdLocationCity />
                    <input type="city"
                        placeholder="Informe sua Cidade"
                        value={city}
                        onChange={event => setCity(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <ImProfile />
                    <input type="formation"
                        placeholder="Informe sua Formação"
                        value={formation}
                        onChange={event => setFormation(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <AiFillLinkedin />
                    <input type="linkedin"
                        placeholder="Informe seu Linkedin"
                        value={linkedin}
                        onChange={event => setLinkedin(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <ImWhatsapp />
                    <input type="whatsapp"
                        placeholder="Informe seu Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input type="email"
                        placeholder="Informe seu Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <BsFillAwardFill />
                    {/* <Select
                        defaultValue={[skillOptions[2], skillOptions[3]]}
                        isMulti
                        options={skillOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    /> */}
                    <input type="special"
                        placeholder="Informe sua Especialidade"
                        value={special}
                        onChange={event => setSpecial(event.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <AiOutlineIdcard />
                    <input type="cpf"
                        placeholder="Informe seu cpf"
                        value={cpf}
                        onChange={event => setCpf(event.target.value)}
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

export default RegisterFreela;
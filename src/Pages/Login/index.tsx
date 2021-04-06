import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import "./login.css";

// import login from '../../assets/images/login.png'
import { MdEmail, MdLock } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShow(!show);
    }

    const history = useHistory();

    const { signIn } = useAuth();

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        await signIn({ email, password });
        history.push("demands");

    }, [email, history, password, signIn]);

    return (
        <div className="login">
            <div className="login-logo">
                <div />
            </div>

            <form className="login-right" onSubmit={handleSubmit}>
                <h1>Acessar Plataforma</h1>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input type="email"
                        placeholder="Digite seu Email"
                        // value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                        type="password"
                        placeholder="Digite sua Senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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

                <button type="submit"> Entrar </button>

                <h4>Não tenho conta</h4>

                <div className="butons">
                    <button>
                        <a href="/users">Freela</a>
                    </button>
                    <button>
                        <a href="/companys">Empresa</a>
                    </button>
                </div>

            </form>

        </div>
    )
}

export default Login;
import React from "react";
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import GameLogo from '../../components/GameLogo';
import useLoginHandle from '../../GameHooks/useLoginHandle';
import { ROUTES } from '../../common-service';
import { useHistory } from "react-router-dom";

const Login = () => {

    const { email, setEmail, password, setPassword, logincheck, login, check, player, loginSuccess, errorMsg } = useLoginHandle('');
    let history = useHistory();

    if (loginSuccess) {
        history.push({ pathname: ROUTES.HOME, player: player });
    }
    const signUp = () => {
        history.push(ROUTES.SIGNUP);
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <GameLogo />
            {errorMsg ? <div className="text-primary">{errorMsg}</div> : null}
            <TextInput className="lowercase"
                text={email}
                setText={setEmail}
                placeholder="TYPE YOUR EMAIL"
                requiredMsg="Email can't be blank!!"
                required={true}
                check={check}
                isAutoFocus={false}
            />
            <TextInput
                text={password}
                setText={setPassword}
                placeholder="TYPE YOUR PASSWORD"
                required={true}
                isAutoFocus={false}
                requiredMsg="Password can't be blank!!"
                check={check}
            />
            {!logincheck ? <div className="flex flex-row justify-around">
                <Button text="Login" onClick={() => login()} />
                <Button text="SignUp" onClick={() => signUp()} />
            </div> : <div className="text-primary">Loading...</div>}

        </div>);
}
export default Login;
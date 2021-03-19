import React from 'react';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import GameLogo from '../../components/GameLogo';
import useSignUpHandle from '../../GameHooks/useSignUpHandle';
import { ROUTES } from '../../common-service';
import { useHistory } from "react-router-dom";

const Signup = () => {

    const { username, setUsername, email, setEmail, password, setPassword, check, successMsg, signupcheck, errorMsg, signup} = useSignUpHandle('');
    let history = useHistory();
    // if (signupSuccess) {
    //     history.push(ROUTES.LOGIN);
    // }
    const login = () => {
        history.push(ROUTES.LOGIN);
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <GameLogo />
            {successMsg?<div className="text-correct">{successMsg}</div>:null}
            {errorMsg?<div className="text-primary">{`Error : ${errorMsg}`}</div>:null}
            <TextInput
                text={username}
                setText={setUsername}
                placeholder="TYPE YOUR USERNAME"
                required={true}
                isAutoFocus={false}
                requiredMsg="Username can't be blank!!"
                check={check}
            />
            <TextInput
                text={email}
                setText={setEmail}
                placeholder="TYPE YOUR EMAIL"
                required={true}
                isAutoFocus={false}
                requiredMsg="Email can't be blank!!"
                check={check}
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
            {!signupcheck ?  <div className="flex flex-row justify-around">
            <Button text="SignUp" onClick={() => signup() } />
            <Button text="Login" onClick={() => login()} />
            </div>:<div className="text-primary">Loading...</div>}
        </div>
    );
}
export default Signup;
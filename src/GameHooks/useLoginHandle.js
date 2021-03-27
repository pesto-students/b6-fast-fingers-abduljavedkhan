import { useState, useCallback } from "react";
import {  LOGIN_API_ENDPOINT } from '../common-service';
//import usePlayer from '../GameHooks/usePlayer';

const useLoginHandle = () => {
// removed val from email password
    const [ player, setPlayer ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check,setCheckState] = useState(false);
    const [logincheck,setLoginCheck] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    const [loginSuccess, setLoginSuccess] =useState(false);

    const login = useCallback(()=>{
    setCheckState(true)
    if(errorMsg)setErrorMsg('')
    if(email && password){
        setLoginCheck(true)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestParams = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({email,password}),
      redirect: "follow",
    };
    fetch(LOGIN_API_ENDPOINT,requestParams ).then((res) => res.json())
        .then((data) =>{ 
            console.log(data);
        if (!!data && data['response']["status"]==="success") {
            console.log('response message: ' + data['response']['message']);
            console.log('response user: ' + data['response']['data']['userName']);
            setPlayer(data['response']['data']['userName']);
            setLoginSuccess(true); 
            setCheckState(false)
            setPassword('');
            setEmail('');  
        }
        else if(data['response']['status']==="fail") {
            console.log('response message: ' + data['response']['message']);
            setErrorMsg(data['response']['message'])
            setCheckState(false)
            setPassword('');
            setEmail('');
        }
    }).catch((err) => console.log(err))
    .finally(()=>setLoginCheck(false))
    }
}, [email, password, errorMsg, setPlayer]);

    return {
        email, 
        setEmail, 
        password,
        setPassword,
        player,
        setPlayer,
        login,
        loginSuccess,
        setLoginSuccess,
        logincheck,
        setLoginCheck,
        check,
        setCheckState,
        errorMsg,
        setErrorMsg
    }
}
export default useLoginHandle;
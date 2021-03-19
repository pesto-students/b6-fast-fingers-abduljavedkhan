import { useState, useCallback } from "react";
import {  REGISTER_API_ENDPOINT } from '../common-service';

const useLoginHandle = (val) => {
    const [username, setUsername] = useState(val);
    const [email, setEmail] = useState(val);
    const [password, setPassword] = useState(val);
 
    const [signupSuccess, setSignupSuccess] =useState(false);

    const [check,setCheckState] = useState(false);
    const [signupcheck,setSignupCheck] = useState(false);
    const [successMsg,setSuccessMsg] = useState('');
    const [errorMsg,setErrorMsg] = useState('');

    const signup = useCallback(()=>{
      setCheckState(true);
      if(successMsg)setSuccessMsg('')
      if(errorMsg)setErrorMsg('')
      if(email && password && username){
        setSignupCheck(true)
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestParams = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({user_name:username,email,password}),
          redirect: "follow",
        };
        fetch(REGISTER_API_ENDPOINT,requestParams).then((res) => res.json())
        .then((data) =>{ 
            console.log(data);
        if (!!data && data['response']["status"]==="success") {
            console.log('response message: ' + data['response']['message']);
            console.log('response user: ' + data['response']['data']);
            setSuccessMsg(data['response']['message']);
            setUsername('');
            setPassword('');
            setEmail('');
            setCheckState(false);
            setSignupSuccess(true)
        }
        else if(data['response']['status']==="fail") {
            console.log('response message: ' + data['response']['message']);
            setErrorMsg(data['response']['message']);
            setUsername('');
            setPassword('');
            setEmail('');
            setCheckState(false);
        }
    }).catch((err) => console.log(err))
      .finally(()=>setSignupCheck(false))}
      }, [username, email, password,errorMsg,successMsg]);
    return {
        username,
        setUsername,
        email, 
        setEmail, 
        password,
        setPassword,
        signup,
        signupSuccess,
        check,
        signupcheck,
        setSignupCheck,
        successMsg,
        setSuccessMsg,
        errorMsg,
        setErrorMsg
    }
}
export default useLoginHandle;
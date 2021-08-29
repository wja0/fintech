import React, {useState, useEffect} from 'react'
import Header from '../component/Header';
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const AuthResult = () => {
    const {search} = useLocation();
    const {code} = queryString.parse(search);

    useEffect(()=>{
        getAccessToken();
    }, []);
    
    const getAccessToken = () =>{
        console.log("토큰을 가져옵니다");
    }
    return (
        <div>
            <Header title="인증결과"></Header>
            <p>인증 코드 : {code}</p>
        </div>
    )
}

export default AuthResult

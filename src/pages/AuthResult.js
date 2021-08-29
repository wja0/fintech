import React, {useState, useEffect} from 'react'
import Header from '../component/Header';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
// 쿼리스트링을 가져오기 위한 React Hook

// 인증 후에 응답 URL이 여기로 오게 설정되어 있음
// Access Token이 들어오는 주소 :
// http://localhost:3000/authResult?code=ktoqXdtze3joy..... 이기 때문이다.

const AuthResult = () => {
    // 인증코드 화면 출력 쿼리스트링 - jsObject
    const {search} = useLocation();
    // useLocation hooks : 사용자가 현재 머물러있는 페이지에 대한 정보 제공
    // pathname : URL + page/ 까지 출력
    // search : GET 파라미터. ?code=... 부분 출력
    const {code} = queryString.parse(search);
    // GET 파라미터의 key : value에서 value를 가져옴
    // ex) http://localhost:3000/home?keyword=리액트
    // search: ?keyword=리액트
    // keyword 출력결과: "리액트"
    // 여기선 code 값을 가져옴

// code에 AccessToken이 저장된다!!!

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

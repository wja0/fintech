import React, {useState, useEffect} from 'react'
import Header from '../component/Header';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
// 쿼리스트링을 가져오기 위한 React Hook
import axios from "axios";

// 인증 후에 응답 URL이 여기로 오게 설정되어 있음
// 인증 Code가 들어오는 주소 :
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

// <결론> code에 인증 Code가 저장된다!!!

    const [accessToken, setAccessToken] = useState("토큰 받아오기 전");
    // accessToken 배열을 통해 눈으로 확인

    useEffect(()=>{
        // useEffect : 해당 컴포넌트가 그려질 때 제일 먼저 실행되는 function
        getAccessToken();
    }, []);
    
    const getAccessToken = () =>{
        // accesstoken 가져오는 메소드 : post (code 전송)
        const sendData = {
            // Post로 전송할 데이터
            code : code, // 쿼리스트링으로 받아온 code 데이터, 전송
            client_id : "bc2c88d6-078c-4061-8699-63bf7744b9f3",
            client_secret : "1daddeb5-85a9-4287-8a65-d2b892cb872e",
            redirect_uri : "http://localhost:3000/authResult",
            grant_type : "authorization_code"
        };

        const encodedSendData = queryString.stringify(sendData);
        //전달하는 data 형식 url 형식에 맞춰서 변경

        const option = {
            method: "POST",
            url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
            headers :{
                "Content-Type" : "application/x-www-form-urlencoded",
            }, //url 형식에 맞춰서 전송해야함
            data: encodedSendData,
        };

        axios(option).then((response) => {
            console.log(response.data.access_token);
            setAccessToken(response.data.access_token)
            // accessToken 배열을 통해 눈으로 확인
        });
        //axios 오브젝트 설정
    };

    return (
        <div>
            <Header title="인증결과"></Header>
            <p>인증 코드 : {code}</p>
            <p>AccessToken : {accessToken}</p>
        </div>
    )
    // accessToken 배열 화면에 출력
}
// 새로고침하면 안나옴. 토큰 재사용 방지용.

export default AuthResult
// 1) 오픈뱅킹 인증 사이트에서 code 받기
// 2) code 주고 accessToken 받기
// 3) accessToken으로 다양한 기능 사용

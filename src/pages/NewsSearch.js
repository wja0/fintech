import React, {useState} from 'react'
import Header from '../component/Header'
import SearchInput from '../component/NewsSearch/SearchInput'
import NewsList from '../component/NewsSearch/NewsList'
import axios from "axios";

const NewsSearch = () => {
    const [searchText, setSearchText] = useState();
    const [searchResult, setSearchResult] = useState([]);    
    // 데이터와 검색어가 계속 바뀐다. 
    // useState로 동적 변경
    // searchTest : 검색어 저장
    // searchResult : 검색 결과 저장

    const handleSearchTextChange = (e) =>{
        // target 이벤트 가져옴
        const {value} = e.target;
        setSearchText(value);

    };

    const handleSearchButtonClick = () =>{
        // 뉴스 API 요청 전달하고 searchResult 값 변경하기 
        //  newsapi에서 검색값 input 입력값 변수로 들어가게 요청 전송
        axios
        .get(
            `https://newsapi.org/v2/everything?q=${searchText}&from=2021-08-01&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko`
        )
        .then((response) => {
            console.log(response.data.articles); 
            // data 받아옴
            setSearchResult(response.data.articles);
            // 결과값 변경
        });
    };

    return (
        <div>
            <Header title="뉴스 검색"></Header> 
            <SearchInput 
                handleInput={handleSearchTextChange}
                handleClick={handleSearchButtonClick}
            ></SearchInput>
            <NewsList searchResult={searchResult}></NewsList>
        </div>
    );
    // 헤더 생성 "뉴스 검색" Header
    // 검색 가능 입력 창, 버튼 추가 SearchInput
    // handleInput 프로퍼티 추가로 Input 창에 값을 입력하면 값이 변경됨
    // handleButton 버튼을 눌렀을 때 생기는 이벤트 

};

export default NewsSearch


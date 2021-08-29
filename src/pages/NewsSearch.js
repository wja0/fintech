import React, {useState} from 'react'
import Header from '../component/Header'
import SearchInput from '../component/NewsSearch/SearchInput'

const NewsSearch = () => {
    const [serachText, setSearchText] = useState();
    const [searchResult, setSearchResult] = useState();    
    // 데이터와 검색어가 계속 바뀐다. 
    // useState로 동적 변경
    // searchTest : 검색어 저장
    // searchResult : 검색 결과 저장

    const handleSearchTextChange = (e) =>{
        // target 이벤트 가져옴
        const {value} = e.target;
        setSearchText(value);

    };

    return (
        <div>
            <Header title="뉴스 검색"></Header> 
            <SearchInput handleInput={handleSearchTextChange}></SearchInput>
        </div>
    );
    // 헤더 생성 "뉴스 검색" Header
    // 검색 가능 입력 창, 버튼 추가 SearchInput
    // handleInput 프로퍼티 추가로 Input 창에 값을 입력하면 값이 변경됨

};

export default NewsSearch


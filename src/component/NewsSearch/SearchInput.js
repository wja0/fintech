import React from 'react'

const SearchInput = ({handleInput, handleClick}) => {
    return (
        <div>
            <input onChange={handleInput}></input>
            <button onClick={handleClick}>검색</button>
        </div>
    )
}

export default SearchInput
// 검색용 버튼 추가
// input 태그의 onChange라는 이벤트에 handleInput 전달
// button 태그의 onClick 이벤트 설정
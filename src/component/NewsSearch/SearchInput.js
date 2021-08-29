import React from 'react'

const SearchInput = ({handleInput}) => {
    return (
        <div>
            <input onChange={handleInput}></input>
            <button>검색</button>
        </div>
    )
}

export default SearchInput
// 검색용 버튼 추가
// onChange라는 이벤트에 handleInput 전달
import React from 'react'

const NewsListItem = ({title, url}) => {
    return (
        <div>
            <p>제목 : {title}</p>
            <a href={url}>기사로 이동하기</a>
        </div>
    )
}

export default NewsListItem

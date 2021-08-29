import React from 'react'
import NewsListItem from './NewsListItem'

const NewsList = ({searchResult}) => {
    // 검색을 통해 가져온 각각의 뉴스를 가져와서 하나씩 map으로 설정해서 보여줌
    // NewsListItem에서 그리도록 값을 전달
    // 자동 index -> key 값으로 전달
    return (
        <div>
            {searchResult.map((news, index) =>{
                return <NewsListItem 
                title={news.title} 
                url={news.url} 
                key={index}></NewsListItem>
            })}
        </div>
    )
}

export default NewsList

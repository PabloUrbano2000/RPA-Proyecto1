import React from 'react'
import useFetchNews from '../hooks/useFetchNews';
import NewsItem from './NewsItem';
import Spinner from '../Spinner';

const NewsScreen = () => {

    const {data: news, loading} = useFetchNews('general');
    return (
        <>
            <h3>Noticias</h3>
            {                   
                loading && <Spinner />
            }
            <div>
                {
                    news.map(n => (
                        <NewsItem key={n.title} {...n}/>
                    ))
                }
            </div>
            
        </>
    )
}

export default NewsScreen;